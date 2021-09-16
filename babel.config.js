module.exports = {
    presets: [ 
        '@babel/preset-env',
        ['@babel/preset-react', {
            runtime: 'automatic' //Para não ter que importar react nos demais arq, possivel depois da att 17 do React.
        }]
    ]
}