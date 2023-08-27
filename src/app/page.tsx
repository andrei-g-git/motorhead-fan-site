import Image from 'next/image'
import Homeee from './(pages)';
//import LandingParallaxBg from '@/components/landing/LandingParallaxBg';
import BandFixedBg from '@/components/landing/BandFixedBg';
////import ArticlePreviews from '@/components/landing/ArticlePreviews';
//import TourPreviews from '@/components/landing/TourPreviews';

export default function Home() {
  return (
    <main> {/* className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <Homeee //BandFixedBg={BandFixedBg}
       // ArticlePreviews={ArticlePreviews}
        //TourPreviews={TourPreviews}
      />
    </main>
  )
}
