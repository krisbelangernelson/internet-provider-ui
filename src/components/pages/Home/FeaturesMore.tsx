import { type FC } from 'react'
import Container from 'react-bootstrap/Container'
import FamilyImg from '@/assets/images/family.jpg'
import GamingImg from '@/assets/images/gaming.jpg'
import WorkImg from '@/assets/images/student.jpg'
import FeaturesItem from './FeaturesItem'

const FeaturesMore: FC = () => (
  <section className="section-dark features">
    <Container>
      <FeaturesItem
        imgSrc={FamilyImg as string}
        imageOrder={2}
        textOrder={1}
        heading="Fun for the whole family"
        subHeading="Keep everyone in your family connected with our unlimited data plans. Stream movies, watch educational videos, play online games, and stay connected with loved ones without worrying about exceeding data limits."
      />
      <FeaturesItem
        imgSrc={GamingImg as string}
        imageOrder={1}
        textOrder={2}
        heading="Blaze your way to wins"
        subHeading="Experience low latency and ultra-fast speeds for a smooth and uninterrupted gaming experience. Dominate the competition with lag-free gameplay and reliable connections, allowing you to react quickly and perform at your best."
      />
      <FeaturesItem
        imgSrc={WorkImg as string}
        imageOrder={2}
        textOrder={1}
        heading="Optimize your productivity"
        subHeading="Stay productive and connected with colleagues no matter where your work takes you. Our reliable internet service allows you to participate in video conferencing calls, access cloud-based applications, and collaborate seamlessly with your team, all with a stable and secure connection."
      />
    </Container>
  </section>
)

export default FeaturesMore
