'use client';

import NavBar from '@/components/NavBar.jsx';
import Footer from '@/components/Footer.jsx';
import Banner from '@/components/Banner.jsx';
import ShootingStar from '@/components/ShootingStar';

export default function Home() {
  return (
    <div className={`flex flex-col min-h-screen`}>
      <ShootingStar />
      <Banner />
    </div>
  );
}
