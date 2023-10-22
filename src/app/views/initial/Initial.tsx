import { BallYellow } from '@/app/components/BallYellow';
import { Button } from '@/app/components/Button';
import { CardStations } from '@/app/components/CardStations';
import { Title } from '@/app/components/Title';

export const Initial = () => {
  return (
    <div className="relative w-full h-[570px] flex justify-center items-center">
      <BallYellow />
      <CardStations name="Estações até o momento: 500" />
      <div className="flex flex-col lg:gap-12 gap-6 justify-center items-center w-full h-full">
        <div className="flex flex-col gap-4 justify-center items-center w-full">
          <Title name="Para quem ama" />
          <h4 className="lg:text-[24px] sm:text-[18px] text-sm font-light text-center lg:max-w-[560px] sm:max-w-[460px] max-w-[260px] leading-normal ">
            A Radio World Connect é uma radio open source para você que ama
            ouvir uma boa musica.
          </h4>
        </div>
        <div className="flex justify-center items-center w-full">
          <Button href="/doc" name="Developer API" />
        </div>
      </div>
    </div>
  );
};
