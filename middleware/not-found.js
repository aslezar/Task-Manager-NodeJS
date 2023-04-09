const notFound = (req, res) => {
    // console.log('Middleware notFoundcalled');
    res.status(404).send('Route does not exist')
}

module.exports = notFound