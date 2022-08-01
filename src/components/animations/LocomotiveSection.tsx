import * as React from 'react';

export default function LocomotiveSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const sectionRef = React.useRef<HTMLDivElement>(null);

  return (
    <section
      data-scroll-section
      className={`min-h-screen ${className} m-auto`}
      ref={sectionRef}
      id={id}
    >
      {children}
    </section>
  );
}
