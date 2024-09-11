'use client';

import NavBar from '@/components/NavBar.jsx';
import Footer from '@/components/Footer.jsx';
import Banner from '@/components/Banner.jsx';
import ShootingStar from '@/components/ShootingStar';

export default function Home() {
  const background = 'bg-gradient-to-b from-black to-secondaryDarker';

  return (
    <div className={`flex flex-col min-h-screen ${background}`}>
      <ShootingStar />
      <NavBar />
      <Banner />
      <Footer />
    </div>
  );
}
