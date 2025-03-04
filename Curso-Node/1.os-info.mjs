import { platform, release, arch, cpus, uptime } from 'node:os'

console.log('informacion del sistema operativo')
console.log('----------------------------------')
console.log('Plataforma: ', platform())
console.log('Version del sistema operativo: ', release())
console.log('Arquitectura del sistema operativo: ', arch())
console.log('Cpu: ', cpus()) // <- vamos a poer escalar la aplicacion de node
console.log('upTime: ', uptime() / 60/ 60)

