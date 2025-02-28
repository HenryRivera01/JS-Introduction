/** Metodos de Propiedad */

/* Los metodos de propiedad son funciones que se
almacenan como propiedades dentro de un objeto

Se llaman metodos de propiedad porque tienen la sintaxis que
tendría una propiedad de un objeto pero en realidad son metodos*/

const reproductor = {
    reproducir : function(idSong){
        console.log(`Reproduciendo cancion con el ID: ${idSong}`);
    },
    pausar : function(){
        console.log('pausando...')
    },
    crearPlaylist : function(playlistName){
        console.log(`Se creo una playlist con el nombre de: ${playlistName}`)
    },
    reproducirPlaylist : function(playlistName){
        console.log(`Reproduciendo la playlist con el nombre de: ${playlistName}`)
    }
}

/** Podemos agregar una funcion del objeto reproductor por fuera del cuerpo del objeto
 *Aunque la sintaxis cambia un poco, ya no usamos los : sino un igual
 */
reproductor.borrarCancion = function(idSong){
    console.log(`Eliminando la cancion con el ID: ${idSong}`)
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(3840);
reproductor.crearPlaylist('Canciones para llorar')
reproductor.reproducirPlaylist('Canciones para llorar')
