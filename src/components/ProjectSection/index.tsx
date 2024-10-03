'use client';

import Container from '@/components/Container';
import Title from '@/components/Title';
import { getProjects } from '@/api/ProjectApi';
import ProjectItem from '@/components/ProjectItem';
import { useQuery } from '@tanstack/react-query';

function ProjectSection() {
  // const projects = getProjects();
  const { data: projects } = useQuery({
    queryFn: async () => (await getProjects()),
    queryKey: ['projects'],
  });
  return (
        <Container id='projects'
                   backgroundColor='bg-gray-50'>
            <Title>Projects</Title>
            <article className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {projects?.map((project) => (
                    <ProjectItem key={`project ${project.id}`}
                                 project={project}/>
                ))}
            </article>
        </Container>
  );
}

export default ProjectSection;
