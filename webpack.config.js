const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin'); //Importando plugin webpack

module.exports = {
    mode: 'development', //Modo de desenvolvimento
    entry: path.resolve(__dirname, 'src', 'index.jsx'), //Entry= Qual arq principal da aplicação
    output: {
        path: path.resolve(__dirname, 'dist'), //Passando arq que geraremos com o webpack
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'], //Extensões que ele consiguira transpilar adicionamos .jsx
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),//Configurando webpack server, passando diretorio que ficam nossa pasta onde tem nosso arq estático da aplicação
    },
    plugins: [
        new htmlWebPackPlugin({ //Criando e passando template para plguin WebPack, apenas para melhorar fluxo da aplicação
            template: path.resolve(__dirname, 'public', 'index.html')
        })

    ],
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