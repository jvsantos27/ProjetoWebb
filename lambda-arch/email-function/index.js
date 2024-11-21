const sgMail = require('@sendgrid/mail');

module.exports = async function (context, req) {
    const sendGridApiKey = process.env.SENDGRID_API_KEY;

    if (!sendGridApiKey) {
        console.log("A chave de API do SendGrid não foi configurada.");
    } else {
        console.log("Chave de API do SendGrid configurada corretamente.");
    }

    sgMail.setApiKey(sendGridApiKey);

    try {
        const { to, subject, text, html } = req.body;

        if (!to || !subject || (!text && !html)) {
            context.res = {
                status: 400,
                body: "Os campos 'to', 'subject' e pelo menos 'text' ou 'html' são obrigatórios."
            };
            return;
        }

        const msg = {
            to,
            from: process.env.SENDGRID_FROM_EMAIL,
            subject,
            text: text || undefined,
            html: html || undefined,
        };

        await sgMail.send(msg);

        context.res = {
            status: 200,
            body: "Email enviado com sucesso!"
            
        };
    } catch (error) {
        context.log("Erro ao enviar email:", error);

        context.res = {
            status: 500,
            body: "Erro ao enviar email. Verifique os logs para mais detalhes."
        };
    }
};
