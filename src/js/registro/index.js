const form = document.querySelector('form');
const div = document.getElementById('result');
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

            const user = {
                name: form.elements.1.value,
                email: form.elements.2.value,
                password: form.elements.3.value
            };
        
            div.innerHTML='';
        
            const response = await createUser(user);
            if(response.status){
                div.insertAdjacentHTML('beforeend', `
                <p>Name and surname: ${response.data.name}</p>
                <p>Email: ${response.data.email}</p>
                <p>Password: ${response.data.password}</p>`);
            }else{
                alert(response.data);
            }

            //Enviar formulario usando fetch a https://jsonplaceholder.typicode.com



            //Devolver usuario creado
        })
    }
}