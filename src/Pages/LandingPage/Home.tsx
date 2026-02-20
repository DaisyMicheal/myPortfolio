import Footer from '../../Components/layout /Footer'
import Header from './Header'
import About from './About'
import Slider from './Slider'
import Project from './Project'
import WookExp from './WookExp'
import Skills from './Skills'
import Contact from './Contact'


export default function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <About />
      <Project />
      <WookExp />
      <Skills />
      <Contact />
      <Footer variant="minimal" year={2026} name="Mercy Chisom" />


    </div>

  )
}
