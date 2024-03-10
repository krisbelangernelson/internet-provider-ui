import { type FC } from 'react'
import TestimonialsItems from './TestimonialsItems'

const Testimonials: FC = () => (
  <section className="section-light testimony pt-5">
    <div className="row flex-column flex-lg-row gx-lg-5 gy-3 gy-lg-0 pe-5 ps-5">
      <TestimonialsItems
        quote="We used to fight over who got to use the internet in our house! Now, with Ping!'s unlimited data plan and powerful Wi-Fi, everyone can stream, game, and browse simultaneously. Plus, the low latency is a dreamfor my son's online gaming - no more lag during crucial moments! We're finally a happy, connected family."
        citation="Sarah M., Teacher & Mom of 2"
      />
      <TestimonialsItems
        quote="As a freelancer, a reliable internet connection is essential for my work. Since switching to Ping!, I haven't experienced a single dropped call during video conferences. The upload speeds are fantastic for sending large files to clients, and the customer support team is incredibly helpful whenever I have a question. It's a stress-free experience that allows me to focus on what matters most - my work."
        citation="David L., Graphic Designer"
      />
      <TestimonialsItems
        quote="I'm a techie who demands the best. Ping! delivers the blazing-fast speeds I need to download new software, stream high-resolution content, and game competitively. Their advanced technology ensures a consistent, stable connection, even when I have multiple devices running simultaneously. Plus, the 24/7 customer support provides peace of mind knowing there's always someone available to assist if needed. Highly recommended!"
        citation="Alex C., Software Engineer"
      />
    </div>
  </section>
)

export default Testimonials
