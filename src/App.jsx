import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Navbar from './component/Navbar'
import Profile from './pages/Profile'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import WebLayout from './layouts/WebLayout'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<WebLayout />}>
      <Route path="/" element={<Profile />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/contact" element={<Contact />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App