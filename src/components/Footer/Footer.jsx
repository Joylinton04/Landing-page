import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GithubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import Logo from "../../assets/Logo.webp"

const Footer = () => {
  return (
    <footer>
        <div className="footer-1">
            <div className="footer-content-1">
                <div className="footer-mess-img">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="footer-mess-1">
                    Lorem ipsum is placeholder text commonly
                    used in the graphic, print, and publishing
                    industries for previewing layouts and visual
                    mockups.
                </div>
            </div>
            <div className="footer-content-2">
                 <div>
                    <h3>resources</h3>
                    <p>flowbite</p>
                    <p>tailwind css</p>
                 </div>
                 <div>
                    <h3>follow us</h3>
                    <p>Github</p>
                    <p>discord</p>
                 </div>
                 <div>
                    <h3>legal</h3>
                    <p>privacy policy</p>
                    <p>Terms & Conditions</p>
                 </div>
            </div>
        </div>
        <span className="span-2"></span>
        <div className="footer-content-3">
            <div>
                Made by Cruip. All rights reserved.
            </div>
            <ul>
                <li><FacebookIcon/></li>
                <li><InstagramIcon/></li>
                <li><TwitterIcon/></li>
                <li><GithubIcon/></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer;