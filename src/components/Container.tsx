import { ReactNode } from 'react';

interface Props {
    children?: ReactNode;
    id?: string;
    backgroundColor?: string;
}

/**
 * 가운데 정렬 및 크기 제한 컨테이너
 * @param children
 * @param id
 * @param backgroundColor
 * @constructor
 */

const Container = ({ children, id, backgroundColor }:Props) => (
    <section className={`w-full px-4 py-10 sm:px-10 sm:py-16 ${backgroundColor}`}
         id={id} >
        <div className='flex flex-col mx-auto max-w-screen-lg'>
            {children}
        </div>
    </section>
);

export default Container;
