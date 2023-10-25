'use client';

import { useEffect, useState } from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table';
import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { StationTitle } from '../newStationsView/components/stationTitle';
import { Ball } from '@/app/components/Ball';
import { api } from '@/app/service/api/api';

type Payment = {
  name: string;
  urlRadio: string;
  latitude: number;
  longitude: number;
};

type StationsProps = {
  id: string;
  name: string;
  image?: string;
  urlRadio: string;
  latitude: number;
  longitude: number;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Nome
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue('name')}</div>
  },
  {
    accessorKey: 'urlRadio',
    header: 'URL da rádio',
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue('urlRadio')}</div>
    )
  },
  {
    accessorKey: 'latitude',
    header: 'Latitude',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('latitude')}</div>
    )
  },
  {
    accessorKey: 'longitude',
    header: () => <div className="text-right">Longitude</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">
          {row.getValue('longitude')}
        </div>
      );
    }
  },

  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="z-50 bg-[#f1f1f1]" align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem
              className=""
              onClick={() => navigator.clipboard.writeText(payment.name)}
            >
              Copiar nome
            </DropdownMenuItem>
            <DropdownMenuItem
              className=""
              onClick={() => navigator.clipboard.writeText(payment.urlRadio)}
            >
              Copiar URL
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

export const ListStationView = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [pagination, setPagination] = useState({
    pageSize: 10,
    pageIndex: 0
  });

  const [data, setData] = useState<StationsProps[]>([]);

  useEffect(() => {
    const getStations = async () => {
      try {
        const response = await api.get('/radio/all');
        const stations = response.data;
        setData(stations);
      } catch (error) {
        console.log(error);
      }
    };
    getStations();
  }, []);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination
    }
  });

  return (
    <div className=" w-full h-screen relative">
      <Ball
        className="lg:w-[648px] lg:h-[648px]
      md:w-[400px] md:h-[400px] w-[300px] h-[300px] bg-ball-yellow shadow-3xl lg:top-[-150px] lg:left-[100px]
      md:top-[-90px] md:left-[50px] top-[0px] left-[0px]"
      />

      <div className="pt-14 pb-8">
        <StationTitle name="Lista de Estações" />
      </div>

      {!data ? (
        <div className="w-full flex justify-center items-center text-black text-2xl">
          Carregando...
        </div>
      ) : (
        <div className="w-full ">
          <div className="flex items-center py-4">
            <Input
              placeholder="Filtrar por nome..."
              value={
                (table.getColumn('name')?.getFilterValue() as string) ?? ''
              }
              onChange={(event) =>
                table.getColumn('name')?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
            />
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-[#fff]" asChild>
                <Button variant="outline" className="ml-auto">
                  Colunas <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#fff]" align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize bg-[#fff]"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id === 'name'
                          ? 'Nome'
                          : column.id === 'urlRadio'
                          ? 'URL da rádio'
                          : column.id === 'latitude'
                          ? 'Latitude'
                          : column.id === 'longitude'
                          ? 'Longitude'
                          : 'Ações'}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="rounded-md border">
            <Table className="bg-[#f1f1f1]">
              <TableHeader className="bg-gray-300">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow
                    className="border-b border-black"
                    key={headerGroup.id}
                  >
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      className="border-b border-black hover:bg-gray-500 hover:bg-opacity-10"
                      key={row.id}
                      data-state={row.getIsSelected() && 'selected'}
                    >
                      {row.getVisibleCells().map((cell, index) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      Aguarde um momento...
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-end space-x-2 py-4">
            <div className="flex-1 text-sm text-muted-foreground">
              {pagination.pageIndex + 1}- {table.getPageCount()} página(s).
            </div>
            <div className="space-x-2">
              <Button
                className=" cursor-pointer "
                variant="default"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Anterior
              </Button>
              <Button
                className="cursor-pointe"
                variant="default"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Proximo
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
