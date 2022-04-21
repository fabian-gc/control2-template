const response = require('koa/lib/response')
const healthAction = require('../../actions/users')

export default function getHealth(ctx) {
    ctx.body = { message: 'ok' }
}

exports.getToken = (ctx) => {
    const token = healthAction.getToken(id,secret,key)
    if(token.id = -1){
        ctx.body = {
            status:400,
            message:"usuario no existe"
        }
    }
    else if(token.secret = -1){
        ctx.body = {
            status:400,
            message:"private key incorrecta"
        }
    }
    else if(token.key = -1){
        ctx.body = {
            status:400,
            message:"public key incorrecta"
        }
    }
    else{
        ctx.body = {
            status:200,
            token:token.token
        }       
    }
    return ctx
}

exports.getUser = (ctx) =>{
    const user = healthAction.getUser(id,token)
        if(user == -1){
            ctx.body ={
                status:400,
                message:"usuario no existe o token vencido"
            }
        }
        else{
            ctx.body = {
                status:200,
                user:user
            }         
        }
        return ctx
}