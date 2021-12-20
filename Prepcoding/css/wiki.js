const request = require('request');
const cheerio = require("cheerio");
console.log("before");
request('https://en.wikipedia.org/wiki/S',cb);
function cb( error ,response,html){
    if(error){
        console.log("error" +error);
    }else{
        handletxt(html);
    }
}

function handletxt(html){
    let $ = cheerio.load(html);
    // let elemarr = $(".mw-headline ");
    let elemarr = $(".mw-parser-output>p");
    let h1s = $("h1");
      console.log(h1s.length);
    
    for(let j=0 ;j<elemarr.length; j++){
        let text = $(elemarr[j]).text();
        console.log("",text);
    }
   
    
}
console.log("after");