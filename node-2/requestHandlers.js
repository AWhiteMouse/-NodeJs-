function start() {
    console.log('Request handle "start" route!');
    return 'Hello start!';
}

function upload() {
    console.log('Request handle "upload" route!');
    return 'Hello Upload';
}

// 正确写法1
exports.start = start;
exports.upload = upload;

// 正确写法2
// module.exports = {
//     start,
//     upload,
// };

// 错误写法
// exports = {
//     start,
//     upload,
// };
