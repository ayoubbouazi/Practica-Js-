import { PantallaRegistro } from './registro';

//Mostrar formulario registro usuario
const pantallaRegistro = new PantallaRegistro(document.querySelector('#registro'));
            //RegEx de formulario(validacion)
            const input = document.querySelectorAll('input');

            Array.from(input);
            const expresiones = {
                name: /^[A-Za-z ]+$/,
                surname: /^[A-Za-z ]+$/,
                email: /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
                password: /^[A-Za-z0-9]{5}$/,
            };
            
            const validacion = (expresion, inp, id) => {
                if (expresion.test(inp.value)) {
                    document.getElementById(`${id}`).classList.remove('formularioIncorrecto');
                    document.getElementById(`${id}`).classList.add('formularioCorrecto');
                } else {
                    document.getElementById(`${id}`).classList.add('formularioIncorrecto');
                    document.getElementById(`${id}`).classList.remove('formularioCorrecto');
                }
            };
            
            const inputs = document.querySelectorAll('.input');
            
            const validarFormulario = (e) => {
                switch (e.target.name)
                {
                case 'nombre':
                    validacion(expresiones.name, e.target, 1);
                    break;
                case 'nombre':
                    validacion(expresiones.name, e.target, 1);
                    break;    
                case 'email':
                    validacion(expresiones.email, e.target, 2);
                    break;
                case 'password':
                    validacion(expresiones.password, e.target, 3);
                    break;
                default:
                    break;
                }
            };
            
            inputs.forEach((e) => {
                e.addEventListener('keyup', validarFormulario);
                e.addEventListener('blur', validarFormulario);
            });

//Una vez registrado, mostrar la pantalla de equipos


//Mostrar pantalla de miEquipo