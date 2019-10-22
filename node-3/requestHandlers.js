function start() {
    console.log('Request handle "start" route!');
    function sleep(milliSeconds) {
        const startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds);
    }

    sleep(10000);
    return 'Hello start!';
}

function upload() {
    console.log('Request handle "upload" route!');
    return 'Hello Upload';
}

exports.start = start;
exports.upload = upload;