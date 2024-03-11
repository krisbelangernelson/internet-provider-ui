import { type FC } from 'react'
import HeroSection from './HeroSection'
import FeaturesSummary from './FeaturesSummary'
import Features from './Features'
import WhyChooseUs from './WhyChooseUs'
import FeaturesSummaryMore from './FeaturesSummaryMore'
import FeaturesMore from './FeaturesMore'
import Testimonials from './Testimonials'
import GetConnected from './GetConnected'

const Home: FC = () => (
  <>
    <HeroSection />
    <WhyChooseUs />
    <FeaturesSummary />
    <Features />
    <FeaturesSummaryMore />
    <FeaturesMore />
    <Testimonials />
    <GetConnected />
  </>
)

export default Home
