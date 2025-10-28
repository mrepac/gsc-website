import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CallToAction from '@/components/CallToAction';
import Partners from '@/components/Partners';
import PastEvents from '@/components/PastEvents';
import Programs from '@/components/Programs';
import SummerSchool from '@/components/SummerSchool';
import Benefits from '@/components/Benefits';
import ForBusinesses from '@/components/ForBusinesses';
import About from '@/components/About';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import StickyBottomBar from '@/components/StickyBottomBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20 pb-20 md:pb-0">
        <Hero />
        <Partners />
        <PastEvents />
        <Programs />
        <About />
        <Newsletter />
      </main>
      <Footer />
      <StickyBottomBar />
    </div>
  );
}
