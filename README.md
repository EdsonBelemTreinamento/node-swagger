# API de Mensagens de Boas-Vindas com Swagger

Esta é uma API simples em Node.js usando Express e Swagger para documentação. Ela fornece uma mensagem de boas-vindas personalizada com o nome do usuário.

## Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados em sua máquina.

## Instalação

1. Clone este repositório:

   ```bash
   git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/EdsonBelemTreinamento/node-swagger.git)
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd seu-repositorio
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Executando o Servidor

Para iniciar o servidor, execute o seguinte comando:

```bash
npm start
```

O servidor estará disponível em `http://localhost:3403`.

## Documentação da API

A documentação da API foi gerada usando Swagger e pode ser acessada em `http://localhost:3403/api-docs`.

## Endpoint

### GET /message/{nome}

Este endpoint retorna uma mensagem de boas-vindas personalizada com o nome do usuário fornecido na URL.

- **Parâmetros de URL**:
  - `nome`: Nome do usuário (string)

- **Exemplo de Uso**:

  ```bash
  curl http://localhost:3403/message/Lu
  ```

- **Resposta**:

  ```
  Bem vindo api Lu !
  ```

## Estrutura do Projeto

- `swagger.js`: Configuração do Swagger para documentação da API.
- `index.js`: Arquivo principal da API, onde o servidor é iniciado e os endpoints são definidos.

## Dependências

- [express](https://www.npmjs.com/package/express): Framework web para Node.js.
- [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc): Ferramenta para gerar a documentação Swagger a partir de anotações no código.
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express): Middleware para servir a interface Swagger UI para visualização da documentação.

