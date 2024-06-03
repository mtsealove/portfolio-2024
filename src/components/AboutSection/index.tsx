import Image from 'next/image';
import Container from '@/components/Container';
import Icon from '@/components/Icon';
import { ReactNode } from 'react';
import ProfileImg from './img_profile.jpeg';
import Card from '../Card';
import CardBody from '../Card/CardBody';

function AboutSection() {
  return (
        <Container id='about'
                   backgroundColor='bg-blue-500' >
            <article className='flex gap-y-10 gap-x-10 flex-col lg:flex-row items-center'>
                <Image src={ProfileImg}
                       className='w-80 aspect-square object-cover object-center overflow-hidden rounded-full'
                       priority
                       placeholder='blur'
                       alt='' />
                <Card className='w-full'>
                    <CardBody>
                        <h2 className='font-bold text-3xl mb-6'>
                            Frontend Developer
                        </h2>
                        <div className='gap-y-5 flex flex-col'>
                            <AboutRow iconName='account'>이산해</AboutRow>
                            <AboutRow iconName='home'>서울시 성동구</AboutRow>
                            <AboutRow iconName='phone'>010-6346-1686</AboutRow>
                            <AboutRow iconName='email'>
                                <a href='mailto:mtsealove0927@gmail.com'>
                                    mtsealove0927@gmail.com
                                </a>
                            </AboutRow>
                            <AboutRow iconName='github'>
                                <a href='https://github.com/mtsealove'
                                   target='_blank'>
                                    https://github.com/mtsealove
                                </a>
                            </AboutRow>
                            <AboutRow iconName='message'>
                                웹과 앱을 개발하고 성장을 지향하는 개발자입니다.
                            </AboutRow>
                        </div>
                    </CardBody>
                </Card>
            </article>
        </Container>
  );
}

interface RowProps {
    iconName: string;
    children: ReactNode;
}

const AboutRow = ({ iconName, children }:RowProps) => (
        <div className='font-semibold text-gray-600 flex items-center'
             aria-label='profile-row' >
            <Icon name={iconName}
                  className='mr-6'
            />
            {children}
        </div>
);

export default AboutSection;
