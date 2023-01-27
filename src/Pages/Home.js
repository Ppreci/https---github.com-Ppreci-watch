import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import { bannerSlides } from '../Data'
const Home = () => {
  return (
    <div>
        <Hero slides={bannerSlides}/>
        <ProductCard />
    </div>
  )
}

export default Home