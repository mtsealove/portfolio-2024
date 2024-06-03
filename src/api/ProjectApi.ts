import { Project, ProjectDetail } from '@/models/project';
import instance from './instance';

export interface CreateProjectDto {
    title: string;
    thumbnail: string;
    summary: string;
    startAt: string;
    endAt: string;
    description: string;
    images: string[];
}

export function createProject(dto: CreateProjectDto): Promise<ProjectDetail> {
  return instance.post('/projects', dto);
}

export function getProjects() {
  return instance.get<Project[]>('/projects');
}

export function getProject(id: number): Promise<ProjectDetail> {
  return instance.get(`/projects/${id}`);
}

export function updateProject(id: number, dto: CreateProjectDto): Promise<ProjectDetail> {
  return instance.patch(`/projects/${id}`, dto);
}
