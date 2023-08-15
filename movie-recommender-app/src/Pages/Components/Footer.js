// Footer Component
import "./styles/Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div id="row1" className="row ">
                    <a
                        href="https://www.linkedin.com/in/santhosh-kmrr/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a
                        href="https://github.com/Santhosh-Kumar-02"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
                <div id="row1" className="row">
                    © Developed By Santhosh
                </div>
            </div>
        </footer>
    );
};

export default Footer;
