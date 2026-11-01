# TTS Maker

A simple Text-to-Speech API wrapper for ttsmp3.com that allows you to convert text to speech and get the audio buffer.

## Installation

```bash
npm install ttsmaker
```

🎧 [Click here to listen to the audio](https://github.com/DeveloperKubilay/TTS_Maker/raw/refs/heads/main/examples/en.mp3)

## Usage

```javascript
const textToSpeech = require('ttsmaker');
const fs = require('fs');

async function example() {
    // With default voice (Filiz)
    const audioBuffer = await textToSpeech('Hello world!');
    fs.writeFileSync('output.mp3', audioBuffer);
    
    // With custom voice
    const customAudio = await textToSpeech('This is a message with a different voice.', {
        lang: 'Joanna'
    });
    fs.writeFileSync('custom_output.mp3', customAudio);
}

example();
```


## Options

You can specify the voice by passing an options object with the `lang` parameter:

```javascript
const options = {
    lang: 'Joanna' // Default is 'Filiz' if not specified
};
```


## ⚠️ Disclaimer & Legal Notice

- **Unofficial Wrapper:** This project is an independent open-source wrapper and is **not affiliated with, authorized, maintained, or endorsed by** `ttsmp3.com`. All trademarks, service marks, and company names belong to their respective owners.
- **Educational & Personal Use:** This package is provided strictly for educational, testing, and personal development purposes.
- **Fair Use:** Users are solely responsible for ensuring fair and responsible use that complies with third-party service terms. Do not use this tool to flood or abuse upstream services.
- **Limitation of Liability:** The author assumes no responsibility or liability for any misuse or damages resulting from the use of this software.

---


# TTS Maker (Türkçe)

ttsmp3.com için basit bir Metinden Konuşmaya (Text-to-Speech) API wrapper'ı. Metni sese dönüştürmenize ve ses buffer'ını almanıza olanak tanır.

## Kurulum

```bash
npm install ttsmaker
```

## Kullanım

```javascript
const textToSpeech = require('ttsmaker');
const fs = require('fs');

async function ornek() {
    // Varsayılan ses ile (Filiz)
    const sesDosyasi = await textToSpeech('Merhaba dünya!');
    fs.writeFileSync('cikti.mp3', sesDosyasi);
    
    // Özel ses ile
    const ozelSes = await textToSpeech('Bu farklı bir sesle oluşturulmuş bir mesajdır.', {
        lang: 'Joanna'
    });
    fs.writeFileSync('ozel_cikti.mp3', ozelSes);
}

ornek();
```

🎧 [Buraya tıkla ve sesi dinle](https://github.com/DeveloperKubilay/TTS_Maker/raw/refs/heads/main/examples/tr.mp3)


## Seçenekler

`lang` parametresi ile bir seçenekler nesnesi geçerek sesi belirtebilirsiniz:

```javascript
const secenekler = {
    lang: 'Joanna' // Belirtilmezse varsayılan 'Filiz' kullanılır
};
```

## ⚠️ Yasal Uyarı & Sorumluluk Reddi

- **Resmi Olmayan Wrapper:** Bu proje bağımsız ve açık kaynaklı bir kütüphanedir; `ttsmp3.com` ile herhangi bir resmi ortaklığı, sponsorluğu veya bağlantısı **yoktur**. Tüm ticari markalar ve haklar kendi sahiplerine aittir.
- **Kişisel ve Eğitim Amaçlı:** Bu araç yalnızca kişisel projeler, testler ve eğitim amaçlı geliştirilmiştir.
- **Kullanıcı Sorumluluğu:** Kullanıcılar ilgili servisin kullanım şartlarına uymakla bizzat yükümlüdür. Servisi aşırı yükleyecek veya kötüye kullanacak şekilde çalıştırmayınız.
- **Sorumluluk Reddi:** Yazılım olduğu gibi sunulur; geliştirici bu kodun kullanımından doğabilecek hiçbir olumsuzluktan sorumlu tutulamaz.
