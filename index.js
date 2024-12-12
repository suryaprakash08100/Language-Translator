
const translate = require('translate-google-api');

// Define the supported languages
const SUPPORTED_LANGUAGES = {
  hi: 'Hindi',
  te: 'Telugu',
  ml: 'Malayalam',
  ta: 'Tamil',
  kn: 'Kannada',
};
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
