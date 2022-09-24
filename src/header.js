import React from "react";
import laura from "./Laura.png";
import email from "./Email.png";
import twitter from "./Twitter.png";
import facebook from "./Facebook.png";
import Linkdin from "./Linkedin.png";
import instagram from "./Instagram.png";
import Github from "./GitHub.png";
export default function Header() {
  return (
    <div>
      <header className="container">
        <img src={laura} alt="lauraImg" />
        <div className="profile">
          <h1>Laura Smith</h1>
          <p className="Desgination">Frontend Developer</p>
          <p className="website">laurasmith.website</p>
          <button className="btn">
            <img src={email} alt="img" />
            Email
          </button>
        </div>
        <div className="Content">
          <h1>About</h1>
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
          <h1>Interests</h1>
          <p>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
        <footer className="footer">
          <img src={twitter} alt="twitter" />
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={Linkdin} alt="Linkdin" />
          <img src={Github} alt="Github" />
        </footer>
      </header>
    </div>
  );
}
