import Container from '@/components/Container';
import Title from '@/components/Title';
import careers from '@/constants/careers';
import CareerItem from '@/components/CareerItem';

function CareerSection() {
  return (
        <Container backgroundColor='bg-teal-400'
                   id='career' >
            <Title className='text-white'>Career</Title>
            <article className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {careers.map((career, i) => (
                    <CareerItem career={career}
                                key={`career ${i}`} />
                ))}
            </article>
        </Container>
  );
}

export default CareerSection;
