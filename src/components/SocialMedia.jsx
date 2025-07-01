import React from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/HillaryOwusu4">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/hillary-owusu-49b439217/">
        <FaLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
