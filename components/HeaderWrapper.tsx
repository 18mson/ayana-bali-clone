'use client';

import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./Header'), {
  ssr: false
});

const HeaderWrapper = () => {
  return <Header />;
};

export default HeaderWrapper;