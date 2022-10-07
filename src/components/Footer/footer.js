import "./footer.css"
import logo from '../../images/logo.png'
import ig from '../../images/Ig.png'
import face from '../../images/face.png'
import what from '../../images/what.png'


const Footer = () => {
    return (
        <>
        <div className="separador">
        </div>
            <div className="footer">
                <div >
                    <p> ventaonline@bikemachine.com.ar </p>
                    <p> tucuman 1304 - Rosario</p>
                    <a href="https://www.instagram.com/bikemachine.fitness/"><img src={ig} className='logoRedes' alt="logo Instagram" /></a>
                    <a href="https://www.facebook.com/bikemachine1304"><img src={face} className='logoRedes' alt="logo facebook" /></a>
                    <a href="https://wa.me/5493416551149"><img src={what} className='logoRedes' alt="logo Instagram" /></a>
                </div>

                <div >
                    <img src={logo} alt="logo" className='logoFooter' />
                </div>
            </div>

        </>

    )
}

export default Footer;