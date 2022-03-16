import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div id='layout' className='h-full min-h-full'>
      {children}
    </div>
  );
}
