# Huerto Inteligente

Proyecto personal para controlar/automatizar el riego automático totalmente monitorizado y personalizable a través de una Raspberry Pi 2.

## Para empezar...

Para llevar a cabo el proyecto se necesita el siguiente hardware y software:

### Prerrequisitos Hardware

- Raspberry 2 Model B
- Teclado y ratón USB
- Conexión y cable ETHERNET
- Tarjeta y adaptador SSD
- Fuente alimentación para Raspberry 2
- Protoboard
- Soldador y estanio

### Prerrequisitos Software

- Raspbian
- VNCServer
- Cuenta en remote.it
- NodeJS
- Editor (VSCode)

### Others

- VSCode (ESLint) (https://travishorn.com/setting-up-eslint-on-vs-code-with-airbnb-javascript-style-guide-6eb78a535ba6)
- Guía de estilos JS de Airbnb (https://github.com/airbnb/javascript)

## Puesta en marcha...

### Instalando Raspbian

Para realizar la instalación del SO, me he guiado en los siguiente enlaces:

- https://www.raspberrypi.org/documentation/installation/installing-images/
- https://www.instructables.com/id/How-to-Install-and-configure-Raspbian-on-Raspberry/

Hay que instalar la última versión estable de Raspbian.

- PROBLEMAS:
  Al actualizar Raspbian al iniciarse por primera vez, fue muy lento y acabó dando un error. SOLUCION: he actualizado a través de la consola

```
$ sudo apt-get update
$ sudo apt-get full-upgrade
```

### Levantando un WebServer

En esta sección se instala y configura un servidor Web NodeJS, el cuál será accesible en remoto vía remote.it y haciendo "port forwarding" a nuestro router. Por último, se podrá acceder a él a través de SSH o explorador Web.

- https://tutorials-raspberrypi.com/setup-raspberry-pi-node-js-webserver-control-gpios/
  En este enlace se puede ver como configurar el servidor Web y añadirlo como tarea cron, así si se reinicia, se levantará automáticamente el servidor en el puerto 80.

- https://comunidad.movistar.es/t5/Soporte-Fibra-y-ADSL/Abrir-puertos-en-el-HGU-Mitrastar-GPT-2541GNAC/m-p/2908202/thread-id/152031
  En mi caso tengo un router Mitrastar con Movistar. Se tiene que seguir los pasos que se describen en el enlace para saber como abrir los puertos.

- https://medium.com/@ankur.kus1/how-to-setup-your-raspberry-pi-for-iot-e1d35147c88a
  Enlace bastante útil con una serie de configuraciones necesarias para el control remoto. Cuando se tiene la VNC configurada para conectarme desde el exterior se hace:

```
- Conectarme a remote.it con las credenciales de la cuenta creada previamente.
- Ir a Devices, clickar sobre el servicio creado(SSH/WebServer)
- Copiar comando o url que nos dice y ya tendríamos acceso a nuestra Raspberry
```

### Instalación y configuración

Con el siguiente comando, instalamos todas las librerías necesarias:

```
npm install
```

Entre los paquetes que se instalan están:

- Express
- Bootstrap
- Pug
- Rpio
- ESLint + Airbnb
- Node Sass

### Guía de estilos JS

Para mantener un código lo suficiente robusto se ha seguido la guía de estilos que ofrece Airbnb para Javascript.

- [Guía estilos Airbnb JS](https://github.com/airbnb/javascript)

Con VSCode es posible configurar Prettier + ESLint + Airbnb, de manera que auto-formatea el código siguiendo las pautas de la guía de estilos comentada previamente. Para la configuración se puede seguir los siguiente enlaces:

- [Configuracion ESLint 1](https://travishorn.com/setting-up-eslint-on-vs-code-with-airbnb-javascript-style-guide-6eb78a535ba6)
- [Configuracion ESLint 2](https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a)

### Configuración de Sass

Antes de usar Sass como lenguaje de hoja de estilos, hay que configurarlo en el proyecto. para ello se han seguido los siguientes enlaces:

- [Configuracion Sass](https://github.com/sass/node-sass-middleware)

Los ficheros de configuración se encuentran en la raíz del proyecto:

- .eslintrc.json
- .prettierrc

## Autor

- **Diego M. Martínez** - [2PaeDev](https://github.com/2PaeDev)

## License

Este proyecto tiene licencia MIT - mirar el archivo [LICENSE.md](LICENSE.md) para los detalles.
