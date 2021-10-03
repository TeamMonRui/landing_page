const sgMail = require('@sendgrid/mail');
const emailController = {}

emailController.send = async function(name, email, phone, comment){
    let message_body = `Nombre del solicitante: ${name}\n`
    message_body = message_body + `Email del solicitante: ${email}\n`
    message_body = message_body + `Teléfono del solicitante: ${phone}\n`
    message_body = message_body + `Comentario del solicitante: ${comment}`

    sgMail.setApiKey(process.env.SG_KEY);

    try {
        await sgMail.send({
            from: 'franciscomontoyacasual@gmail.com',
            to: 'franciscomontoyaes@gmail.com',
            subject: 'Comentario de la web',
            text: message_body
        })

        return 0
    }catch (err){
        return -1
    }
}

module.exports = emailController