/**
 * 路由处理
 * 
 * @param {Object} handle 路由处理器
 * @param {*} pathname 路径
 */
function route(handle, pathname) {
    if (typeof handle[pathname] === 'function') {
        return handle[pathname]();
    } else {
        console.log('No such route!');
        return '404 Not Found!';
    }
}

exports.route = route;
