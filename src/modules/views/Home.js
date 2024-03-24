import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import parse from 'html-react-parser';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import profile from "../../img/portrait.jpeg";
import capgemini from "../../img/capgemini.svg";
import wiztivi from "../../img/wiztivi.png";
import * as React from "react";
import withRoot from "../withRoot";
import { gsap, Elastic } from "gsap";
import { Timeline, Tween } from "gsap/gsap-core";
import LanguageSelector from "../components/LanguageSelector";
import englishData from "../../data/english.json";
import frenchData from "../../data/french.json";
gsap.registerPlugin(Tween);

const tl = new Timeline();

function randomBetween(min, max) {
  const number = Math.floor(Math.random() * (max - min + 1) + min);

  if (number !== 0) {
    return number;
  } else {
    return 0.5;
  }
}


function calculateTotalDuration(intervals) {
  let totalMilliseconds = 0;

  intervals.forEach((interval) => {
    const [startDate, endDate] = interval;
    totalMilliseconds += endDate.getTime() - startDate.getTime();
  });

  const totalSeconds = totalMilliseconds / 1000;
  const totalMinutes = totalSeconds / 60;
  const totalHours = totalMinutes / 60;
  const totalDays = totalHours / 24;

  const years = Math.floor(totalDays / 365);
  const months = Math.floor((totalDays % 365) / 30); // Assuming 30 days in a month

  return { years, months };
}

function Index() {
  // Define state variable for selected language
  const [selectedLanguage, setSelectedLanguage] = React.useState("english");

  // Function to update selected language
  const handleLanguageChange = (language) => {
    console.log("index langage change", language);
    setSelectedLanguage(language);
  };
  const getTranslation= (key)=> {
  
  switch (selectedLanguage) {
    case "English":
      return englishData[key];
    case "French":
      return frenchData[key];
    default:
      return englishData[key];
  }
}
  const totalExp = calculateTotalDuration([
    [new Date("04/25/2022"), new Date()],
    [new Date("02/01/2019"), new Date("04/25/2022")],
    [new Date("05/01/2017"), new Date("12/31/2018")],
  ]);
  const capgeminiDuration = calculateTotalDuration([
    [new Date("04/25/2022"), new Date()],
  ]);
  React.useEffect(() => {
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
  });

  return (
    <React.Fragment>
      <div className="resume-wrapper">
        <LanguageSelector onLanguageChange={handleLanguageChange} />
        <section className="profile section-padding">
          <div className="container">
            <div className="picture-resume-wrapper">
              <div className="picture-resume">
                <span>
                  <img src={profile} alt="" />
                </span>
                <svg version="1.1" viewBox="0 0 350 350">
                  <defs>
                    <filter id="goo">
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="8"
                        result="blur"
                      />
                      <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9"
                        result="cm"
                      />
                    </filter>
                  </defs>

                  <g filter="url(#goo)">
                    <circle
                      id="main_circle"
                      className="st0"
                      cx="171.5"
                      cy="175.6"
                      r="130"
                    />

                    <circle
                      id="circle"
                      className="bubble0 st1"
                      cx="171.5"
                      cy="175.6"
                      r="122.7"
                    />
                    <circle
                      id="circle"
                      className="bubble1 st1"
                      cx="171.5"
                      cy="175.6"
                      r="122.7"
                    />
                    <circle
                      id="circle"
                      className="bubble2 st1"
                      cx="171.5"
                      cy="175.6"
                      r="122.7"
                    />
                    <circle
                      id="circle"
                      className="bubble3 st1"
                      cx="171.5"
                      cy="175.6"
                      r="122.7"
                    />
                    <circle
                      id="circle"
                      className="bubble4 st1"
                      cx="171.5"
                      cy="175.6"
                      r="122.7"
                    />
                    <circle
                      id="circle"
                      className="bubble5 st1"
                      cx="171.5"
                      cy="175.6"
                      r="122.7"
                    />
                    <circle
                      id="circle"
                      className="bubble6 st1"
                      cx="171.5"
                      cy="175.6"
                      r="122.7"
                    />
                    <circle
                      id="circle"
                      className="bubble7 st1"
                      cx="171.5"
                      cy="175.6"
                      r="122.7"
                    />
                    <circle
                      id="circle"
                      className="bubble8 st1"
                      cx="171.5"
                      cy="175.6"
                      r="122.7"
                    />
                    <circle
                      id="circle"
                      className="bubble9 st1"
                      cx="171.5"
                      cy="175.6"
                      r="122.7"
                    />
                    <circle
                      id="circle"
                      className="bubble10 st1"
                      cx="171.5"
                      cy="175.6"
                      r="122.7"
                    />
                  </g>
                </svg>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="name-wrapper">
              <h1>
                Mohamed-Amine
                <br/>
                BOUZAHAR
                <br />
                <small>Lead Software Engineer</small>
              </h1>
              
            </div>
            <div className="clearfix"></div>
            <div className="contact-info clearfix">
              <ul className="list-titles">
                {/* <li>Call</li> */}
                <li>{getTranslation("mail")}</li>
                <li>{getTranslation("linkedIn")}</li>
                <li>{getTranslation("home")}</li>
              </ul>
              <ul className="list-content ">
                {/* <li>+34 123 456 789</li>  */}
                <li>
                  {" "}
                  <a
                    href="mailto:mohamed.amine.bouzahar@gmail.com"
                    aria-label="Send a mail to mohamed.amine.bouzahar@gmail.com"
                  >
                    <span className="icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <span className="text">
                      mohamed.amine.bouzahar@gmail.com
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="App-link"
                    href="https://www.linkedin.com/in/amine-bouzahar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open linkedIn link"
                  >
                    <span className="icon">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </span>
                    <span className="text">
                      https://www.linkedin.com/in/amine-bouzahar/
                    </span>
                  </a>
                </li>
                <li>Nantes, France</li>
              </ul>
            </div>
            <div className="contact-presentation">
              <p className="subhead">{parse(getTranslation("presentation"))}
              </p>
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

        <section className="experience section-padding">
          <div className="container">
            <h3 className="experience-title">
              {getTranslation('experience')} ({totalExp.years} {getTranslation('yr')} {totalExp.months} {getTranslation('mos')})
            </h3>

            <div className="experience-wrapper">
              <div className="company-wrapper clearfix">
                <div className="experience-title">
                  <img
                    src={capgemini}
                    alt="Capgemini ♠️"
                    className="brand cap"
                  />
                </div>
                <div className="time">
                {getTranslation('april')} 2022 - Present ({capgeminiDuration.years} {getTranslation('yr')}{" "}
                  {capgeminiDuration.months} {getTranslation('mos')})
                </div>
              </div>

              <div className="job-wrapper clearfix">
                <div className="experience-title">
                  Front/Back End Lead software Engineer
                </div>
                <div className="company-description">
                {parse(getTranslation('cap-desc'))}
                </div>
              </div>

              <div className="company-wrapper clearfix">
                <div className="experience-title">
                  <img src={wiztivi} alt="wiztivi 〰️" className="brand wtv" />
                </div>
                <div className="time">
                {getTranslation('february')} 2019 - {getTranslation('april')} 2022 (3 {getTranslation('yr')} 3 {getTranslation('mos')})
                </div>
              </div>

              <div className="job-wrapper clearfix">
                <div className="experience-title">
                  R&D Engineer / Front/Back-end Engineer
                </div>
                <div className="company-description">
                {parse(getTranslation('wiz-desc'))}
                </div>
              </div>

              <div className="company-wrapper clearfix">
                <div className="experience-title">Tisalabs</div>
                <div className="time">
                {getTranslation('july')} 2017 - {getTranslation('december')} 2018 (1 {getTranslation('yr')} 6 {getTranslation('mos')})
                </div>
              </div>

              <div className="job-wrapper clearfix">
                <div className="experience-title">
                  R&D Engineer & Web Designer{" "}
                </div>
                <div className="company-description">
                {parse(getTranslation('tisa-desc'))}
                </div>
              </div>
            </div>
            <div className="language-wrapper">
              <h3 className="section-title">{getTranslation('languages')}</h3>

              <ul>
                <li className=""><span>{getTranslation('french')}</span> : {getTranslation('native-lang')}</li>
                <li className=""><span>{getTranslation('english')}</span> : {getTranslation('pro-lang')}</li>
                <li className=""><span>{getTranslation('arabic')}</span> : {getTranslation('native-lang')}</li>
                <li className="">
                <span>{getTranslation('tamazight')}</span> {getTranslation('tamazight-desc')} : {getTranslation('native-lang')} {getTranslation('3-variants')}.
                </li>
                <li className=""><span>{getTranslation('german')}</span> : {getTranslation('elem-lang')}</li>
                <li className=""><span>{getTranslation('russian')}</span> : {getTranslation('elem-lang-bis')}</li>
              </ul>
            </div>
            <div className="section-wrapper clearfix">
              <h3 className="section-title">{getTranslation('skills')}</h3>
              <ul>
                <li className="skill-percentage">HTML / HTML5</li>
                <li className="skill-percentage">CSS / CSS3 / SASS / SCSS</li>
                <li className="skill-percentage">Typescript</li>
                <li className="skill-percentage">React.js</li>
                <li className="skill-percentage">Angular 2 (version 16)</li>
                <li className="skill-percentage">Python 3</li>
                <li className="skill-percentage">SQL</li>
                <li className="skill-percentage">Amazon Web Services (AWS)</li>
                <li className="skill-percentage">Google Cloud Services (GCloud)</li>
              </ul>
            </div>

            <div className="section-wrapper clearfix">
              <h3 className="section-title">{getTranslation('hobbies')}</h3>
              {parse(getTranslation('hobbies-desc'))}
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="copyright-wrapper clearfix">
            <p>
              v0.4.0 Made with&nbsp;<span className="red-text">❤</span>
              &nbsp;by&nbsp;
              <a href="https://github.com/aminekun90">amine</a>&nbsp;using&nbsp;
              <a href="https://react.dev">React.js</a>
            </p>
          </div>
        </section>

        <div className="clearfix"></div>
      </div>
    </React.Fragment>
  );
}
export default withRoot(Index);
