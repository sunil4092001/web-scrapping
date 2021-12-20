const request = require('request');
const cheerio = require("cheerio");
// const chalk = require("chalk");
const chalk = require('chalk');
console.log("before");
request('https://www.worldometers.info/coronavirus/',cb);
console.log("after end");
function cb(error, response, html) {
    if(error){
        console.error('error:', error); // Print the error if one occurred

    }
    else{

        handlehtml(html);
    }
//    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //  console.log('html:', html); // Print the HTML for the Google homepage.
  }
  function handlehtml(html){
      let selTool = cheerio.load(html);
    //   let h1s = selTool("h1");
    //   console.log(h1s.length);
      let contentarr = selTool("#maincounter-wrap span");
      let  total = selTool(contentarr[0]).text();
      let death = selTool(contentarr[1]).text();
      let recovered = selTool(contentarr[2]).text();

      console.log(chalk.gray("Total Cases"+total));
      console.log(chalk.red("Total Deaths"+death));
      console.log(chalk.green("Total REcovered"+recovered));
  }

