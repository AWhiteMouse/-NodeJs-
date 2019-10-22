const exec = require('child_process').exec;

function start(response) {
    console.log('Request handle "start" route!');
    exec(
        "find /",
        {
            timeout: 10000,
            maxBuffer: 20000 * 1024
        },
        function (err, stdout, stderr) {
            response.writeHead(200, { "Content-Type": "text/plain" });
            response.write(stdout);
            response.end();
        }
    );
}

function upload(response) {
    console.log('Request handle "upload" route!');
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write('Hello Upload');
    response.end();
}

exports.start = start;
exports.upload = upload;