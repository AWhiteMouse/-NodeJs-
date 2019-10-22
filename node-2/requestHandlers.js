function start() {
    console.log('Request handle "start" route!');
    return 'Hello start!';
}

function upload() {
    console.log('Request handle "upload" route!');
    return 'Hello Upload';
}

exports.start = start;
exports.upload = upload;