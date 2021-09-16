const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'), //Entry= Qual arq principal da aplicação
    output: {
        path: path.resolve(__dirname, 'dist'), //Passando arq que geraremos com o webpack
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'], //Extenções que ele consiguira transpilar adicionamos .jsx
    },
    module: { //Como lidar com os arq transpilados
        rules: [ //Array de regras para cada tipo de arquivos
            {
                test: /\.jsx$/, //Expressão regular para verificar se e um arq js ou não
                exclude: /node_modules/, //Excluindo arquivos do node_modules
                use: 'babel-loader', //Integração entre babel e o webpack
            },
        ]
    }
}