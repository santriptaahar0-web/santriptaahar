import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/home/HeroSection'
import BannerSection from '@/components/home/BannerSection'
import Bestsellers from '@/components/home/Bestsellers'
import ProductsSection from '@/components/home/ProductsSection'
import AboutSection from '@/components/home/AboutSection'
import StatsSection from '@/components/home/StatsSection'
import Testimonials from '@/components/home/Testimonials'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Certifications from '@/components/home/Certifications'
import Accomplishments from '@/components/home/Accomplishments'
import BenefitsBar from '@/components/home/BenefitsBar'
import Newsletter from '@/components/home/Newsletter'

export const metadata = {
  title: 'Santript Aahar - From Water to Wellness',
  description: 'Nourishment Redefined with Spirulina. High in protein, iron, and antioxidants.',
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BannerSection />
      <BenefitsBar />
      <Bestsellers />
      <ProductsSection />
      <AboutSection />
      <StatsSection />
      <WhyChooseUs />
      <Testimonials />
      <Certifications />
      <Accomplishments />
      <Newsletter />
      <Footer />
    </main>
  )
}

