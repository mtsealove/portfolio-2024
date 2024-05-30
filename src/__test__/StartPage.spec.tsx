import { HTMLAttributes } from 'react';
import { render, screen } from '@testing-library/react';
import AboutSection from '@/components/AboutSection';
import ProjectSection from '@/components/ProjectSection';
import CareerSection from '@/components/CareerSection';
import careers from '@/constants/careers';
import SkillSection from '@/components/SkillSection';
import Education from '@/components/Education';
import Landing from '@/components/Landing';
import RootLayout from '@/app/layout';
import { mockProjects } from '@/__test__/mock';
import * as projectApi from '../api/ProjectApi';

jest.mock('../api/ProjectApi', () => ({
  getProjects: jest.fn(),
}));

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

describe('section render', () => {
  test('about section render', () => {
    render(<AboutSection/>);
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
  });

  test('career section render', () => {
    render(<CareerSection/>);
    expect(screen.getAllByLabelText('career-card').length).toEqual(careers.length);
  });

  test('skill section render', () => {
    render(<SkillSection/>);
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('React Native')).toBeInTheDocument();
  });

  test('project section render', async () => {
    jest.spyOn(projectApi, 'getProjects')
      .mockResolvedValue(mockProjects);
    render(await ProjectSection());
    expect(screen.getAllByLabelText('project').length).toEqual(mockProjects.length);
  });

  test('education section render', () => {
    render(<Education/>);
    expect(screen.getByText('Educations')).toBeInTheDocument();
  });
});

describe('전체 페이지 테스트', () => {
  const HomePage = () => (
      <main>
        <Landing/>
        <AboutSection/>
        <CareerSection/>
        <SkillSection/>
        <Education/>
      </main>
  );

  beforeEach(() => {
    render(<HomePage/>, { wrapper: RootLayout });
  });

  test('전체 페이지 렌더링', async () => {
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
    expect(screen.getByText('Career')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Educations')).toBeInTheDocument();
  });

  test('레이아웃 렌더링', () => {
    expect(screen.getByLabelText('global-header')).toBeInTheDocument();
    expect(screen.getByLabelText('global-footer')).toBeInTheDocument();
  });
});
