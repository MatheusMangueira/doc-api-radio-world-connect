import cx from 'classnames';

type BallProps = {
  className?: string;
};

export const Ball = ({ className }: BallProps) => {
  return (
    <div
      className={cx(
        className,
        `absolute rounded-full
      flex-shrink
     z-[-1]
    `
      )}
    />
  );
};
