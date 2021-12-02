const expresiones = {
    name: /^[A-Za-z ]+$/,
    surname: /^[A-Za-z ]+$/,
    email: /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
    password: /^[A-Za-z0-9]{5}$/,
};

const isValid = (expresion, inp, id) => {
    if (expresion.test(inp.value)) {
        return true;
    } else {
        return false;
    }
};

export function validateInput(input) {
    switch (input.name) {
        case 'nombre':
            return isValid(expresiones.name, input, 1);
        case 'email':
            return isValid(expresiones.email, input, 2);
        case 'password':
            return isValid(expresiones.password, input, 3);
        default:
            return false;
    }
}