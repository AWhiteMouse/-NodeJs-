const fs = require("fs");
const querystring = require('querystring');
const formiable = require('formidable');

function start(response, request) {
    console.log('Request handle "start" route!');
    response.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
    const html = fs.readFileSync("index.html");
    response.write(html);
    response.end();
}

function upload(response, request) {
    console.log('Request handle "upload" route!');
    const form = new formiable.IncomingForm();
    form.parse(request, function(error, fields, files) {
        fs.renameSync(files.upload.path, "tmp/avatar.png")
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write('<img src="/show" /> ');
        response.end();
    });
}

function show(response, request) {``
    console.log('Request handle "show" route!');
    fs.readFile("tmp/avatar.png", "binary", function(error, file) {
        if (error) {
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.write(error);
            response.end();
        } else {
            response.writeHead(200, { "Content-Type": "image/png" });
            response.write(file, "binary");
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;