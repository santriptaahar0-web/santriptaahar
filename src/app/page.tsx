import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BannerSection from '@/components/home/BannerSection'
import BenefitsBar from '@/components/home/BenefitsBar'
import StatsSection from '@/components/home/StatsSection'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import ProductsSection from '@/components/home/ProductsSection'
import Accomplishments from '@/components/home/Accomplishments'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <Header />
      <BannerSection />
      <BenefitsBar />
      <StatsSection />
      <WhyChooseUs />
      <ProductsSection />
      <Accomplishments />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}

