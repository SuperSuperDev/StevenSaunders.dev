import { projects } from 'data/projects';
import { gsap, Power4 } from 'gsap/dist/gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { getDevTechIcon } from '@/lib/getDevTechIcon';

import { ProjectListItem } from '@/pages/projects';

const languages = [
  'TypeScript',
  'JavaScript',
  'Python',
  'React',
  'Nextjs',
  'Nodejs',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'Redis',
  'Neo4j',
  'GraphQL',
  'Django',
  'Docker',
  'CSS3',
  'Tailwind CSS',
  'Bulma',
  'HTML5',
  'Sass',
  'Less',
  'GitHub',
  'Git',
  'NPM',
  'Webpack',
  'Illustrator',
  'Photoshop',
  'After Effects',
  'Premiere Pro',
  'Visual Studio',
];

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function TextReveal({ children }) {
  const el = useRef();

  useEffect(() => {
    const duration = 0.8;
    const animations = [];
    const startingValues = [];

    gsap.utils.toArray(el.current.children).forEach((element) => {
      const startingValue = gsap.set(element, {
        opacity: 0.1,
        visibility: 'hidden',
        minHeight: '60vh',
        // center content of children in the middle of the element
        paddingTop: '10vh',
        paddingBottom: '10vh',
        paddingRight: '5vh',
        paddingLeft: '5vh',
        width: '10%',
        margin: 'auto',
        x: 'random(-100%, 100%)',
        y: 'random(-100%, 100%)',
      });

      const animation = gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 70%',
          end: 'bottom 30%',
          markers: false,
          onEnter: () => {
            gsap.to(element, {
              border: '1px solid #fff',
              x: 0,
              y: '0',
              duration,
              opacity: 1,
              visibility: 'visible',
              scale: 1,
              width: '100%',
            });
            gsap.from('.highlighted', {
              duration: 1,
              color: '#fff',
              ease: Power4.easeOut,
              stagger: {
                each: 0.3,
              },
            });
            gsap.fromTo(
              '.reveal svg',
              {
                duration: 3,
                // fill: '#f7eb63',
                stroke: '#f7eb63',

                fill: 'transparent',
                scale: 'random(0.3, 0.5)',
                transition: {
                  duration: 1,
                  ease: Power4.easeOut,
                },
                rotate: '0deg',
                x: 'random(-400, 400)',
                y: 'random(-400, 400)',
                opacity: 0.5,
                // stagger: {
                //   each: 0.3,
                //   grid: 'auto',
                //   from: 'center',
                // },
              },
              {
                duration: 3,
                fill: '#f7eb63',
                stroke: 'transparent',
                scale: 1.3,
                margin: '2px',
                rotate: '360deg',
                opacity: 1,
                x: 0,
                y: 0,
                // stagger: {
                //   each: 0.3,
                //   grid: 'auto',
                //   from: 'center',
                // },
                ease: Power4.easeInOut,
              }
            );
          },
          onLeave: () => {
            // complete animation when leaving the element

            gsap.to(element, {
              x: -100,
              y: -100,
              duration,
              opacity: 0,

              scale: 0,
            });
          },
          onEnterBack: () => {
            gsap.to(element, {
              x: 0,
              y: -100,
              duration,
              opacity: 1,
              visibility: 'visible',
              scale: 1,
            });
          },
          onLeaveBack: () => {
            gsap.to(element, {
              x: 0,
              y: 0,
              duration,
              opacity: 0,

              scale: 0,
            });
          },
        },
        ease: Power4,
      });
      startingValues.push(startingValue);
      animations.push(animation);
    });

    return () => {
      startingValues.forEach((startingValue) => startingValue.kill());
      animations.forEach((animation) => animation.scrollTrigger.kill());
    };
  }, []);

  return (
    <div ref={el} className='reveal grid h-full grid-cols-1 gap-[10vh]'>
      {children}
    </div>
  );
}

// export function StaggeredReveal({ children }) {
//   const el = useRef();
//   useEffect(() => {
//     gsap.utils.toArray(el.current.children).forEach((element) => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: 'animated-section',
//           markers: false,
//           scrub: 0.5,
//           start: 'center 30%',
//           end: 'bottom bottom',
//           pin: true,
//         },
//       });
//       tl.from(el.current, {
//         opacity: 0,
//         scale: 10,
//         ease: 'linear',
//         grid: 'auto',
//         stagger: { each: 0.2, from: 'random' },
//       });
//     });
//   }, []);

//   return (
//     <div ref={el} className='animated-section grid grid-cols-3'>
//       {children}
//     </div>
//   );
// }

export function GoToSection({ children }) {
  const el = useRef();
  const vh = (coef) => window.innerHeight * (coef / 100);
  useEffect(() => {
    const animations = [];
    gsap.utils.toArray(el.current.children).forEach((element, i) => {
      const fullTarget = i * vh(100) - vh(50);
      const initialTarget = 0;
      let target;
      if (i === 0) {
        target = initialTarget;
      } else {
        target = fullTarget;
      }
      const animation = gsap.to(element, {
        y: 0,
        ease: Power4,
        scrollTrigger: {
          trigger: element,
          invalidateOnRefresh: true,
          onEnter: () => {
            gsap.set(el.current, { overflow: 'hidden' });
            gsap.set(element, { y: 0, x: 0 });
            gsap.to(window, {
              duration: 1,
              scrollTo: target,
              overwrite: true,
              onComplete: () => gsap.set(el.current, { overflow: 'auto' }),
            });
            gsap.to(element, {
              x: 0,
              y: 0,
              duration: 1,
              opacity: 1,
            });
          },
        },
      });

      animations.push(animation);
    });
    return () => {
      animations.forEach((animation) => animation.scrollTrigger.kill());
    };
  }, []);

  return <div ref={el}>{children}</div>;
}

export function SectionOne() {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();

  useEffect(() => {
    gsap.set('#innerWrap', { xPercent: -50, yPercent: -40 });
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: q('#outerWrap'),
        toggleActions: 'play complete reverse reset',
        pin: true,
        start: 'top 10%',
        end: '+=1500',
        markers: false,
        scrub: true,
        invalidateOnRefresh: true,
        snap: {
          snapTo: 'labels',
          duration: { min: 0.5, max: 3 },
          delay: 0.2,
          ease: Power4.inOut,
        },
      },
    });
    tl.current
      .fromTo(
        q('.grid'),
        {
          opacity: 0,
          y: 'random(-100vh, 100vh)',
          x: 'random(-100vh, 100vh)',
          scale: 0,
          border: '2px solid #fff',
          width: '1%',
          height: '1%',
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          border: '2px solid yellow',
          duration: 2,
          ease: Power4,
          width: '80%',
          height: '80%',
        }
      )
      .addLabel('h1')
      .fromTo(
        q('h1'),
        { border: '2px solid #fff', opacity: 0, y: -100, visibility: 'hidden' },
        {
          border: '2px solid #000',
          opacity: 1,
          y: 0,
          duration: 1,
          visibility: 'visible',
          ease: Power4.easeOut,
        }
      )
      .addLabel('h2')
      .fromTo(
        q('h2'),
        { opacity: 0, y: -100, visibility: 'hidden' },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          visibility: 'visible',
          ease: Power4.easeOut,
        }
      )
      .addLabel('p')
      .fromTo(
        q('p'),
        { opacity: 0, y: -100, visibility: 'hidden' },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          visibility: '',
          ease: Power4.easeOut,
        }
      )
      .addLabel('end')
      .to(q, {
        duration: 1,
        visibility: 'hidden',
        opacity: 0,
        ease: Power4.easeOut,
      });
    return () => {
      tl.current.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={el}>
      <div id='outerWrap' className='margin-0 container h-full w-full'>
        <section className='margin-0 relative h-screen w-screen'>
          <div
            id='innerWrap'
            className='absolute top-[35%] left-[50%] grid grid-cols-1 gap-7 md:grid-cols-2'
          >
            <h1>Section One</h1>
            <h2>Section One</h2>
            <p>Section One</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export function AnimatedDevIconGrid() {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();

  useEffect(() => {
    gsap.set('#innerWrap', {
      xPercent: -50,
      yPercent: -40,
      maxWidth: '80%',
      maxHeight: '80%',
    });
    gsap.set('.dev-icon-grid svg', { width: '80%', height: '80%' });
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: q('#outerWrap'),
        toggleActions: 'play complete reverse reset',
        pin: true,
        start: 'top 10%',
        end: '+=2000',
        markers: false,
        scrub: true,
        invalidateOnRefresh: true,
        snap: {
          snapTo: 'labels',
          duration: { min: 1, max: 3 },

          ease: Power4.inOut,
        },
      },
    });
    tl.current
      .addLabel('start')
      .fromTo(
        q('h2'),
        {
          opacity: 0,
          y: 'random(-100vh, 100vh)',
          x: 'random(-100vh, 100vh)',
          scale: 10,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,

          ease: Power4,
        }
      )
      .addLabel('devIconGrid')
      .fromTo(
        '.dev-icon-grid svg',
        {
          // fill: '#f7eb63',
          stroke: '#f7eb63',

          fill: 'transparent',
          scale: 'random(0.1, 0.3)',
          transition: {
            duration: 1,
            ease: Power4.easeOut,
          },
          rotate: '0deg',
          x: 'random(-400, 400)',
          y: 'random(-400, 400)',
          opacity: 0.5,
          // stagger: {
          //   each: 0.3,
          //   grid: 'auto',
          //   from: 'center',
          // },
        },
        {
          fill: '#f7eb63',
          stroke: 'transparent',
          scale: 1,
          margin: '2px',
          rotate: '360deg',
          opacity: 1,
          x: 0,
          y: 0,
          stagger: {
            each: 0.1,
            grid: 'auto',
            from: 'top',
          },
          ease: Power4.easeInOut,
        }
      )
      .addLabel('iconsPause')
      .to('.dev-icon-grid svg', {
        duration: 2,
        opacity: 1,
      })
      .addLabel('IconsOut')
      .to('.dev-icon-grid svg', {
        overflow: 'hidden',
        x: '-100vw',
        stagger: {
          each: 0.1,
          grid: 'auto',
          from: 'bottom',
        },
        ease: Power4.easeInOut,
      })
      .addLabel('h2Out')
      .to(q('h2'), {
        x: '-100vw',
        ease: Power4,
      });

    return () => {
      tl.current.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={el}>
      <div id='outerWrap' className='margin-0 container h-full w-full'>
        <section className='margin-0 relative h-screen w-screen'>
          <div
            id='innerWrap'
            className='absolute top-[25%] left-[50%] m-auto w-[90%] lg:max-w-[60%]'
          >
            <h2
              className='dark:txt-shdw-distant-dark p-7 text-4xl leading-tight
                        drop-shadow-md md:text-5xl md:leading-normal lg:text-6xl'
            >
              These are the{' '}
              <span className='highlighted text-red-600 dark:text-red-500'>
                tools{' '}
              </span>
              and{' '}
              <span className='highlighted text-primary-500 dark:text-primary-400'>
                languages
              </span>{' '}
              I use.
            </h2>
            <div className='m-auto grid max-w-3xl grid-cols-6 gap-2'>
              {languages.map((language) => {
                return (
                  <div
                    key={language}
                    className='dev-icon-grid mx-auto w-full max-w-xs'
                  >
                    {getDevTechIcon(language, 'IconComponent')}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export function SVGDraw() {
  const el = useRef();
  const tlIntro = useRef();
  const tlContent = useRef();

  useEffect(() => {
    const getVectorPaths = document.querySelectorAll('.vector path');

    getVectorPaths.forEach((el) => {
      el.style.strokeDasharray = el.getTotalLength();
    });

    tlIntro.current = gsap
      .timeline()
      .set('.content-1 img', {
        opacity: 1,
        maskSize: 'contain',
        maskImage:
          'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTU0cHgiIGhlaWdodD0iMjAxcHgiIHZpZXdCb3g9IjAgMCAxNTQgMjAxIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2MC4xICg4ODEzMykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+cGFyYWxsZWxvZ3JhbS00PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gaWQ9InBhcmFsbGVsb2dyYW0tNCIgZmlsbD0iIzAwMDAwMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzcuMDAwMDAwLCAxMDAuOTIzMDc3KSByb3RhdGUoOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTc3LjAwMDAwMCwgLTEwMC45MjMwNzcpICIgcG9pbnRzPSIyMy4xNTM4NDYyIDI0IDE3NyAyNCAxMzAuODQ2MTU0IDE3Ny44NDYxNTQgLTIzIDE3Ny44NDYxNTQiPjwvcG9seWdvbj4KICAgIDwvZz4KPC9zdmc+)',
        maskPosition: 'bottom',
        maskRepeat: 'no-repeat',
      })

      .fromTo(
        ['.content-1 p', '.content-1 h2'],
        {
          opacity: 0,
          y: -300,
          visibility: 'hidden',
          scale: 0.1,
        },
        {
          opacity: 1,
          y: 0,
          visibility: 'visible',

          ease: 'back',
          //pin: true,
          scale: 1,
          stagger: 0.1,
        }
      )
      .fromTo(
        '.profile-img-wrapper',
        {
          visibility: 'hidden',
          opacity: 0.8,
          x: -300,
          height: '1%',
          border: '2px solid #fff',
        },
        {
          visibility: 'visible',
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: 'power4',
          scale: 1,
          height: '1%',
          overflow: 'hidden',
        }
      )
      .set('.profile-img-wrapper', {
        border: '0px dotted transparent',
      })
      .to('.profile-img-wrapper', {
        duration: 1.5,
        height: '100%',
        ease: 'back',
        transformOrigin: 'top',
      });

    tlContent.current = gsap
      .timeline({
        //toggleActions: 'play complete reverse reset',
        scrollTrigger: {
          animation: tlContent.current,
          trigger: '.section-2',
          start: 'top top',
          end: '+=1500',
          pin: '.vector',
          scrub: true,
          snap: {
            snapTo: 'labels',
            duration: { min: 0.5, max: 3 },
            delay: 0.1,
            ease: Power4.inOut,
          },
        },
      })
      .set('.section-1 svg', { maxWidth: '100%' })
      .addLabel('start')
      .fromTo(
        '.content-1',
        { opacity: 1, y: 0, scale: 1 },
        {
          opacity: 0,
          scale: 0,
          y: 50,
          ease: Power4,
        }
      )
      .fromTo(
        '.content-2',
        { opacity: 0, y: -50, visibility: 'hidden' },
        { opacity: 1, y: 0, ease: Power4, visibility: 'visible' }
      )
      .addLabel('drawSVG')
      .from(
        '.cover-vector-1 path',
        {
          strokeDashoffset:
            document.querySelector('.cover-vector-1 path').getTotalLength() + 4,
        },
        '>'
      )
      .fromTo(
        '.content-2 h3',
        { opacity: 0, y: 50, scale: 0.8, visibility: 'hidden' },
        {
          duration: 0.1,
          opacity: 1,
          y: 0,
          scale: 1,
          ease: Power4,
          visibility: 'visible',
        },
        '<'
      )
      .addLabel('SVGToTop')
      .to('.content-2 h3', {
        duration: 1,
        strokeDashoffset: 0,
        ease: Power4.inOut,
      })
      .addLabel('svgOut')
      .to('.cover-vector-1', {
        opacity: 0,
        ease: 'none',
      });
    return () => {
      tlIntro.current.kill();
      tlContent.current.scrollTrigger.kill();
      tlContent.current.kill();
    };
  }, []);
  return (
    <section
      ref={el}
      className='section-1 container relative mx-auto grid grid-cols-1 place-content-center overflow-x-hidden'
    >
      <div className='vector cover-vector-1 relative grid grid-cols-1 place-content-center gap-7'>
        <div className='content-1 absolute grid w-full grid-cols-1 gap-10 p-[5vh] text-center md:py-[20vh]'>
          <div className='profile-img-wrapper m-auto w-52'>
            <Image
              src='https://s3.pub1.infomaniak.cloud/object/v1/AUTH_598753f3935548c6a1ca8f065e534ac1/supersuperdev-pub/img/profile1.png'
              alt='Steven Saunders'
              width='240'
              height='240'
              objectFit='cover'
              className='profile-img mask relative'
            />
          </div>
          <h2
            className='dark:txt-shdw-distant-dark m-auto place-content-center text-4xl leading-tight drop-shadow-md md:text-5xl 
                md:leading-normal lg:text-6xl'
          >
            Hey! I&apos;m{' '}
            <span className='highlighted text-primary-500 dark:text-primary-400'>
              Steven Saunders
            </span>{' '}
          </h2>
          <p className='prose prose-2xl mx-auto w-full dark:prose-invert'>
            {' '}
            I&apos;m a full-stack developer located in Cambridge, UK. I love the
            simple complexities of well-written code and the powerful
            architecture behind scalable software solutions.
          </p>
        </div>
        <div className='content-2 absolute w-full py-[5vh] text-center md:py-[20vh]'>
          <h3
            className='dark:txt-shdw-distant-dark m-auto place-content-center text-4xl leading-tight drop-shadow-md md:text-5xl 
                md:leading-normal lg:text-6xl'
          >
            I&apos;m a full stack{' '}
            <span className='highlighted text-green-600 dark:text-green-400'>
              developer
            </span>{' '}
            and{' '}
            <span className='highlighted text-red-600 dark:text-red-500'>
              software engineer
            </span>{' '}
            with a{' '}
            <span className='highlighted text-yellow-500 dark:text-yellow-400'>
              passion
            </span>{' '}
            for coding.
          </h3>
          <svg
            className='es-cover-vector max-w-screen'
            width='1920'
            height='529'
            viewBox='0 0 1920 529'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1919.5 393.483C1898 379.983 1730 370.983 1665 436.483C1613 488.883 1534.33 476.317 1501.5 463.483C1455.67 440.983 1362.7 395.483 1357.5 393.483C1335 385.983 1293.5 343.983 1285 336.983C1271 329.483 1176.5 245.483 1159 229.983C1145 217.583 1129.5 220.15 1123.5 222.983L1097 225.483C1077.83 226.65 1038.5 229.183 1034.5 229.983C1009 233.983 1009 239.483 1006.5 243.483C988.5 273.983 980.5 307.983 982 308.983C1016.5 298.983 1085.5 313.983 1090 314.983C1126 316.483 1109.5 311.983 1106.5 311.483C1091.3 309.483 1086.83 300.317 1086.5 295.983C1085.83 295.317 1083.9 293.383 1081.5 290.983C1072 280.983 1076 270.983 1075.5 271.483C1069.5 287.483 1052.5 283.983 1048 282.483C1033 267.483 1033.5 253.983 1034.5 253.483C1047.5 264.483 1039.5 287.483 1036.5 294.983C1032.9 308.583 1022 309.983 1017 308.983C1007.67 308.483 987.6 308.083 982 310.483C963.2 321.283 970.167 344.317 976 354.483L985.5 389.483C977.833 390.817 962.1 393.483 960.5 393.483C949 394.483 949.5 398.483 949 399.483C947.5 403.483 956.5 414.983 956 415.483C936 433.483 921.5 414.983 922.5 413.983C930.1 401.183 920.667 398.983 915 399.483L878.5 398.483C876.5 387.65 872.5 365.483 872.5 363.483C871.7 349.483 876.5 347.65 879 348.483C880.5 349.15 884.4 350.883 888 352.483C906 362.983 909.5 352.983 910 351.983C912 346.483 903.5 332.983 902.5 331.483C894 321.483 892 324.483 890.5 324.983C875 334.483 873.5 329.483 872.5 328.983C868.1 325.383 866.667 306.15 866.5 296.983L869.5 295.983C876.667 294.817 891.9 292.283 895.5 291.483C917 287.983 918 293.983 917.5 294.983C906.5 321.983 934 314.483 936.5 313.483C962 303.483 948 299.983 944.5 296.983C935.7 284.983 959.5 286.65 972.5 288.983C972.5 289.65 972.5 292.483 972.5 298.483C971 313.983 989 313.483 994 314.483C1016.5 316.483 1006.5 341.983 1005.5 344.983C1001.5 353.983 992.5 349.483 989 348.983C973.5 344.483 977 349.983 977.5 351.483C986.7 365.083 1016.67 367.817 1030.5 367.483C1045.33 367.65 1075.8 368.183 1079 368.983C1152 385.483 1104.5 412.983 1099.5 415.483C1058 429.983 1052 414.483 1051 412.983C1041.5 391.483 1045.5 388.483 1048 386.983C1058.5 380.983 1055.5 373.483 1053.5 373.483C1018.3 368.283 1016.17 371.317 1019.5 373.483L1037.5 388.483C1047.5 390.65 1068.3 394.983 1071.5 394.983C1096 396.483 1089.5 380.983 1088.5 379.983C1066 366.483 1062.5 377.483 1062 379.983C1063 394.483 1088.5 390.983 1093 390.983C1131.5 395.983 1096.5 408.483 1093 408.983C1083.8 408.183 1086.17 400.317 1088.5 396.483L1103.5 388.483L1107 384.483L1121 389.983C1136.17 402.65 1168.1 429.283 1174.5 434.483C1212 465.983 1234 468.483 1239 467.983C1281.5 467.483 1292.5 474.983 1298.5 476.983C1427.5 536.983 1298 506.483 1282.5 506.483C1180.5 486.983 1040 504.983 1032.5 506.483C943 532.983 883.5 526.983 879.5 525.983C812 515.483 813.5 456.983 813 454.983C810.5 421.483 832.5 435.983 834 436.983C852 444.983 851.167 433.65 848.5 426.983C847 423.983 843.5 417.483 841.5 415.483C835 405.983 831.5 408.483 830 409.483C816.8 419.083 811.167 413.483 810 409.483C808.667 404.317 806 393.283 806 390.483C806.8 380.483 798.667 379.65 794.5 380.483C790.667 380.983 782.4 382.083 780 382.483C763.5 383.983 774.5 366.483 775 363.483C772.5 350.983 746 359.983 744 360.983C734.5 365.483 744 371.983 746 373.983C753.2 381.583 745.667 384.817 741 385.483L711.5 387.983C711.5 393.65 711.5 405.583 711.5 407.983C709 419.983 715.5 418.983 717.5 417.983C721.9 413.583 726.667 414.817 728.5 415.983C731.667 419.317 738.4 426.583 740 428.983C749.5 452.983 725 445.983 721.5 444.983C711.1 439.783 710.833 445.817 712 449.483L722.5 493.483C724.667 493.317 731.8 492.883 743 492.483C759 491.483 755.5 488.483 755 485.983C750.5 469.483 757.5 466.983 766.5 462.483C789.5 447.983 779.5 481.483 779 484.483C776 502.483 791 493.983 801.5 489.483C814.7 482.683 804.667 483.317 798 484.483C787.5 488.983 765.1 497.983 759.5 497.983C694 504.983 635 496.983 612 492.983C458.4 458.983 617.333 345.817 716 293.483C752.5 274.65 834.7 234.183 871.5 222.983C917.5 208.983 963.5 222.983 920.5 242.483C886.1 258.083 869.5 250.983 865.5 245.483C849.5 234.65 814.8 211.683 804 206.483C794 200.483 770.5 202.65 760 204.483C754.833 204.65 743.3 205.083 738.5 205.483C728.851 205.883 726.146 200.317 726 197.483C726 187.483 726 166.683 726 163.483C725 154.483 730 143.983 732 141.983C738.8 135.183 734.833 123.15 732 117.983C732.167 113.983 732.4 104.983 732 100.983C727.5 78.9834 717 84.9834 716 86.4834C717 101.983 742 99.4834 751 98.4834C772 92.4834 759.5 86.9834 758 86.4834C739.5 88.4834 744.5 117.483 744 118.983C738.5 133.483 741.5 138.483 743 140.983C757 152.983 753 190.483 752.5 194.483C754 214.983 734 210.483 727 209.983C698.5 209.983 700 198.983 698.5 194.483C694.5 159.983 681 137.483 677.5 131.983C653 82.9834 667 54.4834 668.5 49.9834C708 -21.0166 768.5 7.4834 772.5 8.4834C858.5 55.4834 808 127.983 807 128.983C783.5 148.983 783.5 186.983 783.5 187.983C783 219.983 751 213.483 747.5 213.983C704 210.483 707.5 219.483 708 220.983C713.5 235.483 764 231.483 764 228.983C757 215.483 726 222.483 723 222.983C693.5 231.983 724 240.483 738.5 242.483C776.5 244.983 762.5 237.983 761.5 236.983C748.5 232.483 727 235.983 725 235.983C701 240.483 726.5 247.483 729 247.983C753.8 250.383 750 254.317 745 255.983C729 260.483 695.1 269.683 687.5 270.483C574.5 279.983 505.5 268.483 483.5 263.983C352.3 229.983 237.167 252.817 196 268.483C137 289.489 15.2 345.9 0 403.5'
              stroke='url(#paint0_linear_1420_110)'
              strokeWidth='2.75'
              strokeMiterlimit='2.61'
              strokeLinecap='round'
            />
            <defs>
              <linearGradient
                id='paint0_linear_1420_110'
                x1='1892.71'
                y1='498.194'
                x2='1063.15'
                y2='994.413'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0.197816' stopColor='#0066CC' />
                <stop offset='0.714684' stopColor='#EB3300' />
                <stop offset='1' stopColor='#EB8D00' />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}

export function AnimatedProjectList() {
  const el = useRef();

  const [animations, setAnimations] = useState([]);
  useEffect(() => {
    gsap.utils.toArray('.project-list-item').forEach((elem, i) => {
      const animation = gsap.set(elem, {
        opacity: 0,
        scrollTrigger: {
          trigger: elem,
          start: 'top 80%',
          end: 'bottom 25%',
          //markers: true,

          onEnter: () => {
            gsap.fromTo(
              `.dev-icons-${i + 1} img`,
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, stagger: { each: 0.1 } }
            );
            gsap.fromTo(elem, { opacity: 0, y: 0 }, { opacity: 1, y: 50 });
          },
          onLeave: () => {
            gsap.to(elem, { opacity: 0, y: 0 });
          },
          onEnterBack: () => {
            gsap.to(elem, { opacity: 1, y: 50 });
            gsap.fromTo(
              `.dev-icons-${i + 1} img`,
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, stagger: { each: 0.1 } }
            );
          },
          onLeaveBack: () => {
            gsap.to(elem, { opacity: 0, y: 0 });
          },
        },
      });

      setAnimations([...animations, animation]);
    });
    return () => {
      animations.forEach((animation) => {
        animation.kill();
        animation.scrollTrigger.kill();
      });
      setAnimations([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section ref={el} className='project-section container mx-auto w-full py-7'>
      <div className='project-list container mx-auto grid grid-cols-1 gap-7'>
        {projects.map((project) => (
          <ProjectListItem {...project} key={project.id} />
        ))}
      </div>
    </section>
  );
}
