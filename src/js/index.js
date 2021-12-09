import { PantallaRegistro } from './registro';
import { PantallaEquipos } from './equipos';


async function initApp() {
    //Mostrar formulario registro usuario
    const pantallaRegistro = new PantallaRegistro(document.querySelector('#registro'));
    const pantallaEquipos = new PantallaEquipos(document.querySelector('#equipos'));
    pantallaRegistro.show();
    pantallaEquipos.hide();
                
    //Una vez registrado, mostrar la pantalla de equipos
    pantallaRegistro.getCreatedUser().then(registeredUser => {
        // Guardar session storage
        sessionStorage.getItem('#registro');
        // Ocultar pantalla registro
        pantallaRegistro.hide();

        // Mostrar pantalla equipo
        pantallaEquipos.show();

        alert(registeredUser);
    });

    
}

initApp();
