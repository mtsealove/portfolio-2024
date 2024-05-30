import { Career, CareerDetail } from '@/models/career';
import dayjs from 'dayjs';
import Card from '@/components/Card';
import CardBody from '@/components/Card/CardBody';
import Image from 'next/image';

interface Props {
    career: Career;
}

const CareerItem = ({ career }:Props) => {
  const {
    company, companyImg, items, role, startAt, endAt, roundIcon,
  } = career;
  const endDate = () => {
    if (endAt) {
      return dayjs(endAt).format('YYYY.MM');
    }
    return 'now';
  };
  const period = () => {
    if (endAt) {
      return dayjs(endAt).diff(dayjs(startAt), 'month');
    }
    return dayjs().diff(dayjs(startAt), 'month');
  };
  const Date = () => (
          <p className='text-sm mt-2 font-medium text-gray-500'>
              {dayjs(startAt).format('YYYY.MM')}
              &nbsp;~&nbsp;
              {endDate()}
              &nbsp;({period()} mo.)
          </p>
  );
  const Role = () => (
      <p className='font-semibold text-lg text-gray-700 mb-2'>
          Role: {role}
      </p>
  );
  const CompanyInfo = () => (
          <div className='flex items-center'>
              <Image src={`/logos/ic_${companyImg}`}
                     width={roundIcon ? 40 : 100}
                     height={40}
                     className={`h-10 max-h-10 ${roundIcon && 'rounded-full'} object-contain`}
                     alt={company}/>
              <h3 className='text-xl font-semibold ml-3 text-gray-700'>
                  {company}
              </h3>
          </div>
  );
  return (
        <Card aria-label='career-card'>
            <CardBody>
                <CompanyInfo/>
                <Date/>
                <Role/>
                <div className='flex flex-col gap-y-2'>
                    {items.map((item, i) => (
                        <ItemDetail item={item}
                                    key={`item ${i}`}/>
                    ))}
                </div>
            </CardBody>
        </Card>
  );
};

const ItemDetail = ({ item }: { item: CareerDetail }) => {
  const { title, contents } = item;
  return (
        <div>
            <p className='font-semibold text-gray-600 mb-2'>{title}</p>
            {contents.map((content, i) => (
                <p className='text-sm font-medium text-gray-600 mb-1.5'
                   key={`content ${i}`}>
                    {content}
                </p>
            ))}
        </div>
  );
};

export default CareerItem;
