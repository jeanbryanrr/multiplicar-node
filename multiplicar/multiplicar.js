const fs = require('fs');



crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        let data = '';
        for (let index = 0; index <= limite; index++) {
            data += `${base} * ${index} = ${base*index}\n`

        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tabla${base}.txt`, data, (err) => {
            if (err) reject(err);
            else {
                resolve(`tabla-${base}.txt`)
            }

        });
    });
}


listar = (base, limite = 10) => {

    let data = '';
    for (let index = 0; index <= limite; index++) {
        data += `${base} * ${index} = ${base*index}\n`
        console.log(`${base} * ${index} = ${base*index} \n`)

    }
}
module.exports = {
    crearArchivo,
    listar
}