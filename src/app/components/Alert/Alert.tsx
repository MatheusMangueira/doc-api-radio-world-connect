export interface AlertProps {
  message: string;
  type: 'success' | 'error';
}

export const Alert = ({ message, type }: AlertProps) => {
  return (
    <div
      className={`${
        type === 'success' ? 'bg-green-400' : 'bg-red-400'
      } w-full h-10 flex justify-center items-center text-white font-bold

      `}
    >
      {message}
    </div>
  );
};
