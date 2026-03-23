import { Hero } from '@/components/home/Hero';
import { Marquee } from '@/components/ui/Marquee';
import { FeaturedItems } from '@/components/home/FeaturedItems';
import { WhyUs } from '@/components/home/WhyUs';
import { Testimonials } from '@/components/home/Testimonials';
import { CTABanner } from '@/components/home/CTABanner';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedItems />
      <WhyUs />
      <Testimonials />
      <CTABanner />
    </>
  );
}