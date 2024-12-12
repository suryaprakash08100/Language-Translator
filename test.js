// const { translateText, SUPPORTED_LANGUAGES } = require('./index');

// (async () => {
//   try {
//     const text = 'మీ ఫోన్ లేదా కంప్యూటర్‌లో వ్యక్తిగత వ్యాఖ్యాత';
//     const from = 'te'; 
//     const to = 'en';   // Hindi

//     console.log('Supported Languages:', SUPPORTED_LANGUAGES);
//     const translatedText = await translateText(text, from, to);
//     console.log(`Translation (${from} -> ${to}): ${translatedText}`);
//   } catch (error) {
//     console.error(error.message);
//   }
// })();


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
