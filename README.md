# Huerto Inteligente

Proyecto personal para controlar/automatizar el riego automático totalmente monitorizado y personalizable a través de una Raspberry Pi 2.

## Para empezar...

Para llevar a cabo el proyecto se necesita el siguiente hardware y software:

### Hardware

- Raspberry 2 Model B
- Teclado y ratón USB
- Conexión y cable ETHERNET
- Tarjeta y adaptador SSD
- Fuente alimentación para Raspberry 2
- Protoboard
- Soldador y estanio

### Software

- Raspbian
- VNCServer
- Cuenta en remote.it
- NodeJS
- Express
- Bootstrap

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

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [Maven](https://maven.apache.org/) - Dependency Management
- [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Billie Thompson** - _Initial work_ - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
