import englishData from "../../data/english.json";
import frenchData from "../../data/french.json";

export const getTranslation = (key, selectedLanguage = "english") => {
  switch (selectedLanguage.toLowerCase()) {
    case "french":
      return frenchData[key] || englishData[key]; // Fallback to English if the key is not found
    case "english":
    default:
      return englishData[key]; // Default to English if language is not recognized
  }
};