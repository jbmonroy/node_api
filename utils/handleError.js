const handleHttpError = (res, message = 'FORBIDDEN', status = 403) => {
    res.status(status).send({ error: message });
}

module.exports = {
    handleHttpError
}