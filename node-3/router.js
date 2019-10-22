function route(handle, pathname) {
    if (typeof handle[pathname] === 'function') {
        return handle[pathname]();
    } else {
        console.log('No such route!');
        return '404 Not Found!';
    }
}

exports.route = route;