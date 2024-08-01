import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import parse from 'html-react-parser';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap, Elastic } from "gsap";
import profile from "../../img/portrait.jpeg";
import React, { useState, useEffect } from "react";
import withRoot from "../withRoot";
import LanguageSelector from "../components/LanguageSelector";
import JobTrainingSection from "../components/JobTrainningSection";
import englishData from "../../data/english.json";
import frenchData from "../../data/french.json";
import { Timeline, Tween } from "gsap/gsap-core";

gsap.registerPlugin(Tween);

const tl = new Timeline();

function randomBetween(min, max) {
  const number = Math.floor(Math.random() * (max - min + 1) + min);
  return number !== 0 ? number : 0.5;
}

function Index() {
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const getTranslation = (key) => {
    switch (selectedLanguage) {
      case "English":
        return englishData[key];
      case "French":
        return frenchData[key];
      default:
        return englishData[key];
    }
  };

  useEffect(() => {
    for (let i = 0; i < 20; i++) {
      let element = document.querySelector(".bubble" + i);
      if (element) {
        let t = Tween.to(element, randomBetween(1, 1.5), {
          x: randomBetween(12, 15) * randomBetween(-1, 1),
          y: randomBetween(12, 15) * randomBetween(-1, 1),
          repeat: -1,
          repeatDelay: randomBetween(0.2, 0.5),
          yoyo: true,
          ease: Elastic.easeInOut.config(1, 0.8),
        });
        tl.add(t, (i + 1) / 0.6);
      }
    }
    tl.seek(50);
  }, []);

  return (
    <React.Fragment>
      <div className="resume-wrapper">
        <LanguageSelector onLanguageChange={handleLanguageChange} />
        <section className="profile section-padding">
          <div className="container">
            <div className="picture-resume-wrapper">
              <div className="picture-resume">
                <span>
                  <img src={profile} alt="Profile" />
                </span>
                <svg version="1.1" viewBox="0 0 350 350">
                  <defs>
                    <filter id="goo">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                      <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9"
                        result="cm"
                      />
                    </filter>
                  </defs>
                  <g filter="url(#goo)">
                    {[...Array(11)].map((_, i) => (
                      <circle
                        key={i}
                        id="circle"
                        className={`bubble${i} st1`}
                        cx="171.5"
                        cy="175.6"
                        r="122.7"
                      />
                    ))}
                  </g>
                </svg>
              </div>
            </div>
            <div className="name-wrapper">
              <h1>
                Mohamed-Amine
                <br />
                BOUZAHAR
                <br />
                <small>Lead Software Engineer</small>
              </h1>
            </div>
            <div className="contact-info clearfix">
              <ul className="list-titles">
                <li>{getTranslation("mail")}</li>
                <li>{getTranslation("linkedIn")}</li>
                <li>{getTranslation("home")}</li>
              </ul>
              <ul className="list-content">
                <li>
                  <a href="mailto:mohamed.amine.bouzahar@gmail.com" aria-label="Send an email">
                    <span className="icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <span className="text">mohamed.amine.bouzahar@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/amine-bouzahar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                  >
                    <span className="icon">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </span>
                    <span className="text">LinkedIn Profile</span>
                  </a>
                </li>
                <li>Nantes, France</li>
              </ul>
            </div>
            <div className="contact-presentation">
              <p className="subhead">{parse(getTranslation("presentation"))}</p>
            </div>
            <div className="contact-social clearfix">
              <ul className="list-titles">
                <li>Github</li>
              </ul>
              <ul className="list-content">
                <li>
                  <a href="https://github.com/aminekun90">@aminekun90</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <JobTrainingSection selectedLanguage={selectedLanguage} />

        <div className="clearfix"></div>
      </div>
    </React.Fragment>
  );
}

export default withRoot(Index);
