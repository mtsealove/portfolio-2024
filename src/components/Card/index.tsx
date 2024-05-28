import { HTMLAttributes } from 'react';

const Card = (props:HTMLAttributes<HTMLDivElement>) => {
  const { children, className, ...rest } = props;
  return (
        <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}
             aria-label='card'
            {...rest}>
            {children}
        </div>
  );
};

export default Card;
