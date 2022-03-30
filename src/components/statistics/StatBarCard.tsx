import * as React from 'react';

import clsxm from '@/lib/clsxm';

type StatBarCardItemProps = {
  statTitle: string;
  statValue: string;
} & React.ComponentPropsWithoutRef<'div'>;

type StatBarCardProps = {
  statsArray: StatBarCardItemProps[];
} & React.ComponentPropsWithoutRef<'div'>;

export default function StatBarCard({
  statsArray,
  className,
  ...rest
}: StatBarCardProps) {
  // takes an array of objects with statTitle and statValue properties and  return  a class depending of first, last or middle item
  const getStatClass = (index: number) => {
    if (index === 0) {
      return 'flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r';
    } else if (index === statsArray.length - 1) {
      return 'flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r';
    } else {
      return 'flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l';
    }
  };

  const statClass = (index: number) => clsxm(getStatClass(index), className);

  return (
    <div className={clsxm('', className)} {...rest}>
      <div className='bg-white py-1 sm:py-4'>
        <div className='relative'>
          <div className='absolute inset-0 h-1/2' />
          <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-4xl'>
              <dl className='mt-2 rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3'>
                {statsArray.map((item, index) => (
                  <div key={`stat-${index}index`} className={statClass(index)}>
                    <dt className='truncate text-sm font-medium leading-5 text-gray-500'>
                      {item.statTitle}
                    </dt>
                    <dd className='mt-1 text-3xl font-semibold leading-9 text-gray-900'>
                      {item.statValue}
                    </dd>
                  </div>
                ))}
                {/* <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Pepperoni</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">100%</dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Delivery</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">24/7</dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Calories</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">100k</dd>
                </div> */}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
