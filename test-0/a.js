console.log('进入a.js');
// 变量导出放在定义的前面会报错
// exports.age = age;
const age = 1;

// 方法导出放在定义的前面不会报错
// exports.getName = getName;
function getName() {
    console.log(age);
}


// 对module.exports赋值一个对象导出需要导出变量或者方法
// module.exports = {
//     getName,
// };

// 对module.exports直接赋值也可以实现导出，但是只能导出一个
// module.exports = getName;
// 如果多次对module.exports直接赋值，那么只有最后一个赋值会生效，前面的都会被覆盖
// module.exports = age;

// 可以简写，直接使用exports导出
// exports.age = age;
// exports.getName = getName;

