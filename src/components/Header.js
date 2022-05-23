import "./css/Header.css"
import logo from "../images/logoOmicron.png"

export default function Header() {

    return (
        <div className="headerDiv">
            <img src={logo} />
            <div className="headerButtons">
                <a className="button" href="#">Nuestros productos</a>
                <a className="button" href="#">Nosotros</a>
                <a className="button" href="#">Contacto</a>
            </div>
        </div>
    )
}