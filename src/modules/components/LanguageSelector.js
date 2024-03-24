import englishimg from "../../img/english.png";
import frenchimg from "../../img/french.png";

function LanguageSelector({ onLanguageChange }) {

  return (
    <div className="lang">
      <img onClick={() => onLanguageChange('English')} src={englishimg} alt="English" />
      <img onClick={() => onLanguageChange('French')} src={frenchimg} alt="French" />
    </div>
  );
}

export default LanguageSelector;
