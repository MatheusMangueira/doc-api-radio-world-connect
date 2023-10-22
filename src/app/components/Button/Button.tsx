'use client';
import { CaretRight } from 'phosphor-react';

type ButtonProps = {
  name: string;
  href?: string;
};

export const Button = ({ name, href }: ButtonProps) => {
  return (
    <>
      <a
        className="bg-white text-black lg:py-6 lg:px-4 rounded-lg shadow-xl sm:w-[333px] md:h-[81px] w-full h-[50px] md:text-2xl ,text-base flex justify-center items-center hover:bg-[#ccc]  transition duration-500 gap-5"
        href={href}
      >
        {name}
        <CaretRight size={18} />
      </a>
    </>
  );
};
