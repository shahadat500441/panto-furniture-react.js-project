import Products from "../shop/Products"
import Hero from "./Hero"
import WhyChoose from "./WhyChoose"


const Home = () => {
  return (
    <>
    <Hero></Hero>
    <WhyChoose></WhyChoose>
    <Products headline="Best Selling Products"></Products>
    </>
  )
}

export default Home