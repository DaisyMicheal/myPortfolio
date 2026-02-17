import { Route, Routes } from 'react-router'

import Home from './Pages/LandingPage/Home'
import Container from './Components/layout /Container'


export default function App() {
 return (
  <Container >
   <Routes>
    <Route index element={<Home />} />

   </Routes>
  </Container>
 )
}
