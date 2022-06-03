import './About.css'
import imgMe from './images/me.jpg'
import imgCube from './images/Collage.png'

const AboutSection = () => {
  //https://codepen.io/thiagoteles/pen/ogoxLw idea
  var words = ["Hi, I'm Chris :)", '3rd Year Computer Science and IT Student', 'at Universidad del Valle de Guatemala.', '[Middle Developer]', 'I like the challenges and the puzzles.'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 85,
    speed2 = 25

  const wordflick = function () {
    setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skip_count
          if (skip_count === skip_delay) {
            forwards = false
            skip_count = 0
          }
        }
      } else if (offset === 0) {
        forwards = true
        i++
        newFunction()
        if (i >= len) {
          i = 0
        }
      }
      part = words[i].substr(0, offset)
      if (skip_count === 0) {
        if (forwards) {
          offset++
        } else {
          offset--
        }
      }
      $('.word').text(part)

      function newFunction() {
        offset = 0
      }
    }, speed)
  }

  $(document).ready(() => {
    setInterval(wordflick(), speed2)
  })

  return (
    <div id="about" className="principal-content">
      <div className="ContainerInfo">
        <div className="hobbies">
          <h1>Hobbies</h1>
          <img className="foto2" src={imgCube} alt="cube" width="275" height="300" />
          <a className="wca" type="a" href="https://www.worldcubeassociation.org/persons/2018GARC09" target="_blank" rel="noreferrer" />
        </div>
        <div className="ContainerInfo1">
          <img className="foto2 me" src={imgMe} alt="Me" width="275" height="300" />
        </div>
        <div className="SkillsContainer">
          <h1>Skills</h1>
          <div className="boxContainer">
            <a className="glowbtn" type="a" href="https://github.com/ChristopherG19/Proyecto_2_3_BD.git" target="_blank" rel="noreferrer"><i className="fa-brands fa-python" /></a>
            <a className="glowbtn" type="a" href="https://github.com/ChristopherG19/Proyecto1_WCA.git" target="_blank" rel="noreferrer"><i className="fa-brands fa-react" /></a>
            <a className="glowbtn" type="a" href="https://github.com/ChristopherG19/Lab07_React_Maze.git" target="_blank" rel="noreferrer"><i className="fa-brands fa-js" /></a>
            <a className="glowbtn" type="a" href="https://github.com/ChristopherG19/Lab08_Calculator.git" target="_blank" rel="noreferrer"><i className="fa-brands fa-node-js" /></a>
            <a className="glowbtn" type="a" href="https://juanelcaballo.club/20541/Lab03/" target="_blank" rel="noreferrer"><i className="fa-brands fa-html5" /></a>
            <a className="glowbtn" type="a" href="https://codepen.io/christopherg19/pen/qBVRPqm" target="_blank" rel="noreferrer"><i className="fa-brands fa-css3-alt" /></a>
            <a className="glowbtn span2" type="a" href="https://github.com/ChristopherG19/Proyecto_2_3_BD.git" target="_blank" rel="noreferrer"><i className="fa-solid fa-database" /></a>
          </div>
        </div>
        <div className="ContainerInfo2">
          <div className="word" />
        </div>
      </div>
    </div>
  )
}

export default AboutSection
