'use client';

import ProjectImage from '@/components/ProjectImage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setImages } from '@/reducers/images';

interface Props {
    images: string[];
}

function ProjectImageContainer({ images }:Props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setImages(images));
  }, []);
  return (
        <article className='grid grid-cols-3 lg:grid-cols-5 gap-4 mt-8'>
            {images.map((img, i) => (
                <ProjectImage key={`image ${i}`}
                              index={i}
                              img={img}/>
            ))}
        </article>
  );
}

export default ProjectImageContainer;
