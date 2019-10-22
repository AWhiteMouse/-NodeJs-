const fs = require("fs");
const querystring = require('querystring');

function start(response, postData) {
    console.log('Request handle "start" route!');
    response.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
    const html = fs.readFileSync("index.html");
    response.write(html);
    response.end();
}

function upload(response, postData) {
    console.log('Request handle "upload" route!');
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write('Hello ' + querystring.parse(postData).name);
    response.end();
}

exports.start = start;
exports.upload = upload;