'use client';

import useScrollColor from '@/hooks/useScrollColor';
import Icon from '@/components/Icon';
import { Fragment, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface Props {
    className?: string;
}

const Header = ({ className }:Props) => {
  const pathname = usePathname();
  const [expand, setExpand] = useState<boolean>(false);
  const router = useRouter();
  const scrollToLink = (link?: string) => {
    if (link) {
      const section = document.querySelector<HTMLDivElement>(`#${link}`);
      if (section) {
        window.scrollTo({ top: section.offsetTop - 48, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  const onClickLink = (link?: string) => {
    setExpand(false);
    if (pathname === '/') {
      scrollToLink(link);
    } else {
      router.push('/');
      const timeout = setTimeout(() => {
        scrollToLink(link);
      }, 300);
      return () => clearTimeout(timeout);
    }
    return () => {};
  };

  const { isWhite, iconName } = useScrollColor();
  if (pathname.startsWith('/admin')) {
    return <Fragment/>;
  }

  return (
      <header className={`fixed left-0 top-0 z-10 sm:px-4 py-3 w-full transition duration-200 ${isWhite ? 'bg-white shadow-lg' : 'text-white'} ${className}`}
              aria-label='global-header' >
          <nav className='max-w-screen-lg mx-auto flex justify-between items-center px-4 font-bold '>
              {pathname === '/' ? (
                  <span onClick={() => onClickLink()}
                     className='cursor-pointer'
                  >HOME</span>
              ) : (
                  <button onClick={router.back}>
                      <Icon name='back' />
                  </button>
              )}
              <div className='gap-x-5 hidden sm:flex '>
                  <span onClick={() => onClickLink('about')}
                     className='cursor-pointer'>ABOUT</span>
                  <span onClick={() => onClickLink('career')}
                     className='cursor-pointer'>CAREER</span>
                  <span onClick={() => onClickLink('skills')}
                     className='cursor-pointer'>SKILLS</span>
                  <span onClick={() => onClickLink('projects')}
                     className='cursor-pointer'>PROJECTS</span>
                  <span onClick={() => onClickLink('educations')}
                     className='cursor-pointer'>EDUCATIONS</span>
              </div>
              <button className='sm:hidden'
                      onClick={() => setExpand(true)}>
                  <Icon name={iconName}
                        size={32}/>
              </button>
          </nav>
          <aside className={`fixed left-0 top-0 w-full h-full z-30 transition duration-300 ease-in-out transform ${(!expand) && 'translate-x-full'}`}>
              <div className='bg-gradient-to-br from-cyan-500 to-blue-500 opacity-75 w-full h-full absolute' />
              <div className='px-4 py-6 relative'>
                  <div className='flex justify-end'>
                      <button onClick={() => setExpand(false)}
                              className='p-2'>
                          <Icon name='remove_white'
                                size={20} />
                      </button>
                  </div>
                  <div className='flex flex-col mt-4 gap-y-8'>
                      <span onClick={() => onClickLink('about')}
                         className='cursor-pointer text-white font-semibold text-2xl'>
                          ABOUT
                      </span>
                      <span onClick={() => onClickLink('career')}
                         className='cursor-pointer text-white font-semibold text-2xl'>
                          CAREER
                      </span>
                      <span onClick={() => onClickLink('skills')}
                         className='cursor-pointer text-white font-semibold text-2xl'>
                          SKILLS
                      </span>
                      <span onClick={() => onClickLink('projects')}
                         className='cursor-pointer text-white font-semibold text-2xl'>
                          PROJECTS
                      </span>
                      <span onClick={() => onClickLink('educations')}
                         className='cursor-pointer text-white font-semibold text-2xl'>
                          EDUCATIONS
                      </span>
                  </div>
              </div>
          </aside>
      </header>
  );
};

export default Header;
