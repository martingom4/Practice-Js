const os = require('node:os')

console.log('informacion del sistema operativo')
console.log('----------------------------------')
console.log('Plataforma: ', os.platform())
console.log('Version del sistema operativo: ', os.release())
console.log('Arquitectura del sistema operativo: ', os.arch())
console.log('Cpu: ', os.cpus()) // <- vamos a poer escalar la aplicacion de node
console.log('upTime: ', os.uptime() / 60/ 60)

