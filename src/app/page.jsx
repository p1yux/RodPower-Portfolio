
import HeroSection from '@/components/custom/landing/HeroSection';
import AboutSection from '@/components/custom/landing/AboutSection';
import PlatformSection from '@/components/custom/landing/PlatformSection';


export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <PlatformSection />
    </div>
  );
}