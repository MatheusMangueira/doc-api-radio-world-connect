type InputProps = {} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ ...props }: InputProps) => {
  return (
    <input
      className="p-2 rounded-lg shadow-md lg:w-[500px] w-full h-[40px] text-base  hover:bg-[#f1f1f1] transition duration-500 "
      {...props}
    />
  );
};
