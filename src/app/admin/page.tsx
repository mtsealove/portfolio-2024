import { getProjects } from '@/api/ProjectApi';
import ProjectItem from '@/components/ProjectItem';
import Button from '@/components/Button';
import { Fragment } from 'react';

async function AdminPage() {
  const projects = await getProjects();
  return (
      <Fragment>
          <main
              className='grid gap-4 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
              {projects.map((project) => (
                  <ProjectItem project={project}
                               key={` project ${project.id}`}/>
              ))}
          </main>
          <div className='flex justify-center'>
              <Button>작성하기</Button>
          </div>
      </Fragment>

  );
}

export default AdminPage;
