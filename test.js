const textToSpeech = require('./tts');
const fs = require('fs');

async function testTTS() {
    const audioBuffer = await textToSpeech('Bu farklı bir sesle oluşturulmuş bir mesajdır.', {
        lang: 'Joanna'
    });

    fs.writeFileSync('./custom_output.mp3', audioBuffer);
    console.log('Dosya Kayıt edildi');
}

testTTS();

//Dil girmezseniz varsayılan olarak Filiz sesi kullanılır.
//const audioBuffer2 = await textToSpeech('Bu farklı bir sesle oluşturulmuş bir mesajdır.');