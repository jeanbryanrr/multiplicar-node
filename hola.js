const argv = require('./config/yargs').argv;
const { crearArchivo, listar } = require('./multiplicar/multiplicar');
let comando = argv._[0];
switch (comando) {
    case 'crear':

        crearArchivo(argv.base, argv.limite).then((result) => {
            console.log(`archivo creado ${result}`);
        }).catch((err) => {

        });


        break;
    case 'listar':
        listar(argv.base, argv.limite);
        break;
    default:
        console.log('desconcido');
        break;
}