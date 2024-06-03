export interface Project {
    id: number;
    title: string;
    thumbnail: string;
    summary: string;
}

export interface ProjectDetail extends Project {
    startAt: Date;
    endAt: Date;
    description: string;
    images: string[];
}
