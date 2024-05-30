import { HTMLAttributes } from 'react';
import { render, screen } from '@testing-library/react';
import ProjectPage from '@/app/projects/[projectId]/page';
import * as projectApi from '@/api/ProjectApi';
import { mockProject } from '@/__test__/mock';
import RootLayout from '@/app/layout';

jest.mock('next/image', () => (
  (props: HTMLAttributes<HTMLImageElement>) => (<img {...props} alt=''/>)
));

jest.mock('next/navigation', () => (
  {
    useRouter: jest.fn(() => ({
      back: jest.fn(),
    })),
    usePathname: jest.fn(),
  }
));

jest.mock('../api/ProjectApi', () => ({
  getProject: jest.fn(),
}));

jest.spyOn(projectApi, 'getProject')
  .mockResolvedValue(mockProject);

const setup = async () => render(await ProjectPage({ params: { projectId: 1 } }), {
  wrapper: RootLayout,
});

describe('project render', () => {
  beforeEach(async () => {
    await setup();
  });
  test('project render', () => {
    expect(screen.getByText(mockProject.title)).toBeInTheDocument();
    expect(screen.getByText(mockProject.summary)).toBeInTheDocument();
    expect(screen.getAllByLabelText('project-image').length).toEqual(mockProject.images.length);
  });

  test('prevent xxs', () => {
    expect(screen.getByTestId('project-contents')).toBeInTheDocument();
    expect(screen.queryByTestId('xxs')).toBeNull();
  });
});
