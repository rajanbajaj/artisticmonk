// layouts/PageLayout.tsx

import React from 'react';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <header className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">{title}</h1>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default PageLayout;
