type objective = {
  title: string;
  description: string;
};
type props = {
  title: string;
  description: string;
  objectives: objective[];
};

export default function ContentUSPSGrid(props: props) {
  const { title, description, objectives } = props;

  return (
    <section className='bg-gray-900 text-white'>
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='max-w-xl'>
          <h2 className='text-3xl font-bold sm:text-4xl'>{title}</h2>

          <p className='mt-4 text-gray-300'>{description}</p>
        </div>

        <div className='mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3'>
          {objectives.map(({ title, description }) => (
            <div className='flex items-start' key={title}>
              <span className='flex-shrink-0 rounded-lg bg-gray-800 p-4'>
                <svg
                  className='h-5 w-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                  <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                  ></path>
                </svg>
              </span>

              <div className='ml-4'>
                <h2 className='text-lg font-bold'>{title}</h2>

                <p className='mt-1 text-sm text-gray-300'>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
