import React from "react";
import { getTranslation } from "./shared";
import parse from "html-react-parser";
import capgemini from "../../img/capgemini.svg";
import wiztivi from "../../img/wiztivi.png";
import eheio from "../../img/eheio.png";

function calculateTotalDuration(intervals) {
  let totalMilliseconds = 0;

  intervals.forEach(([startDate, endDate]) => {
    totalMilliseconds += endDate.getTime() - startDate.getTime();
  });

  const totalDays = totalMilliseconds / (1000 * 60 * 60 * 24);
  const years = Math.floor(totalDays / 365);
  const months = Math.floor((totalDays % 365) / 30);

  return { years, months };
}

function JobTrainingSection({ selectedLanguage }) {
  const totalExp = calculateTotalDuration([
    [new Date("04/25/2022"), new Date()],
    [new Date("02/01/2019"), new Date("04/25/2022")],
    [new Date("05/01/2017"), new Date("12/31/2018")],
  ]);

  const capgeminiDuration = calculateTotalDuration([
    [new Date("04/25/2022"), new Date()],
  ]);

  return (
    <section className="experience section-padding">
      <div className="container">
        <h3 className="experience-title">
          {getTranslation("experience", selectedLanguage)} ({totalExp.years}{" "}
          {getTranslation("yr")} {totalExp.months} {getTranslation("mos")})
        </h3>

        <div className="experience-wrapper">
          <div className="company-wrapper clearfix">
            <div className="experience-title">
              <img src={capgemini} alt="Capgemini" className="brand cap" />
            </div>
            <div className="time">
              {getTranslation("april", selectedLanguage)} 2022 -{" "}
              {getTranslation("present")} ({capgeminiDuration.years}{" "}
              {getTranslation("yr")} {capgeminiDuration.months}{" "}
              {getTranslation("mos")})
            </div>
          </div>

          <div className="job-wrapper clearfix">
            <div className="experience-title">
              Front/Back End Lead Software Engineer
            </div>
            <div className="company-description">
              {parse(getTranslation("cap-desc"))}
            </div>
          </div>

          <div className="company-wrapper clearfix">
            <div className="experience-title">
              <img src={wiztivi} alt="Wiztivi" className="brand wtv" />
            </div>
            <div className="time">
              {getTranslation("february", selectedLanguage)} 2019 -{" "}
              {getTranslation("april", selectedLanguage)} 2022 (3{" "}
              {getTranslation("yr")} 3 {getTranslation("mos")})
            </div>
          </div>

          <div className="job-wrapper clearfix">
            <div className="experience-title">
              R&D Engineer / Front/Back-end Engineer
            </div>
            <div className="company-description">
              {parse(getTranslation("wiz-desc"))}
            </div>
          </div>

          <div className="company-wrapper clearfix">
            <div className="experience-title">Tisalabs</div>
            <div className="time">
              {getTranslation("july", selectedLanguage)} 2017 -{" "}
              {getTranslation("december", selectedLanguage)} 2018 (1{" "}
              {getTranslation("yr")} 6 {getTranslation("mos")})
            </div>
          </div>

          <div className="job-wrapper clearfix">
            <div className="experience-title">R&D Engineer & Web Designer</div>
            <div className="company-description">
              {parse(getTranslation("tisa-desc"))}
            </div>
          </div>
        </div>

        <h3 className="experience-title">
          {getTranslation("education", selectedLanguage)}
        </h3>
        <div className="experience-wrapper">
          <div className="company-wrapper clearfix">
            <div className="experience-title">
              <img src={eheio} alt="EHEIO" className="brand cap" />
            </div>
            {/* <div className="time">
              {getTranslation("april", selectedLanguage)} 2022 -{" "}
              {getTranslation("present")} ({capgeminiDuration.years}{" "}
              {getTranslation("yr")} {capgeminiDuration.months}{" "}
              {getTranslation("mos")})
            </div> */}
          </div>

          <div className="job-wrapper clearfix">
            <div className="experience-title">{parse(getTranslation("bac+5-title",selectedLanguage))}</div>
            <div className="company-description">
              {parse(getTranslation("bac-desc"))}
            </div>
          </div>
        </div>

        <div className="language-wrapper">
          <h3 className="section-title">{getTranslation("languages", selectedLanguage)}</h3>
          <ul>
            <li>
              <span>{getTranslation("french", selectedLanguage)}</span> :{" "}
              {getTranslation("native-lang", selectedLanguage)}
            </li>
            <li>
              <span>{getTranslation("english", selectedLanguage)}</span> :{" "}
              {getTranslation("pro-lang", selectedLanguage)}
            </li>
            <li>
              <span>{getTranslation("arabic", selectedLanguage)}</span> :{" "}
              {getTranslation("native-lang", selectedLanguage)}
            </li>
            <li>
              <span>{getTranslation("tamazight", selectedLanguage)}</span>{" "}
              {getTranslation("tamazight-desc", selectedLanguage)} :{" "}
              {getTranslation("native-lang", selectedLanguage)}{" "}
              {getTranslation("3-variants", selectedLanguage)}.
            </li>
            <li>
              <span>{getTranslation("german", selectedLanguage)}</span> :{" "}
              {getTranslation("elem-lang", selectedLanguage)}
            </li>
            <li>
              <span>{getTranslation("russian", selectedLanguage)}</span> :{" "}
              {getTranslation("elem-lang-bis", selectedLanguage)}
            </li>
          </ul>
        </div>

        <div className="section-wrapper clearfix">
          <h3 className="section-title">{getTranslation("skills", selectedLanguage)}</h3>
          <ul>
            <li className="skill-percentage">HTML / HTML5</li>
            <li className="skill-percentage">CSS / CSS3 / SASS / SCSS</li>
            <li className="skill-percentage">TypeScript</li>
            <li className="skill-percentage">React.js</li>
            <li className="skill-percentage">Angular 2 (version 16)</li>
            <li className="skill-percentage">Python 3</li>
            <li className="skill-percentage">SQL</li>
            <li className="skill-percentage">Amazon Web Services (AWS)</li>
            <li className="skill-percentage">Google Cloud Services (GCloud)</li>
          </ul>
        </div>

        <div className="section-wrapper clearfix">
          <h3 className="section-title">{getTranslation("hobbies", selectedLanguage)}</h3>
          {parse(getTranslation("hobbies-desc", selectedLanguage))}
        </div>
      </div>

      <div className="clearfix"></div>
      <div className="copyright-wrapper clearfix">
        <p>
          <span>v0.5.0 Made with&nbsp;</span>
          <span className="red-text">❤</span>
          <span>&nbsp;by&nbsp;</span>
          <a href="https://github.com/aminekun90">amine</a>
          <span>&nbsp;using&nbsp;</span>
          <a href="https://react.dev">React.js</a>
        </p>
      </div>
    </section>
  );
}

export default JobTrainingSection;
