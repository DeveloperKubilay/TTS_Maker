const axios = require("axios")
module.exports = async function(text, options = {}){
    return new Promise(async (resolve, reject) => {

    axios.post('https://ttsmp3.com/makemp3_new.php', {
        msg: text,
        lang: options.lang || "Filiz",
        source: "ttsmp3"
    }, {
      headers: {  
        "accept": "*/*",
        "accept-language": "tr",
        "content-type": "application/x-www-form-urlencoded",
        "sec-ch-ua": "\"Not/A)Brand\";v=\"99\", \"Microsoft Edge\";v=\"115\", \"Chromium\";v=\"115\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-kl-ajax-request": "Ajax_Request",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      method: 'POST'
    }).then((x) => {
        axios({
            method: 'get',
            url: x.data.URL,
            responseType: 'arraybuffer'
          })
          .then(function (response) {
            resolve(response.data);
          })
          .catch(error => {
            reject(error);
          });
    }).catch(error => {
        reject(error);
    });

    })
}