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

            //Enviar formulario usando fetch a https://jsonplaceholder.typicode.com

            //Devolver usuario creado
        })
    }
}