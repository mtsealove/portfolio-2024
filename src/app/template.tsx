import { ReactNode } from 'react';
import Transition from '@/components/Transition';

interface Props {
    children?: ReactNode;
}
export default function Template({ children }:Props) {
  return (
        <Transition>
            {children}
        </Transition>
  );
}
