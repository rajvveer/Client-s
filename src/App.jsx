import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import AboutUs from './components/sections/AboutUs'
import Offers from './components/sections/Offers'
import VisaCategories from './components/sections/VisaCategories'
import Countries from './components/sections/Countries'
import Testimonials from './components/sections/Testimonials'
import VisaDelivered from './components/sections/VisaDelivered'
import QueryForm from './components/sections/QueryForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--t-bg)', transition: 'background-color 0.4s ease' }}>
      <Navbar />
      <Hero />
      <AboutUs />
      <Offers />
      <VisaCategories />
      <Countries />
      <Testimonials />
      <VisaDelivered />
      <QueryForm />
      <Footer />
    </div>
  )
}

export default App
