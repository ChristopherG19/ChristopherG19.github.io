import './Navbar.css'

//Referencias: 'Pixel Rex Victor's dribbble', http://dribbble.com/shots/1238974-Pixel-Rex y https://codepen.io/zerospree/pen/DyWOqw

const NavBar = () => {
    
    return (
        <div className='NavBar'>
            <div className='T-rex'></div>
            <div className='T-rex brother'></div>
            <div className='T-rex brother2'></div>
                <a className="glow-on-hover" type="a" href='#about'>About</a>
                <a className="glow-on-hover por" type="a" href='#portfolio'>Portfolio</a>
                <a className="glow-on-hover con" type="a" href='#contact'>Contact</a>
            <div id="rubik-cube">
                <div className="cube">
                    <div className="up">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="right">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="front">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="left">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="down">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="back">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar