type StationTitleProps = {
  name: string;
};

export const StationTitle = ({ name }: StationTitleProps) => {
  return (
    <div className="w-full text-center">
      <p className="text-black font-light lg:text-5xl md:text-4xl  text-2xl ">{name}</p>
    </div>
  );
};
