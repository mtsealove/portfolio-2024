import { HTMLAttributes } from 'react';

const CardBody = (props: HTMLAttributes<HTMLDivElement>) => {
  const { children, ...rest } = props;
  return (
      <div className='p-5 md:p-7'
          {...rest}>
          {children}
      </div>
  );
};

export default CardBody;
