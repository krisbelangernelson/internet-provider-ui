import { type FC } from 'react'
import HeroSection from './HeroSection'
import FeaturesSummary from './FeaturesSummary'
import Features from './Features'
import WhyChooseUs from './WhyChooseUs'
import FeaturesSummaryMore from './FeaturesSummaryMore'
import FeaturesMore from './FeaturesMore'
import Testimonials from './Testimonials'

const Home: FC = () => (
  <>
    <HeroSection />
    <WhyChooseUs />
    <FeaturesSummary />
    <Features />
    <FeaturesSummaryMore />
    <FeaturesMore />
    <Testimonials />
    <section className="section-light cta">
      <div className="text-center my-4">
        Ready to Experience the Power?<div>Get Connected Now</div>
      </div>
    </section>
  </>
)

export default Home
