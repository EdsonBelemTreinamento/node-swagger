const swaggerJSDoc= require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const swaggerDefinition={
    openapi: '3.0.0',
    info:{
        title:'Documentacao basico',
        version: '1.0.0',
        description: 'Documentacao do Api feito arq treinamento edson e lu'
    },
    server:[
        {
            url: 'http://localhost:3403',
            description:'servidor local'
        }
    ]
}

const options={
    swaggerDefinition,
    apis:['./*.js']
};

const swaggerSpec = swaggerJSDoc(options);

module.exports ={
    swaggerJSDoc,
    swaggerSpec,
    swaggerUi

}