'use client';
import { Fragment } from 'react';

import { Popover, Transition } from '@headlessui/react';
import {
  List,
  X
} from 'phosphor-react';
import { NavMobileItem } from './NavMobileItem';

const navigation = [
  { id: '1', name: 'Inicio', href: '/' },
  { id: '2', name: 'Lista de estações', href: '/listStation' },
  { id: '3', name: 'Cadastrar radio', href: '/newStation'},
  { id: '4', name: 'Developer API', href: '/doc' },
  {
    id: '5',
    name: 'Fork',
    href: 'https://github.com/MatheusMangueira/Radio-World-Connect'
  }
];

const solutions = [
  {
    version: '1.0.0',
    href: '##'
  }
];

export const Navbar = () => {
  return (
    <div className="sticky top-0 w-full z-50">
      <Popover>
        <div className="py-5 lg:px-10 px-5 flex justify-between w-full items-center bg-secondary relative backdrop-blur-md bg-white/30 z-10 border-b border-[#00000075]">
          <div className=" w-full max-w-sm ">
            <Popover className="relative">
              <>
                <Popover.Button
                  className={`
                text-opacity-90
                group inline-flex items-center rounded-md bg-white  border border-black px-2 py-1 text-base font-medium text-black hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 cursor-auto`}
                >
                  <span>v1.0.0</span>
                </Popover.Button>
              </>
            </Popover>
          </div>

          <div className=" lg:hidden">
            <Popover.Button className="rounded-md inline-flex items-center justify-center text-black hover:text-primary focus:outline-none focus:ring-inset ">
              <List className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group
            as="nav"
            className="hidden lg:flex space-x-10 relative items-center"
          >
            {navigation.map((item) => (
              <a
                target={item.name === 'Fork' ? '_blank' : '_self'}
                className="text-black duration-500                 hover:text-[#ccc] text-md"
                key={item.id}
                href={item.href}
              >
                {item.name}
              </a>
            ))}
          </Popover.Group>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterTo="opacity-100 scale-100"
          enterFrom="opacity-0 scale-95"
          leave="duration-100 ease-in"
          leaveTo="opacity-0 scale-95"
          leaveFrom="opacity-100 scale-100"
        >
          <Popover.Panel
            focus
            className="absolute z-[1000] top-0 inset-x-0 transition transform origin-top-right lg:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-secondary divide-y-2 divide-gray-50">
              <div className="h-screen pt-5 pb-6 backdrop-blur-sm bg-white/30 ">
                <div className="flex items-center justify-end">
                  <div className="mr-2">
                    <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-black  focus:outline-none  ">
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid grid-cols-1 gap-7 ">
                    {navigation.map((item) => (
                      <NavMobileItem
                        target={item.name === 'Fork' ? '_blank' : '_self'}
                        key={item.id}
                        href={item.href}
                      >
                        {item.name}
                      </NavMobileItem>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};
