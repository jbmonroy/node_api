const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const encrypt = async (password)=> {
    return await bcryptjs.hash(password, 10);
};

const compare = async (password, passwordHash)=>{
    return await bcryptjs.compare(password,passwordHash);
};

module.exports = {
    encrypt,
    compare
}