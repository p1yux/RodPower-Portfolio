import BioHeroSection from "@/components/custom/bio/BioHeroSection";
import BioStorySection from "@/components/custom/bio/BioStorySection";
import BioExperienceSection from "@/components/custom/bio/BioExperienceSection";
import BioPoliticalSection from "@/components/custom/bio/BioPoliticalSection";

export const metadata = {
  title: "Biography - Rod Power | Brampton City Councillor",
  description: "Learn about Rod Power's journey - from a proud Bramptonian athlete to an award-winning business leader and dedicated city councillor serving the community.",
  keywords: "Rod Power Biography, Brampton Councillor, Community Leader, Public Service, Brampton Politics",
};

export default function Bio() {
  return (
    <main>
      <BioHeroSection />
      <BioStorySection />
      <BioExperienceSection />
      <BioPoliticalSection />
    </main>
  );
}
