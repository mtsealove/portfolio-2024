'use client';

import { Project } from '@/models/project';
import Card from '@/components/Card';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import Link from 'next/link';

interface Props {
    project: Project;
}

const ProjectItem = ({ project }:Props) => {
  const {
    title, description, thumbnail, summary,
  } = project;
  const [isHovered, setIsHover] = useState(false);
  const blurClass = useMemo(() => (
    `w-full h-full absolute left-0 top-0 bg-gray-900 bg-opacity-55 transform transition duration-300 ease-in-out flex items-center justify-center ${(!isHovered) && 'translate-y-80'}`
  ), [isHovered]);
  return (
        <Link href={`/projects/${project.id}`}>
            <Card className={'cursor-pointer'}
                  aria-label='project'
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}>
                <div className='w-full overflow-hidden relative'>
                    <Image src={thumbnail}
                           width={400}
                           height={300}
                           className='object-cover object-center aspect-4/3 w-full'
                           alt={title}/>
                    <div className={blurClass}>
                        <span className='text-white text-2xl font-semibold'>Click !</span>
                    </div>
                </div>
                <div className='p-4'>
                    <p className='font-semibold'>{title}</p>
                    <p className='text-sm font-medium text-gray-600'>{summary}</p>
                </div>
            </Card>
        </Link>
  );
};

export default ProjectItem;
