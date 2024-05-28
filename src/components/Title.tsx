import { HTMLAttributes } from 'react';

const Title = (props: HTMLAttributes<HTMLHeadingElement>) => {
  const { children, className, ...rest } = props;
  return (
      <h2 className={`text-2xl md:text-3xl font-bold mb-4 gray-800 ${className}`}>
          {children}
      </h2>
  );
};

export default Title;
