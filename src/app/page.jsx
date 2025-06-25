import HeroSection from '@/components/custom/landing/HeroSection';
import AboutSection from '@/components/custom/landing/AboutSection';
import PlatformSection from '@/components/custom/landing/PlatformSection';
import OrgSection from '@/components/custom/landing/OrgSection';
import SupportSection from '@/components/custom/landing/SupportSection';
import VolunteerForm from '@/components/custom/landing/VolunteerForm';

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <div className="absolute top-[calc(100vh-10rem)] right-4 sm:right-6 lg:right-8 z-20">
        <VolunteerForm />
      </div>
      <SupportSection />
      <PlatformSection />
      <OrgSection />
    </main>
  );
}