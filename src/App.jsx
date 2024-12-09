
import './App.css'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Footer from './components/Footer/Footer'
import Experience from './components/experience/Experience'
function App() {
 
//#003566
  return (
    <div className='bg-[#083D3F] h-auto  w-full  overflow-hidden  '>
        <Navbar/>
        <Home/>
        <About/>
        <Experience/>
        <Projects/>
        <Footer/>
     </div>
    
  )
}

export default App
