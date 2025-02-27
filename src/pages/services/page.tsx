
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"
import OurServices from "@/components/services/ourservices"
import Servicestimeline from "@/components/services/timeline"
import Servicesstory from "@/components/services/successstory"
import Solution from "@/components/services/solutions"
import Partners from "@/components/services/partners"
const Services = () => {
  

  return (
    <div className="bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-36">
      <OurServices/>
      <Servicestimeline/>
      <Servicesstory/>
      <Solution/>
      <Partners/>
      </div>
      <Footer />
    </div>
  )
}

export default Services;
