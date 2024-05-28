import { HTMLAttributes, useMemo } from 'react';
import Image from 'next/image';

interface Props extends HTMLAttributes<HTMLImageElement>{
    size?: number;
    name: string;
    exp?: string;
}

const Icon = (props:Props) => {
  const {
    size, name, className, exp, ...rest
  } = props;
  const wh = useMemo(() => size || 24, [size]);
  const dotExp = useMemo(() => exp || 'svg', [exp]);
  return (
      <Image className={className}
             src={`/icons/${name}.${dotExp}`}
             width={wh}
             height={wh}
             alt={name}
             {...rest}
      />
  );
};

export default Icon;
