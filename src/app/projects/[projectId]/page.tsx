import { getProject, getProjects } from '@/api/ProjectApi';
import Image from 'next/image';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import { cache } from 'react';
import ProjectImageContainer from '@/components/ProjectImageContainer';
import ImageModal from '@/components/ImageModal';
import dayjs from 'dayjs';
import { Metadata } from 'next';
import styles from './project.module.scss';

interface Props {
    params: {
        projectId: number;
    };
}

const sanitizeHtml = (html: string): string => DOMPurify(new JSDOM('<!DOCTYPE html>').window).sanitize(html);

const cachedGetProject = cache(async (id: number) => getProject(id));

async function ProjectPage({ params }:Props) {
  const { projectId } = params;
  const project = await cachedGetProject(projectId);
  const {
    title, summary, thumbnail, description,
    images, startAt, endAt,
  } = project;
  return (
        <div className='w-full pb-32'>
            <Image src={thumbnail}
                   className='w-full aspect-4/3 sm:aspect-4 object-cover'
                   width={1000}
                   height={300}
                   alt={project.title} />
            <section className='max-w-screen-md mx-auto px-4 md:px-0'>
                <div className='text-center py-8'>
                    <h1 className='text-3xl md:text-5xl font-bold text-gray-700'>
                        {title}
                    </h1>
                    <p className='mt-4 text-gray-600 font-medium'>{summary}</p>
                </div>
                <article dangerouslySetInnerHTML={{ __html: sanitizeHtml(description) }}
                         className={`text-gray-700 ${styles.contents}`}
                         data-testid='project-contents'
                        />
                <ProjectImageContainer images={images} />
                <ImageModal/>
                <p className='text-center mt-6 font-semibold text-gray-700'>
                    프로젝트 기간
                </p>
                <div className='flex items-center justify-center mt-4 gap-x-3'
                     aria-label='project-priod' >
                    <span className='bg-gray-100 px-4 py-2 rounded text-sm font-medium'>
                        {dayjs(startAt).format('YYYY.MM')}
                    </span>
                    ~
                    <span className='bg-gray-100 px-4 py-2 rounded text-sm font-medium'>
                        {dayjs(endAt).format('YYYY.MM')}
                    </span>
                </div>
            </section>
        </div>
  );
}

export async function generateStaticParams() {
  const projects = await getProjects();
  console.log(projects);
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }:Props): Promise<Metadata> {
  const { projectId } = params;
  const project = await cachedGetProject(projectId);
  const { title, thumbnail, summary } = project;
  return {
    title: `포트폴리오 - ${title}`,
    description: summary,
    openGraph: {
      title: `포트폴리오 - ${title}`,
      description: summary,
      images: [thumbnail],
      siteName: '개발자 이산해 포트폴리오',
    },
  };
}

export default ProjectPage;
