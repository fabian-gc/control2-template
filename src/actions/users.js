const healthData = require('../data/users')
const genToken = require('../utils/uuid')
const constants = require('../utils/constants')
const userData = require('../../data/users')

exports.getToken = (id,secret,key) =>{
    const id = id
    const secret = secret
    const key = key
    const token = {}
    
    if(id > 10000){
        token.id = -1
    }
    else{
        token.id = id
    }
    if(secret != constants.SECRET){
        token.secret = -1
    }
    else{
        token.secret = secret
    }
    if(key != constants.KEY){
        token.key = -1
    }
    else{
        token.key = key
    }
    if(token.id  == -1 | token.secret == -1 |token.key == -1 ){
        token.token = -1
    }
    else{
        token = genToken.exports
    }
    return token
}

exports.getUser = (id,token) =>{
    const id = id
    const token = token
    const user ={}

    if(token == token){
        user = userData.getFakeUser(id)
    }
    else{
        user = -1
    }
    return uses
}