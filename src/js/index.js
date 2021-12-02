import { PantallaRegistro } from './registro';


async function initApp() {
    //Mostrar formulario registro usuario
    const pantallaRegistro = new PantallaRegistro(document.querySelector('#registro'));
    pantallaRegistro.show();
                
    //Una vez registrado, mostrar la pantalla de equipos
    pantallaRegistro.getCreatedUser().then(registeredUser => {
        // Guardar session storage

        // Ocultar pantalla registro
        pantallaRegistro.hide();

        // Mostrar pantalla equipo


        alert(registeredUser);
    });

    
}

initApp();
