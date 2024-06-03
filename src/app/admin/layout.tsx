import { ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}
export default function AdminLayout({ children }:Props) {
  return (
        <div className='bg-slate-50 min-h-dvh pt-24 px-4  pb-32'>
            {children}
        </div>
  );
}
