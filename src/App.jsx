import './App.css'
import NavBar from './NavBar/Navbar'
import AboutSection from './Sections/About'
import PortfolioSection from './Sections/Portfolio'
import ContactSection from './Sections/Contact'

const App = () => {
  
  return (
    <div className="App">
      <a className="btnHome" type="a" href='#top'><i class="fa fa-home"> </i>Home</a>
      <NavBar />
      <div className='content'>
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </div>
    </div>
  )
}

export default App
