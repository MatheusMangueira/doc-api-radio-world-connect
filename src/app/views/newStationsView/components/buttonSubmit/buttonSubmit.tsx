type ButtonSubmitProps = {
  name: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonSubmit = ({ name, ...props }: ButtonSubmitProps) => {
  return (
    <button
      className="p-2 rounded-lg shadow-md lg:w-[500px] w-full h-[40px]
      bg-yellow-500 text-base  hover:bg-transparent transition duration-500 "
      {...props}
    >
      {name}
    </button>
  );
};
