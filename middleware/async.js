const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            // console.log('inside asyncwrapper try block');
            await fn(req, res, next);
        } catch (error) {
            // console.log('inside asyncwrapper catch block');
            next(error);
        }
    }
}

module.exports = asyncWrapper;