import { about } from './aboutText';

export const About = () => {
  return (
    <div className="border-t border-black border-opacity-20 lg:pt-16 pt-6 flex lg:flex-row flex-col justify-around lg:gap-9 gap-5">
      {about.map((item) => (
        <div className="flex lg:gap-5 gap-2 flex-col" key={item.id}>
          <h1 className="font-bold lg:text-[24px] md:text-[18px] text-sm  ">
            {item.name}
          </h1>
          <p className="font-light lg:text-[18px] md:text-[14px] text-sm leading-normal lg:max-w-xl w-full">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};
