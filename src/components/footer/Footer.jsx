import "./Footer.css";

import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
    <div className='footer'>
      <div>
        <div className='footer-content'>
          <h3
            style={{
              fontFamily: "Trebuchet MS",
              fontSize: "2em",
            }}>
            <em>edu</em>Qwick
          </h3>
          <div className='sub'>
            <div>
              <b>Company</b>
              <p>About</p>
              <p>Blog</p>
            </div>
            <div>
              <b>For Students</b>
              <p>Code of conduct</p>
              <p>Community</p>
            </div>
            <div>
              <b>For Universities</b>
              <p>Register</p>
              <p>Business</p>
            </div>
            <div>
              <b>For You</b>
              <p>Privacy</p>
              <p>Security</p>
              <p>Terms</p>
            </div>
            <div>
              <b>Social links</b>
              <a href='https://www.facebbok.com' target='blank'>
                <Facebook />
              </a>
              <a href='https://www.twitter.com' target='blank'>
                <Twitter />
              </a>
              <a href='https://www.Instagram.com' target='blank'>
                <Instagram />
              </a>
              <a href='https://www.Linkedin.com' target='blank'>
                <LinkedIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
