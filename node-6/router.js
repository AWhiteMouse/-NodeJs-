function route(handle, pathname, response, request) {
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, request);
    } else {
        console.log('No such route!');
        response.writeHead(404,  {"Content-Type": "text/html"});
        response.write('404 Not Found!');
        response.end();
    }
}

exports.route = route;