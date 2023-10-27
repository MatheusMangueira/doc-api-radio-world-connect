type TitleProps = {
  name: string;
  span: string;
};

export const Title = ({ name, span }: TitleProps) => {
  return (
    <>
      <h1 className="lg:text-6xl md:text-5xl text-2xl text-[#808080] font-bold text-center drop-shadow-xl ">
        {name} <span className="text-[#3B06D0]">{span}</span>
      </h1>
    </>
  );
};
