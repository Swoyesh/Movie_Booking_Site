const jwt = require('jsonwebtoken')
const JWT_secret = "firsttry"

const fetchUser = (req, res, next)=>{
    const token = req.header("auth-token")
    const decoded = jwt.decode(token, {complete: true})
    if(!token){
        return res.status(401).send({ error: "Please authenticate using a valid token." });
    }
    try {
        const data = jwt.verify(token, JWT_secret)
        req.user = data.users
        next()
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token." });
    }
}

module.exports = fetchUser