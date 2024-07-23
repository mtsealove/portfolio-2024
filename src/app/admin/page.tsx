'use client';

import { getProjects } from '@/api/ProjectApi';
import ProjectItem from '@/components/ProjectItem';
import Button from '@/components/Button';
import { Fragment } from 'react';
import { useQuery } from '@tanstack/react-query';
import useLogin from '@/hooks/useLogin';

function AdminPage() {
  // const projects = await getProjects();
  const user = useLogin();
  const { data: projects } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
  });
  return (
      <Fragment>
          <main
              className='grid gap-4 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
              {projects?.map((project) => (
                  <ProjectItem project={project}
                               key={` project ${project.id}`}/>
              ))}
          </main>
          {user && (
              <div className='flex justify-end w-full'>
                  <Button>작성하기</Button>
              </div>
          )}
      </Fragment>

  );
}

export default AdminPage;
