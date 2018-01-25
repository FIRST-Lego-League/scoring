exports.root = __dirname + '/../';

exports.doNothing = (req, res, next) => next();

exports.middleware = function(res, res, next) {
    res.sendError = function(err) {
        var status = err.status || 500;
        var message = err.message || "Internal server error"

        this.log.error(message);
        this.status(status).send(message);
    };

    next();
};
