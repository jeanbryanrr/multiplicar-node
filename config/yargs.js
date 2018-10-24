const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'imprime en consola', opciones)
    .command('crear', 'crea en consola', opciones)
    .argv;


module.exports = {
    argv
}