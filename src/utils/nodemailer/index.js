let {createTransport} = require("nodemailer");
const {config} = require('../../config')

module.exports = {

    async enviar(titulo,mensaje){

        
        let host = 'smtp.ethereal.email';
        let service = config.service;
        let user = config.email;
        let pass = 'smhbdzcerrmgepxm';
        let transport = createTransport({
            host,
            service ,
            port: 587,
            auth: {
                user,
                pass
            }
        })
        
        let subject = `${titulo}`;
        let html = `${mensaje}`;
    
        try {
            let params = {
                from: '',
                to: user,
                subject,
                html
            }
            const response = await transport.sendMail(params)
        } catch (error) {
            console.log(error)
        }
    }

}

