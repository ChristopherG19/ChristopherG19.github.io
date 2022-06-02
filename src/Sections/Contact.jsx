import './Contact.css'

const ContactSection = () => {
    return (
        <div id='contact' className='third-content'>
            <h1>Contact</h1>
            <div className='centerContent'>
                <a className='contactEl' href='https://github.com/ChristopherG19' target="_blank">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a className='contactEl' href='mailto: gar20541@uvg.edu.gt' target="_blank">
                    <i className="fa-solid fa-envelope"></i>
                </a>
                <a className='contactEl' href='https://www.linkedin.com/in/christopher-garc%C3%ADa-96b3371a0/' target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </div>
        </div>
    )
}

export default ContactSection