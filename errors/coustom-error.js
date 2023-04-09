class CustomAPIError extends Error {
    constructor(msg, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

const createCoustomError = (msg, code) => {
    return new CustomAPIError(msg, code);
}

module.exports = { createCoustomError, CustomAPIError }