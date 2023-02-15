//get access and verify token - (journals route)
const jwt = require('jsonwebtoken')
//
const auth = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({msg: "Authentication fail"});
    } 
    
    
    const token = authHeader.split(' ')[1]
    console.log(token);
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {userId: payload.userId, name: payload.name};
        console.log(req.user);
        next();
    }catch (error) {
       res.status(401).json({msg: "Authencation not working"})
    }
};

module.exports = auth;