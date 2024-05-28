export interface SkillSet {
    title: string;
    skills: Skill[];
}

export interface Skill {
    name: string;
    icon?: string;
    exp?: string;
}
