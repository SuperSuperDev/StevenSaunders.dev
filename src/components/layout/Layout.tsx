import { ThemeProvider } from 'next-themes';
import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <ThemeProvider attribute='class'>
      <div id='layout' className='h-full min-h-full min-w-full'>
        {children}
      </div>
    </ThemeProvider>
  );
}
