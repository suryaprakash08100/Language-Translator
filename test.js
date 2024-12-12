const { translateText, SUPPORTED_LANGUAGES } = require('./index');

(async () => {
  try {
    const text = 'Good morning! Have a nice day.';
    const targetLanguage = 'te'; // Tamil

    console.log('Supported Languages:', SUPPORTED_LANGUAGES);
    const translatedText = await translateText(text, targetLanguage);
    console.log(`Translation (English -> ${SUPPORTED_LANGUAGES[targetLanguage]}): ${translatedText}`);
  } catch (error) {
    console.error(error.message);
  }
})();
