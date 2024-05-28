import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { showImage } from '@/reducers/images';

interface Props {
    img: string;
    index: number;
}

const ProjectImage = ({ img, index }:Props) => {
  const dispatch = useDispatch();
  return (
        <Image src={img}
               alt={img}
               width={200}
               height={200}
               className='aspect-square object-cover bg-white shadow-lg rounded cursor-pointer border transition duration-200 ease-in-out transform hover:-translate-y-2'
               onClick={() => dispatch(showImage({ currentNumber: index }))}
        />
  );
};

export default ProjectImage;
