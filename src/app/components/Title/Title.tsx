type TitleProps = {
  name: string;
};

export const Title = ({ name }: TitleProps) => {
  return (
    <>
      <h1 className="lg:text-6xl md:text-5xl text-2xl text-[#ffffff] font-bold text-center drop-shadow-xl ">
        {name} <span className="text-[#3B06D0]">se conectar</span>
      </h1>
    </>
  );
};
