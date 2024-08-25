import logo from '../../assets/logo-footer.png';
import '../Footer/footer.scss';
 
function Footer() {
    return (
        <footer className='footer'>
            <img src={logo} alt="Le logo Kasa" className="footer__logo"/>
            <p className="footer__text">© 2020 Kasa. All<br className='footer__break'/>rights reserved</p>
        </footer>
        
    )
}

export default Footer; 
            
        
        