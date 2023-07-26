import Layout from '../layout/Layout'
import About from '../components/About'
import All from '../components/All'
import Windows from '../components/Windows'
import Roofs from '../components/Roofs'
import Others from '../components/Others'
import CTA from '../components/CTA'
import Testimonial from '../components/Testimonial'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <Layout>
      <About />
      <All />
      <Windows />
      <Roofs />
      <Others />
      <CTA />
      <Testimonial />
      <Contact />
    </Layout>
  )
}

export default Home
