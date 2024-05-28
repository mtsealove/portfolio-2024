'use client';

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import BgLanding from './bg_landing.jpg';
import styles from './styles.module.scss';
import ArrowDown from './ic_arrow_down.svg';

const Landing = () => {
  const sequence = [
    '',
    1000,
    '안녕하세요',
    1000,
    '개발자 이산해의 포트폴리오입니다',
    2000,
  ];
  const scrollDown = () => {
    const about = document.querySelector<HTMLDivElement>('#about');
    if (about) {
      window.scrollTo({ top: about.offsetTop, behavior: 'smooth' });
    }
  };
  return (
        <section className='relative justify-center items-center flex h-screen'>
            <Image src={BgLanding}
                   className='w-full h-full absolute left-0 top-0 object-center object-cover'
                   alt='랜딩'/>
            <div className='w-full h-full absolute left-0 top-0 bg-black opacity-65'/>
            <div className='relative'>
                <TypeAnimation
                    sequence={sequence}
                    wrapper="h1"
                    speed={50}
                    className={styles.wording}
                    repeat={Infinity}
                />
            </div>
            <Image src={ArrowDown}
                   className={styles.arrow}
                   onClick={scrollDown}
                   alt='내려가기' />
        </section>
  );
};

export default Landing;
