
import Products from "../shop/Products"
import Experiences from "./Experiences"
import Hero from "./Hero"
import Materials from "./Materials"
import Testimonials from "./Testimonials"
import WhyChoose from "./WhyChoose"


const Home = () => {
  return (
    <>
    <Hero></Hero>
    <WhyChoose></WhyChoose>
    <Products headline="Best Selling Products"></Products>
    <Experiences></Experiences>
    <Materials></Materials>
    <Testimonials></Testimonials>
  
    </>
  )
}

export default Home