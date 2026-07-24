import LandingNavbar from '@/components/LandingNavbar';
import LandingHero from '@/components/LandingHero';
import LandingPageSections from '@/components/LandingPageSections';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <LandingNavbar />
      <LandingHero />
      <LandingPageSections />
      <Footer />
    </>
  );
}