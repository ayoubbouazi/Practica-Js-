export class PantallaRegistro {
    constructor(pantallaRegistro){
        this.pantallaRegistro = pantallaRegistro;
        this.formulario = this.pantallaRegistro.querySelector('form');
        this.registrarListeners();
    }

    registrarListeners(){
        this.formulario.addEventListener('submit', (event) => {
            event.preventDefault();

            //Recuperar campos formulario

            //RegEx de formulario(validacion)
            const expresiones = {
                name: /^[A-Za-z ]+$/,
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

            

            //Enviar formulario usando fetch a https://jsonplaceholder.typicode.com

            //Devolver usuario creado
        })
    }
}