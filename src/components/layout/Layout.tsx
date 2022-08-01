import { ThemeProvider } from 'next-themes';
import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here

  // const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <ThemeProvider attribute='class'>
      <div id='layout' className='h-full min-h-full w-full overflow-x-hidden'>
        {children}
      </div>
    </ThemeProvider>
  );
}
