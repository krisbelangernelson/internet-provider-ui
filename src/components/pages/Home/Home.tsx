import { type FC } from 'react'
import HeroSection from './HeroSection'
import FeaturesSummary from './FeaturesSummary'
import Features from './Features'
import WhyChooseUs from './WhyChooseUs'
import FeaturesSummaryMore from './FeaturesSummaryMore'
import FeaturesMore from './FeaturesMore'
import Testimonials from './Testimonials'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { ROUTES, FORMS } from '@/constants'

const Home: FC = () => {
  const navigate = useNavigate()

  return (
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
          <h3>Ready to Experience the Power?</h3>
          <Button
            type="button"
            variant="primary"
            onClick={() => {
              navigate(ROUTES.internet)
            }}
          >
            {FORMS.buttons.getConnected.label}
          </Button>
        </div>
      </section>
    </>
  )
}

export default Home
