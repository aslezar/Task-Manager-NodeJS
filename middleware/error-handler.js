const { CustomAPIError } = require('../errors/coustom-error')
const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError)
        return res.status(err.statusCode).json({ message: err.message });
    return res.status(500).json({ msg: err });
}

module.exports = errorHandlerMiddleware;