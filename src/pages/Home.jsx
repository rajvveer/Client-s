import Hero from '../components/sections/Hero'
import AboutUs from '../components/sections/AboutUs'
import Countries from '../components/sections/Countries'
import VisaDelivered from '../components/sections/VisaDelivered'
import VisaCategories from '../components/sections/VisaCategories'
import Achievements from '../components/sections/Achievements'
import Testimonials from '../components/sections/Testimonials'
import QueryForm from '../components/sections/QueryForm'

export default function Home() {
    return (
        <main>
            <Hero />
            <Countries />
            <VisaDelivered />
            <AboutUs />
            <VisaCategories />
            <Achievements />
            <Testimonials />
            <QueryForm />
        </main>
    )
}
