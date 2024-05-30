import Container from '@/components/Container';
import Title from '@/components/Title';
import skills from '@/constants/skills';
import { Skill } from '@/models/skill';
import Icon from '@/components/Icon';

function SkillSection() {
  return (
        <Container backgroundColor='bg-yellow-400'
                   id='skills' >
            <Title>Skills</Title>
            <article className='flex flex-col'>
                {skills.map((skillSet) => (
                    <div key={`skillSet ${skillSet.title}`}>
                        <h3 className='text-lg font-semibold text-violet-950'>
                            {skillSet.title}
                        </h3>
                        <div className='grid sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 mb-6'>
                            {skillSet.skills.map((skill) => (
                                <SkillItem skill={skill}
                                           key={`skill ${skill.name}`} />
                            ))}
                        </div>
                    </div>
                ))}
            </article>
        </Container>
  );
}

export function SkillItem({ skill }:{skill: Skill}) {
  const { name, icon, exp } = skill;
  return (
        <div className='px-5 py-4 bg-white shadow-lg rounded-lg flex items-center'
             aria-label='skill'>
            {icon && (
                <Icon name={icon}
                      exp={exp} />
            )}
            <p className='font-medium ml-3'>{name}</p>
        </div>
  );
}

export default SkillSection;
