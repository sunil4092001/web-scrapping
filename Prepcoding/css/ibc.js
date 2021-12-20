const request = require('request');
const cheerio = require("cheerio");
console.log("before");
request('https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-kolkata-knight-riders-final-1254117/ball-by-ball-commentary',cb);
function cb( error ,response,html){
    if(error){
        console.log("error" +error);
    }else{
        handletxt(html);
    }
}

function handletxt(html){
    let $ = cheerio.load(html);
    // let elemarr = $(".d-flex.match-comment-padder.match-comment-wrapper.match-comment-long-text");
    let elemarr = $(".match-comment-long-text");
    // let elemarr = $(".match-comment-wrapper.match-comment-long-text");
    // let elemarr = $(".match-comment-short-text");
    let text = $(elemarr[0]).text();
    let htmldata = $(elemarr[0]).html();

    console.log("text",text);
    console.log("Html data",htmldata);
    
}
console.log("after");