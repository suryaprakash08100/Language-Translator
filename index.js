// const translate = require('translate-google-api');

// // Define the supported languages
// const SUPPORTED_LANGUAGES = {
//   hi: 'Hindi',
//   te: 'Telugu',
//   ml: 'Malayalam',
//   ta: 'Tamil',
//   kn: 'Kannada',
//   en:'English',
// };

// /**
//  * Translates text from one language to another.
//  * @param {string} text - The text to translate.
//  * @param {string} from - The source language code (e.g., 'en' for English).
//  * @param {string} to - The target language code (e.g., 'hi' for Hindi).
//  * @returns {Promise<string>} - The translated text.
//  */
// async function translateText(text, from, to) {
//   if (!SUPPORTED_LANGUAGES[from]) {
//     throw new Error(`Unsupported source language: ${from}`);
//   }
//   if (!SUPPORTED_LANGUAGES[to]) {
//     throw new Error(`Unsupported target language: ${to}`);
//   }

//   try {
//     const result = await translate(text, { from, to });
//     return result;
//   } catch (error) {
//     throw new Error(`Translation failed: ${error.message}`);
//   }
// }

// module.exports = { translateText, SUPPORTED_LANGUAGES };

const translate = require('translate-google-api');

// Define the supported languages
const SUPPORTED_LANGUAGES = {
  hi: 'Hindi',
  te: 'Telugu',
  ml: 'Malayalam',
  ta: 'Tamil',
  kn: 'Kannada',
};

/**
 * Translates text from English to one of the supported languages.
 * @param {string} text - The English text to translate.
 * @param {string} to - The target language code (e.g., 'hi' for Hindi).
 * @returns {Promise<string>} - The translated text.
 */
async function translateText(text, to) {
  if (!SUPPORTED_LANGUAGES[to]) {
    throw new Error(`Unsupported target language: ${to}`);
  }

  try {
    const result = await translate(text, { from: 'en', to });
    return result;
  } catch (error) {
    throw new Error(`Translation failed: ${error.message}`);
  }
}

module.exports = { translateText, SUPPORTED_LANGUAGES };
