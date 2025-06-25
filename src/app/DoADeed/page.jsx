import DoADeedHero from '@/components/custom/doadeed/DoADeedHero';
import DoADeedContent from '@/components/custom/doadeed/DoADeedContent';
import DoADeedForm from '@/components/custom/doadeed/DoADeedForm';

export const metadata = {
  title: "Do A Deed - Rod Power | Making a Difference in Brampton",
  description: "Spreading kindness and putting smiles on faces in Brampton. Submit a request for someone who could use a pick-me-up or experience through Rod Power's Do A Deed initiative.",
  keywords: "Do A Deed, Rod Power, Brampton, Community Service, Kindness, Golden Rule, Platinum Rule, Community Support",
};

const DoADeedPage = () => {
  return (
    <main className="min-h-screen">
      <DoADeedHero />
      <DoADeedContent />
      <DoADeedForm />
    </main>
  );
};

export default DoADeedPage;
