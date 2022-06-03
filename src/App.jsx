import './App.css'
import NavBar from './NavBar/Navbar'
import AboutSection from './Sections/About'
import PortfolioSection from './Sections/Portfolio'
import ContactSection from './Sections/Contact'

const App = () => (
  <div className="App">
    <a className="btnHome" type="a" href="#top">
      <i className="fa fa-home" />
&nbsp;Home
    </a>
    <NavBar />
    <div className="content">
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  </div>
)

export default App
