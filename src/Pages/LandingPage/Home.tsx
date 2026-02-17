import Nav from '../../Components/layout /Nav'
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
    <main className="min-h-screen px-4">
      <div className="mx-auto w-full max-w-4xl border-x border-black/10">
        <div className="mx-auto flex w-full flex-col items-center px-4 sm:px-8">
          <Nav />
          <Header />
          <Slider />
          <About />
          <Project />
          <WookExp />
          <Skills />
          <Contact />
          <Footer variant="minimal" year={2026} name="Mercy Chisom" />

        </div>
      </div>
    </main>
  )
}
