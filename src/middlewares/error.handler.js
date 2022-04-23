const { ValidationError } = require('sequelize');

function LogError(err, req, res, next) {
    //console.error(err);
    next(err);
}

function BoomErrorHandler(err, req, res, next) {
    if(err.isBoom){
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    }
    next(err);
}

function OrmErrorHandler(err, req, res, next) {
    if(err instanceof ValidationError){
        res.status(409).json({
            statusCode: 409,
            message: err.name,
            errors: err.errors
        });
    }
    next(err);
}

function ErrorHandler(err, req, res, next) {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
}

module.exports = {
    LogError,
    BoomErrorHandler,
    OrmErrorHandler,
    ErrorHandler
};