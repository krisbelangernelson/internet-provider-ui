import { type FC } from 'react'
import Container from 'react-bootstrap/Container'
import SpeedImg from '@/assets/images/speed.jpg'
import WifiImg from '@/assets/images/connect-wifi.jpg'
import SupportImg from '@/assets/images/support.jpg'
import FeaturesItem from './FeaturesItem'

const Features: FC = () => (
  <section className="section-light features">
    <Container>
      <FeaturesItem
        imgSrc={SpeedImg as string}
        imageOrder={1}
        textOrder={2}
        heading="Accelerate to your goals"
        subHeading="No more waiting for videos to load or games to buffer. Experience lightning-fast internet speeds that allow you to download files in seconds, stream 4K content without interruptions, and enjoy lag-free online gaming."
      />
      <FeaturesItem
        imgSrc={WifiImg as string}
        imageOrder={2}
        textOrder={1}
        heading="Stay connected"
        subHeading="Tired of dead zones and unreliable connections? Our advanced routers deliver powerful Wi-Fi signals that reach every corner of your home, ensuring a seamless connection for all your devices. Browse, stream, and game anywhere in your house with confidence."
      />
      <FeaturesItem
        imgSrc={SupportImg as string}
        imageOrder={1}
        textOrder={2}
        heading="We've got you covered"
        subHeading="Our dedicated customer support team is always here to assist you. Whether you have a technical question or need help setting up your internet service, our friendly and knowledgeable  representatives are available 24/7 to ensure you have a smooth and positive experience."
      />
    </Container>
  </section>
)

export default Features
