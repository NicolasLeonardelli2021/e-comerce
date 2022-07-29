let {createTransport} = require("nodemailer");

module.exports = {

    async enviar(titulo,mensaje){

        
        let host = 'smtp.ethereal.email';
        let service = 'gmail';
        let user = 'nicolasleonardelli2012@gmail.com';
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

