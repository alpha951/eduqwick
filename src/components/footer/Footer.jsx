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
              <a href='facebbok.com'>
                <Facebook />
              </a>
              <a href='twitter.com'>
                <Twitter />
              </a>
              <a href='twitter.com'>
                <Instagram />
              </a>
              <a href='twitter.com'>
                <LinkedIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
