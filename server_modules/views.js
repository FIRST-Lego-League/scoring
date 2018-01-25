var fileSystem = require('./file_system');
var authorize = require('./auth').authorize;

exports.route = function(app) {

    app.get('/',function(req,res,next) {
        res.sendFile(fileSystem.resolve('index.html'));
    });

    app.get('/views/pages/:view', authorize((user, req) => {
        let view = req.params.view;
        return req.user.pages.findIndex(page => view.startsWith(page)) !== -1; // Using startsWith for easy hierarchy
    }));

};
