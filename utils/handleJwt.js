const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const tokenSign = async (user)=>{
    return await jwt.sign(
        {
            _id: user._id,
            role: user.role
        },
        JWT_SECRET,
        {
            expiresIn: '2h'
        }
    );
};

const tokenVerify = async (token)=>{
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (e) {
        return null;
    }
};

module.exports = {
    tokenSign,
    tokenVerify
}