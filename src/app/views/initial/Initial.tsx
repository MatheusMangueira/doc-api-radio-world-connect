'use client';
import { Ball } from '@/app/components/Ball';
import { Button } from '@/app/components/Button';
import { CardStations } from '@/app/components/CardStations';
import { Title } from '@/app/components/Title';
import { api } from '@/app/service/api/api';
import { useEffect, useState } from 'react';

type StationsProps = {
  content: {
    id: string;
    name: string;
    image?: string;
    urlRadio: string;
    latitude: number;
    longitude: number;
  }[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: string;
  size: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  totalElements: number;
  totalPages: number;
};

export const Initial = () => {
  const [data, setData] = useState<StationsProps>();

  useEffect(() => {
    const getStations = async () => {
      try {
        const response = await api.get('/radio/all');
        const stations = response.data;
        setData(stations);
      } catch (error) {
        console.log(error + ' <==== error getAll');
      }
    };
    getStations();
  }, []);

  return (
    <div className="relative w-full h-[570px] flex justify-center items-center">
      {/* <Ball
        className="lg:w-[648px] lg:h-[648px]
      md:w-[400px] md:h-[400px] w-[300px] h-[300px] bg-ball-yellow shadow-3xl lg:top-[-150px] lg:left-[100px]
      md:top-[-90px] md:left-[50px] top-[0px] left-[0px]"
      /> */}
      <CardStations
        name={`Estações até o momento: ${data ? data?.totalElements : 0}`}
      />
      <div className="flex flex-col lg:gap-12 gap-6 justify-center items-center w-full h-full">
        <div className="flex flex-col gap-4 justify-center items-center w-full">
          <Title span="se conectar" name="Para quem ama" />
          <h4 className="lg:text-[24px] sm:text-[18px] text-sm font-light text-center lg:max-w-[560px] sm:max-w-[460px] max-w-[260px] leading-normal ">
            A Radio World Connect é uma API open source para você que ama
            ouvir uma boa musica.
          </h4>
        </div>
        <div className="flex justify-center items-center w-full">
          <Button href="/doc" name="Documentação API" />
        </div>
      </div>
    </div>
  );
};
