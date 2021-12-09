export async function logos(){
    try {
        const response = await fetch('https://v3.football.api-sports.io/teams?league=140&season=2020&country=spain', {
            method: "GET",
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": key,
            },
        });

    const key = "a81bb8cf171f80335b118555c6538428";
    const div = document.getElementById('result');

    const logosEquipos = async () => {
        const data = await response.json();

        data.response.forEach(function (valor) {
            console.log(valor.team.name);
            let idEquipo = valor.team.id;
                div.insertAdjacentHTML('beforeend', 
                <img src="https://media.api-sports.io/football/teams/${idEquipo}.png">
                <p>${valor.team.name}</p></img>
            )
        });

    } catch (error) {
        console.log(error);
    }
    logosEquipos();
}