const { app } = require('@azure/functions');
const sgMail = require('@sendgrid/mail');

const sendGridApiKey = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(sendGridApiKey);

app.http('httpTrigger1', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        try {
            const { to, subject, text } = req.body;
    
            if (!to || !subject || !text) {
                context.res = {
                    status: 400,
                    body: "Os campos 'to', 'subject' e 'text' são obrigatórios."
                };
                return;
            }
    
            const msg = {
                to,
                from: process.env.SENDGRID_FROM_EMAIL,
                subject,
                text,
            };
    
            await sgMail.send(msg);
            context.log(`E-mail enviado com sucesso para ${to}`);
    
            context.res = {
                status: 200,
                body: "E-mail enviado com sucesso!"
            };
        } catch (error) {
            context.log("Erro ao enviar o e-mail:", error);
    
            context.res = {
                status: 500,
                body: "Ocorreu um erro ao enviar o e-mail. Tente novamente mais tarde."
            };
        }
        return { body: `Hello!` };
    }

})
