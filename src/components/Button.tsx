import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    fullWidth?: boolean;
}

const Button = (props: Props) => {
  const {
    fullWidth, children, className, ...rest
  } = props;
  return (
      <button className={`py-2 bg-violet-700 text-white font-semibold rounded-lg ${className}`}>
          {children}
      </button>
  );
};

export default Button;
