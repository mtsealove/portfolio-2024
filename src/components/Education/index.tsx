import Container from '@/components/Container';
import Card from '@/components/Card';
import CardBody from '@/components/Card/CardBody';
import Title from '@/components/Title';
import { ReactNode } from 'react';
import Icon from '@/components/Icon';

function Education() {
  return (
        <Container id='educations'
                   backgroundColor='bg-violet-400'>
            <div className='grid lg:grid-cols-2 mb-4 gap-4'>
                <Card>
                    <CardBody>
                        <Title>Educations</Title>
                        <ActivityContainer>
                            <Activity icon='education'>
                                가천대학교 컴퓨터공학과 졸업 (2021.08)
                            </Activity>
                            <Activity icon='foundation'>
                                물류산업진흥재단 (창업)인큐베이팅 수료(2019.12)
                            </Activity>
                            <Activity icon='education'>
                                건국대학교 사범대학 부속고등학교 졸업 (2015.03)
                            </Activity>
                        </ActivityContainer>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <Title>Awards</Title>
                        <ActivityContainer>
                            <Activity icon='selection'>
                                2019 일반 2차 예비창업 패키지 선정
                            </Activity>
                            <Activity icon='award'>
                                2019 학생창업 유망팀 u300 선정
                            </Activity>
                            <Activity icon='award'>
                                2018 물류 아이디어톤 최우수상
                            </Activity>
                        </ActivityContainer>
                    </CardBody>
                </Card>
            </div>
            <Card>
                <CardBody>
                    <Title>Certifications</Title>
                    <div className='grid lg:grid-cols-2'>
                        <Activity icon='driver'>
                            정보처리기사 (2021.11)
                        </Activity>
                        <Activity icon='tensorflow'>
                            Tensorflow Developer Certification (2023.03)
                        </Activity>
                    </div>
                </CardBody>
            </Card>
        </Container>
  );
}

function ActivityContainer({ children }: { children?: ReactNode }) {
  return (
        <div className='flex flex-col gap-y-2'>
            {children}
        </div>
  );
}

function Activity(props: {icon: string, children?: ReactNode}) {
  const { icon, children } = props;
  return (
        <div className='flex items-center font-medium text-gray-600'>
            <Icon name={icon}
                  className='mr-2'
                  size={18} />
            {children}
        </div>
  );
}

export default Education;
