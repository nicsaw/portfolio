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
