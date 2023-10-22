type CardStationsProps = {
  name: string;
};

export const CardStations = ({ name }: CardStationsProps) => {
  return (
    <div className="absolute top-20 right-0 p-3 bg-white rounded-lg">
      <h1 className="text-sm md:text-xl">{name}</h1>
    </div>
  );
};
