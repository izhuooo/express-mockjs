const response = (res, status, msg, data = {}, token) => {
    if (token) {
        res.json({ status, msg, token, data })
    } else {
        res.json({ status, msg, data })
    }
}

module.exports = response;