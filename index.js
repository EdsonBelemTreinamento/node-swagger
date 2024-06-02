const express= require('express');
const bodyParser=require('body-parser');
const {swaggerJSDoc,swaggerSpec,swaggerUi } = require('./swagger')

const app = express();
const port = 3403
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use(bodyParser);

/**
* @swagger
* /message/{nome}:
*   get:
*       summary: Mensgem de boas Vindas
*       description: Retorna a Mensagem de Boas mais o nome
*       parameters:
*         - in: path
*           name: nome
*           required: true
*           schema:
*               type: string
*           description: O nome do Usuario
*       responses:
*           200:
*               description: Sucesso
*               content:
*                   text/plain:
*                       schema:
*                           type: string
*                           example: Bem vindo api nome do Usuario !
*/
app.get('/message/:nome', (req,res)=>{
    let nome = req.params.nome;
    res.status(200).send('Bem vindo api '+nome+ " ! ");
});


app.listen(port,()=>{
     console.log(`Servidor rodando na porta http://localhost:${port}`);
});