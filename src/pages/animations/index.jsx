import { gsap } from 'gsap';
import Image from 'next/image';
import React from 'react';

import Layout from '@/components/layout/Layout';

export default function Animations() {
  React.useEffect(() => {
    const sections = document.querySelectorAll('section');
    const images = document.querySelectorAll('.bg');
    const headings = gsap.utils.toArray('.section-heading');
    const outerWrappers = gsap.utils.toArray('.outer');
    const innerWrappers = gsap.utils.toArray('.inner');
    const wrap = gsap.utils.wrap(0, sections.length - 1);

    document.addEventListener('wheel', handleWheel);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    let animating = false;
    let currentIndex = -1;

    const touch = {
      startX: 0,
      startY: 0,
      dx: 0,
      dy: 0,
      startTime: 0,
      dt: 0,
    };

    const splitHeadings = headings.map((heading) => {
      gsap.set(heading, {
        fontSize: 'clamp(1rem, 5vw, 5rem)',
        // fontWeight: 400,
        textAlign: 'center',
        // letterSpacing: '0.5em',
        marginRight: '-0.5em',
        color: 'hsl(0, 0, 80%)',
        width: '90vw',
        maxWidth: '1200px',
      });
      // return new SplitText(heading, {
      //   type: "chars, words, lines",
      //   linesClass: "clip-text"
      // });
      return heading;
    });

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    function gotoSection(index, direction) {
      index = wrap(index); // make sure it's valid

      animating = true;
      const fromTop = direction === -1;
      const dFactor = fromTop ? -1 : 1;
      const tl = gsap.timeline({
        defaults: { duration: 0.8, ease: 'power4' },
        onComplete: () => (animating = false),
      });
      if (currentIndex >= 0) {
        // The first time this function runs, current is -1
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
          sections[currentIndex],
          { autoAlpha: 0 }
        );
      }
      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo(
        [outerWrappers[index], innerWrappers[index]],

        { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
        { yPercent: 0, opacity: 1 },
        0
      )
        .fromTo(
          images[index],
          { yPercent: 50 * dFactor, opacity: 0 },
          { yPercent: 0, opacity: 1 },
          0
        )
        .fromTo(
          splitHeadings[index].chars,
          { x: 1200, y: -1000, opacity: 0, yPercent: 300 * dFactor },
          {
            opacity: 1,
            y: 0,
            x: 0,
            yPercent: 0,
            duration: 0.5,
            ease: 'power4',

            stagger: {
              each: 0.04,
              from: 'random',
            },
          },
          0.2
        )
        .fromTo(
          '.line',
          { y: -1000, opacity: 0, stagger: { each: 1, from: 'random' } },
          { y: 0, opacity: 1, duration: 0.5, ease: 'power4' },
          0.2
        )
        .to(
          'h2 .line',
          {
            opacity: 1,
            rotate: '-90deg',
            stagger: { each: 0.2, from: 'random' },
          },
          1
        );

      // .fromTo(
      //   'h2',
      //   { y: -1000, opacity: 0 },
      //   { y: 0, opacity: 1, duration: 0.5, ease: 'power4', pin: true },
      //   0.2
      // )

      currentIndex = index;
    }

    function handleWheel(e) {
      if (animating) return;

      if (e.wheelDeltaY < 0) {
        gotoSection(currentIndex + 1, 1);
      } else {
        gotoSection(currentIndex - 1, -1);
      }
    }

    function handleTouchStart(e) {
      const t = e.changedTouches[0];
      touch.startX = t.pageX;
      touch.startY = t.pageY;
    }

    function handleTouchMove(e) {
      e.preventDefault();
    }

    function handleTouchEnd(e) {
      if (animating) return;
      const t = e.changedTouches[0];
      touch.dx = t.pageX - touch.startX;
      touch.dy = t.pageY - touch.startY;
      if (touch.dy > 10) gotoSection(currentIndex - 1, -1);
      if (touch.dy < -10) gotoSection(currentIndex + 1, 1);
    }

    gotoSection(0, 1);
  }, []);

  return (
    <>
      <main className='container m-0 grid h-full min-h-screen grid-cols-1 overflow-hidden text-center text-white'>
        <div className='bg-fixed'>
          <section className='first invisible fixed top-0 h-full w-full'>
            <div className='outer h-full w-full overflow-y-hidden'>
              <div className='inner h-full w-full overflow-y-hidden'>
                <div className='bg one absolute top-0 flex h-full w-full items-center justify-center bg-blue-500 bg-cover object-cover'>
                  <h2 className='section-heading z-20 w-[90vw]'>
                    I&apos;m a full stack{' '}
                    <span className='text-green-600 dark:text-green-400'>
                      developer
                    </span>{' '}
                    and{' '}
                    <span className='text-red-600 dark:text-red-500'>
                      software engineer
                    </span>{' '}
                    with a{' '}
                    <span className='text-yellow-500 dark:text-yellow-400'>
                      passion
                    </span>{' '}
                    for coding.
                  </h2>
                </div>
              </div>
            </div>
          </section>
          <section className='second invisible fixed top-0 h-full w-full'>
            <div className='outer h-full w-full overflow-y-hidden'>
              <div className='inner h-full w-full overflow-y-hidden'>
                <div className='bg absolute top-0 flex h-full w-full items-center justify-center bg-slate-900 bg-cover object-cover'>
                  <div className='section-heading container grid grid-cols-1 md:grid-cols-3'>
                    <div className=' w-full max-w-lg md:order-last md:col-span-1 '>
                      <div className='m-auto max-w-xs py-[10vh]'>
                        <Image
                          src='https://s3.pub1.infomaniak.cloud/object/v1/AUTH_598753f3935548c6a1ca8f065e534ac1/supersuperdev-pub/img/profile1.png'
                          alt='Steven Saunders'
                          width='240'
                          height='240'
                          layout='responsive'
                          className='max-w-[240px] rounded-full'
                        />
                        <h1 className='dark:txt-shdw-distant-dark m-auto grid place-content-center text-center text-2xl leading-tight drop-shadow-md md:text-3xl md:leading-normal lg:text-4xl'>
                          <span className='animate-tracking-in-expand text-primary-600 animation-delay-300 dark:text-primary-400'>
                            STEVEN SAUNDERS
                          </span>
                        </h1>
                      </div>
                    </div>
                    <div className='m-auto grid w-full place-content-center border-primary-500 md:col-span-2 '>
                      <h2
                        className='dark:txt-shdw-distant-dark m-auto place-content-center text-4xl leading-tight drop-shadow-md md:text-5xl 
                md:leading-normal lg:text-6xl'
                      >
                        <span className='line'>
                          I&apos;m a full stack{' '}
                          <span className='line text-green-600 dark:text-green-400'>
                            developer
                          </span>{' '}
                        </span>
                        <span className='line'>
                          and{' '}
                          <span className='line text-red-600 dark:text-red-500'>
                            software engineer
                          </span>
                        </span>
                        <span className='line'>
                          {' '}
                          with a{' '}
                          <span className='line text-yellow-500 dark:text-yellow-400'>
                            passion
                          </span>{' '}
                          for coding.
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='third invisible fixed top-0 h-full w-full'>
            <div className='outer h-full w-full overflow-y-hidden'>
              <div className='inner h-full w-full overflow-y-hidden'>
                <div className='bg absolute top-0 flex h-full w-full items-center justify-center bg-slate-900 bg-cover object-cover'>
                  <h2 className='section-heading z-20 w-[90vw]'>GreenSock</h2>
                </div>
              </div>
            </div>
          </section>
          <section className='fourth invisible fixed top-0 h-full w-full'>
            <div className='outer h-full w-full overflow-y-hidden'>
              <div className='inner h-full w-full overflow-y-hidden'>
                <div className='bg absolute top-0 flex h-full w-full items-center justify-center bg-red-800 bg-cover object-cover'>
                  <h2 className='section-heading z-20 w-[90vw]'>
                    Animation platform
                  </h2>
                </div>
              </div>
            </div>
          </section>
          <section className='fifth invisible fixed top-0 h-full w-full'>
            <div className='outer h-full w-full overflow-y-hidden'>
              <div className='inner h-full w-full overflow-y-hidden'>
                <div className='bg absolute top-0 flex h-full w-full items-center justify-center bg-cover object-cover'>
                  <h2 className='section-heading z-20 w-[90vw]'>
                    Keep scrolling
                  </h2>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

Animations.getLayout = function getLayout(Animations) {
  return <Layout className='bg-zinc-900'>{Animations}</Layout>;
};
