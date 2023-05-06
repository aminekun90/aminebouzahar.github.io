import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import profile from "../../img/profile.jpg";
import * as React from "react";
import withRoot from "../withRoot";
import { gsap, Elastic } from "gsap";
import { Timeline, Tween } from "gsap/gsap-core";
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

function calculateDurationInYearsAndMonths(dateString) {
  const now = new Date();
  const date = new Date(dateString);
  // const diffInMs = now.getTime() - date.getTime();

  const diffInMonths =
    (now.getFullYear() - date.getFullYear()) * 12 +
    (now.getMonth() - date.getMonth());
  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  return { years, months };
}

function Index() {
  const capgeminiDuration = calculateDurationInYearsAndMonths(
    new Date("04/25/2022")
  );
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
                {" "}
                Amine .M. <br />
                BOUZAHAR
              </h1>
            </div>
            <div className="clearfix"></div>
            <div className="contact-info clearfix">
              <ul className="list-titles">
                {/* <li>Call</li> */}
                <li>Mail</li>
                <li>linkedIn</li>
                <li>Home</li>
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
                  </a>
                </li>
                <li>Nantes, FR / Düsseldorf, DE</li>
              </ul>
            </div>
            <div className="contact-presentation">
              <p>
                <span className="bold">I have </span>
                a degree in computer engineering, I work in the field of
                computer science as a senior developer in Web/Desktop and mobile
                applications.
                <br /> I am passionate about new technologies and what I do, and
                I want to share my expertise, skills, and creativity in this
                field. I aim to develop and confirm my skills while continuously
                learning different subjects.
                <br />I have a dynamic spirit, a good sense of responsibility
                and analysis, and I often opt for teamwork. I anticipate
                problems by proposing solutions that are adapted to the field
                requirements.
                <br />
                On my spare time I work on many personal projects you can check
                my github bellow.
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
            <h3 className="experience-title">Experience</h3>

            <div className="experience-wrapper">
              <div className="company-wrapper clearfix">
                <div className="experience-title">Capgemini</div>
                <div className="time">
                  April 2022 - Present ({capgeminiDuration.years} yr{" "}
                  {capgeminiDuration.months} mos)
                </div>
              </div>

              <div className="job-wrapper clearfix">
                <div className="experience-title">
                  Front/Back End Lead software engineer{" "}
                </div>
                <div className="company-description">
                  <p>
                    At capgemini, I had the opportunity to work with amazing
                    people, and amazing technologies like AWS, Symfony,
                    Typscript, Angular, Magento, Akeneo PIM, ... and lot of
                    dev-ops software and tools like docker and jenkins and
                    github-ci
                  </p>
                </div>
              </div>

              <div className="company-wrapper clearfix">
                <div className="experience-title">Wiztivi</div>
                <div className="time">
                  February 2019 - April 2022 (3 yr 3 mos)
                </div>
              </div>

              <div className="job-wrapper clearfix">
                <div className="experience-title">
                  R&D Engineer / Front/Back-end Engineer
                </div>
                <div className="company-description">
                  <p>
                    At wiztivi I had many responsabilities, and roles and I had
                    a chance to explore the universe of set top boxes for many
                    international actors like Vodafone Eutelsat and SFR.
                  </p>
                </div>
              </div>

              <div className="company-wrapper clearfix">
                <div className="experience-title">Tisalabs</div>
                <div className="time">
                  July 2017 - December 2018 (1 yr 6 mos)
                </div>
              </div>

              <div className="job-wrapper clearfix">
                <div className="experience-title">
                  R&D Engineer & Web Designer{" "}
                </div>
                <div className="company-description">
                  <p>
                    My first job as an engineer, was a chalenging experience, I
                    was the most experienced in a team of 4-5 junior engineers.
                    I had an opportunity to work for a project for the Eropean
                    space agency, with many new technologies and IOT Research
                    and developement
                  </p>
                </div>
              </div>
            </div>
            <div className="language-wrapper">
              <h3 className="section-title">Languages</h3>
             
                <ul>
                  <li className="">
                    FRENCH : Native or bilingual proficiency.
                  </li>
                  <li className="">ENGLISH: Full professional proficiency.</li>
                  <li className="">ARABIC: Native or bilingual proficiency.</li>
                  <li className="">
                    TAMAZIGHT(north african native language): Native or
                    bilingual proficiency (3 variants).
                  </li>
                  <li className="">GERMAN: Elementary proficiency.</li>
                  <li className="">RUSSIAN: Elementary knowledge.</li>
                </ul>
             
            </div>
            <div className="section-wrapper clearfix">
              <h3 className="section-title">Skills</h3>
              <ul>
                <li className="skill-percentage">HTML / HTML5</li>
                <li className="skill-percentage">CSS / CSS3 / SASS / LESS</li>
                <li className="skill-percentage">Typescript</li>
                <li className="skill-percentage">React.js</li>
                <li className="skill-percentage">Angular 2</li>
                <li className="skill-percentage">Python</li>
                <li className="skill-percentage">SQL</li>
                <li className="skill-percentage">Amazon Web Services</li>
                <li className="skill-percentage">Google Cloud Services</li>
              </ul>
            </div>

            <div className="section-wrapper clearfix">
              <h3 className="section-title">Hobbies</h3>
              <p>
                On my freetime, I like to read books specially IT stuff, play
                competitive video games.
              </p>

              <p>
                Also I work on open source projects on my github and for the
                community like npm packages for IOT devices/ Bots in python, and
                other tools to make coders life easier.
              </p>
            </div>
          </div>
        </section>

        <div className="clearfix"></div>
      </div>
    </React.Fragment>
  );
}
export default withRoot(Index);
