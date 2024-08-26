const jwt = require('jsonwebtoken')
const JWT_secret = "firsttry"

const fetchUser = (req, res, next)=>{
    const token = req.header("auth-token")
    const decoded = jwt.decode(token, {complete: true})
    if(!token){
        return res.status(401).send({ error: "Please authenticate using a valid token." });
    }
    try {
        const data = jwt.verify(token, JWT_secret, (err, res)=>{
            if(err){
                return "token expired"
            }
            return res
        })
        req.user = data.user
        next()
    } catch (error) {
        console.log("Please authenticate using a valid token.")
        res.status(401).send({ error: "Please authenticate using a valid token." });
    }
}

module.exports = fetchUser