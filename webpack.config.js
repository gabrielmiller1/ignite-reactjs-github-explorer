const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin'); //Importando plugin webpack
const ReactRefreshWebpackPlugin = require ('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'; //para declarar ambiente de desenvolvimento ou produção.

module.exports = {
    mode: 'development', //Modo de desenvolvimento
    devtool: isDevelopment ? 'eval-source-map' : 'source-map', //Configurando source map
    entry: path.resolve(__dirname, 'src', 'index.jsx'), //Entry= Qual arq principal da aplicação
    output: {
        path: path.resolve(__dirname, 'dist'), //Passando arq que geraremos com o webpack
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'], //Extensões que ele consiguira transpilar adicionamos .jsx
    },
    devServer: {//Configurando webpack server, passando diretorio que ficam nossa pasta onde tem nosso arq estático da aplicação.
        static: {
            directory: path.join(__dirname, 'public'),
        },
        hot: true,
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(), //Adc plugin refresh no webpack
        new htmlWebPackPlugin({ //Criando e passando template para plguin WebPack, apenas para melhorar fluxo da aplicação
            template: path.resolve(__dirname, 'public', 'index.html')
        })

    ].filter(Boolean),//Filtrando qualquer valor verdadeiro
    module: { //Como lidar com os arq transpilados
        rules: [ //Array de regras para cada tipo de arquivos
            {
                test: /\.jsx$/, //Expressão regular para verificar se e um arq js ou não
                exclude: /node_modules/, //Excluindo arquivos do node_modules
                use: {
                    loader: 'babel-loader', //Integração entre babel e o webpack
                    options: {
                        plugins: [ 
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                }
            },
            {
                test: /\.scss$/, //Expressão regular para verificar se e um arq scss
                exclude: /node_modules/, //Excluindo arquivos do node_modules
                use: [ 'style-loader', 'css-loader', 'sass-loader'] , //Integração entre babel e o webpack para transpilar scss
            }
        ]
    }
}