import './Portfolio.css'
import imgWCA from './images/WCA.png'
import imgDB from './images/Base.png'
import imgMaze from './images/Maze.png'
import imgMemo from './images/Memory.png'
import imgCalc from './images/Calcu.png'
import imgPort from './images/Port.png'

const PortfolioSection = () => (
  <div id="portfolio" className="secundary-content">
    <div className="title">
      <h1>PORTFOLIO</h1>
    </div>
    <div className="BoxContainer">
      <div className="box">
        <img className="foto" src={imgWCA} alt="cube" />
        <div className="box2 span22">
          <div className="footerTitle">
            <div className="ContainerLinks">
              <div className="box3 linkS">
                Website project:&nbsp;
                <a href="https://juanelcaballo.club/20541/WCA/" target="_blank" rel="noreferrer"> Proyecto WCA</a>
              </div>
              <div className="box3 linkG">
                GitHub project:&nbsp;
                <a href="https://github.com/ChristopherG19/Proyecto1_WCA.git" target="_blank" rel="noreferrer"> WCA repository</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <img className="foto" src={imgDB} alt="cube" />
        <div className="box2 span22">
          <div className="footerTitle">
            <div className="ContainerLinks">
              <div className="box3 linkGB">
                GitHub project:&nbsp;
                <a href="https://github.com/ChristopherG19/Proyecto_2_3_BD.git" target="_blank" rel="noreferrer"> DB repository</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <img className="foto" src={imgMaze} alt="cube" width="645" height="200" />
        <div className="box2 span22">
          <div className="footerTitle">
            <div className="ContainerLinks">
              <div className="box3 linkS">
                Website project:&nbsp;
                <a href="https://juanelcaballo.club/20541/Lab07/" target="_blank" rel="noreferrer">React Maze</a>
              </div>
              <div className="box3 linkG">
                GitHub project:&nbsp;
                <a href="https://github.com/ChristopherG19/Lab07_React_Maze.git" target="_blank" rel="noreferrer"> Maze repository</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <img className="foto" src={imgMemo} alt="cube" width="645" height="200" />
        <div className="box2 span22">
          <div className="footerTitle">
            <div className="ContainerLinks">
              <div className="box3 linkS">
                Website project:&nbsp;
                <a href="https://juanelcaballo.club/20541/Lab06/Lab06.html" target="_blank" rel="noreferrer"> Memory with React</a>
              </div>
              <div className="box3 linkG">
                GitHub project:&nbsp;
                <a href="https://github.com/ChristopherG19/Lab06-ReactMemory.git" target="_blank" rel="noreferrer"> Memory repository</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <img className="foto" src={imgCalc} alt="cube" width="645" height="200" />
        <div className="box2 span22">
          <div className="footerTitle">
            <div className="ContainerLinks">
              <div className="box3 linkS">
                Website project:&nbsp;
                <a href="https://juanelcaballo.club/20541/dist/" target="_blank" rel="noreferrer"> Calculator</a>
              </div>
              <div className="box3 linkG">
                GitHub project:&nbsp;
                <a href="https://github.com/ChristopherG19/Lab08_Calculator.git" target="_blank" rel="noreferrer"> Calculator repository</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <img className="foto" src={imgPort} alt="cube" width="645" height="200" />
        <div className="box2 span22">
          <div className="footerTitle">
            <div className="ContainerLinks">
              <div className="box3 linkS">
                Website project:&nbsp;
                <a href="https://christopherg.me/"> Portfolio</a>
              </div>
              <div className="box3 linkG">
                GitHub project:&nbsp;
                <a href="https://github.com/ChristopherG19/ChristopherG19.github.io.git" target="_blank" rel="noreferrer"> Portfolio repository</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default PortfolioSection
