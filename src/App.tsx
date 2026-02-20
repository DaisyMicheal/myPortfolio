import { Route, Routes } from 'react-router'

import Home from './Pages/LandingPage/Home'
import Container from './Components/layout /Container'

import ProjectPage from './Pages/ProjectPage/project'
import ProjectDetailPage from './Pages/ProjectPage/detail'
import Nav from './Components/layout /Nav'


export default function App() {
 return (
  <Container >
   <Nav />
   <div className='pt-20'>
    <Routes>
     <Route index element={<Home />} />

     <Route path='/project' element={<ProjectPage />} />
     <Route path='/project/:slug' element={<ProjectDetailPage />} />
    </Routes>
   </div>
  </Container>
 )
}
