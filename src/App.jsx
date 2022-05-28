import './App.css'
import NavBar from './NavBar/Navbar'

const App = () => {
  
  return (
    <div className="App">
      <NavBar />
      <div id='first-class' className='principal-content'>a</div>
      <div id='second-class' className='secundary-content'>b</div> 
      <div id='third-class' className='third-content'>c</div> 
    </div>
  )
}

export default App
