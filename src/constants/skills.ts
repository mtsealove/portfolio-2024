import { SkillSet } from '@/models/skill';

const skills: SkillSet[] = [
  {
    title: 'Language',
    skills: [{ name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Java', icon: 'java' },
      { name: 'Kotlin', icon: 'kotlin' },
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'Swift', icon: 'swift' }],
  },
  {
    title: 'FrontEnd',
    skills: [{ name: 'React.js', icon: 'react' },
      { name: 'Next.js', icon: 'next' },
      { name: 'Scss(Sass)', icon: 'scss' },
      { name: 'Nuxt.js', icon: 'nuxt' },
      { name: 'Emotion', icon: 'emotion', exp: 'png' },
      { name: 'Svelte.js', icon: 'svelte' },
    ],
  },
  {
    title: 'Backend',
    skills: [{ name: 'Nest.js', icon: 'nest' },
      { name: 'Typeorm', icon: 'typeorm' },
      { name: 'Express.js', icon: 'express' }],
  },
  {
    title: 'Database',
    skills: [{ name: 'Postgresql', icon: 'postgresql' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Firebase', icon: 'firebase' }],
  },
  {
    title: 'Mobile',
    skills: [{ name: 'Android', icon: 'android' },
      { name: 'React Native', icon: 'react' },
      { name: 'Ios', icon: 'ios' }],
  },
  {
    title: 'Deploy',
    skills: [{ name: 'GCP', icon: 'gcp' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'AWS', icon: 'aws' }],
  },
  {
    title: 'Tools',
    skills: [{ name: 'Figma', icon: 'figma' },
      { name: 'XD', icon: 'xd' },
      { name: 'Slack', icon: 'slack' },
      { name: 'Notion', icon: 'notion' },
      { name: 'Git', icon: 'git' }],
  },
];

export default skills;
