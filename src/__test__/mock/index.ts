import { Project } from '@/models/project';

export const mockProject: Project = {
  id: 1,
  description: '<div><script data-testid="xxs">window.alert("injection")</script>test project description</div>',
  endAt: new Date(),
  startAt: new Date(),
  images: [''],
  summary: 'test project summary',
  thumbnail: '',
  title: 'test project title',
};

export const mockProjects: Project[] = [mockProject, { ...mockProject, id: 2 }, { ...mockProject, id: 3 }];
