import Navigation from "./components/Navigation"
import Banner from "./components/Banner"
import Gallery from "./components/Gallery"
import Roadmap from "./components/Roadmap"
import Team from './components/Team'
import Faq from './components/Faq'
import Footer from './components/Footer'
export default function Home() {
  return (
    <>
      <Navigation />
      <Banner/>
      <Gallery/>
      <Roadmap/>
      <Team/>
      <Faq/>
      <Footer/>
    </>
   
  )
}
