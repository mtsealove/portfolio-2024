import Container from '@/components/Container';
import Icon from '@/components/Icon';

const Footer = () => (
    <footer className='text-white font-medium'
            aria-label='global-footer'>
        <Container backgroundColor='bg-slate-700'>
            <div className='flex items-center justify-center gap-x-6'>
                <ExternalLink icon='storybook'
                              name='Storybook'
                              url='https://stories.mtsealove.com' />
                <ExternalLink icon='git_white'
                              name='github'
                              url='https://github.com/mtsealove/portfolio-2024' />
            </div>
            <p className='text-center mt-4 text-sm'>
                Copyright 2024. Sanhae all rights reserved.
            </p>
        </Container>
    </footer>
);

interface Props {
    icon: string;
    name: string;
    url: string;
}

const ExternalLink = ({ icon, name, url }: Props) => (
    <a href={url}
       className='cursor-pointer flex items-center'
       target='_blank'>
        <Icon name={icon}
              className='mr-2'
              size={18}/>
        {name}
    </a>
);

export default Footer;
