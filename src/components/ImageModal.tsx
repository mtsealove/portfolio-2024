'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/reducers';
import { useEffect, useRef } from 'react';
import Icon from '@/components/Icon';
import { hideImage, nextImage, prevImage } from '@/reducers/images';
import Image from 'next/image';

const ImageModal = () => {
  const dispatch = useDispatch();
  const {
    currentImage, prevEnabled, nextEnabled, currentNumber, images, show,
  } = useSelector((state: RootState) => state.image);
  const bgRef = useRef<HTMLDivElement|null>(null);
  const containerRef = useRef<HTMLDivElement|null>(null);
  const hide = () => dispatch(hideImage());
  useEffect(() => {
    if (show) {
      bgRef.current?.classList.remove('hidden');
      const showTimeout = setTimeout(() => {
        bgRef.current?.classList.remove('opacity-0');
        containerRef.current?.classList.remove('translate-y-80');
      }, 100);
      return () => clearTimeout(showTimeout);
    }
    bgRef.current?.classList.add('opacity-0');
    containerRef.current?.classList.add('translate-y-80');
    const hideTimeout = setTimeout(() => {
      bgRef.current?.classList.add('hidden');
    }, 500);
    return () => clearTimeout(hideTimeout);
  }, [show]);
  return (
        <div className='fixed flex w-full h-full left-0 top-0 bg-black bg-opacity-55 z-20 justify-center items-center hidden transition duration-500 ease-in-out opacity-0'
             onClick={hide}
             ref={bgRef} >
          <div ref={containerRef}
               onClick={(e) => {
                 e.preventDefault();
                 e.stopPropagation();
               }}
               className='rounded p-6 transition duration-500 transform translate-y-80 bg-white w-full max-w-screen-md'>
            <div className='flex items-center justify-between'>
              <h6 className='font-semibold text-xl text-gray-600'>이미지 보기</h6>
              <button onClick={hide}
                      className='cursor-pointer'>
                <Icon name='remove'
                      size={16}/>
              </button>
            </div>
            <div className='flex items-center mt-4'>
              <div className='w-6'>
                {prevEnabled && (
                    <button className='cursor-pointer'
                            onClick={() => dispatch(prevImage())}>
                      <Icon name='arrow_left'/>
                    </button>
                )}
              </div>
              <div className='flex-1'>
                {currentImage && (
                    <Image src={currentImage}
                           width={800}
                           height={800}
                           className='object-contain max-h-96'
                           alt={currentImage}/>
                )}
              </div>
              <div className='w-6'>
                {nextEnabled && (
                    <button className='cursor-pointer'
                            onClick={() => dispatch(nextImage())}>
                      <Icon name='arrow_right'/>
                    </button>
                )}
              </div>
            </div>
            <p className='text-sm text-center text-gray-400 font-medium'>
              {images.length} 개 중 {currentNumber + 1} 번째
            </p>
          </div>
        </div>
  );
};

export default ImageModal;
