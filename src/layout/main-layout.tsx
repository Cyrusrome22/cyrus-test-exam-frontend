import React from 'react';

interface MainLayoutProps {
  children: React.ReactElement;
}

const MainLayout: React.FunctionComponent<MainLayoutProps> = (
  props: MainLayoutProps
) => {
  return (
    <div className="container p-2 bg-secondary">{props.children}</div>
  );
};

export default MainLayout;
