import { Pantalla } from '../Pantalla';
import { getPlayers, getTeams } from './api';

export class PantallaEquipos extends Pantalla {
    constructor(pantallaEquipos) {
        super(pantallaEquipos);
        this.columnas = this.pantalla.querySelectorAll('.columna');

        this.showTeams();
        
    }

    async showTeams() {
        // Recuperar equipos
        const teams = await getTeams();
        
        // Renderizar nombre y logo columna izquierda
        const teamsListElement = this.columnas[0].querySelector('ul');
        teamsListElement.innerHTML = '';

        teams.forEach(teamInfo => {
            const teamElement = document.createElement('li');
            teamElement.id = teamInfo.team.id;

            // Creamos nombre
            const teamNameElement = document.createElement('h4');
            teamNameElement.innerText = teamInfo.team.name;
            teamElement.appendChild(teamNameElement);

            // Creamos logo
            const teamLogoElement = document.createElement('img');
            teamLogoElement.src = teamInfo.team.logo;
            teamElement.appendChild(teamLogoElement);

            teamsListElement.appendChild(teamElement);
        });

        // Escuchar evento click
        teamsListElement.addEventListener('click', (event) => {
            const teamElement = event.target.matches('li') ? event.target : event.target.closest('li');

            // Mostrar jugadores equipo columna central
             this.showTeamPlayers(teamElement.id);
        });
    }

    async showTeamPlayers(team) {
        // Recuperar informacion player
        const players = await getPlayers(team);

        // Renderizar jugadores del equipo

        const playersListElement = this.columnas[1].querySelector('ul');
        playersListElement.innerHTML = '';

        players.forEach(playerInfo => {
            const playerElement = document.createElement('li');
            playerElement.id = playerInfo.player.id;

            // Creamos nombre
            const playerNameElement = document.createElement('h4');
            playerNameElement.innerText = playerInfo.player.name;
            playerElement.appendChild(playerNameElement);

               // Creamos photo
               const playerPhotoElement = document.createElement('img');
               playerPhotoElement.src = playerInfo.player.photo;
               playerElement.appendChild(playerPhotoElement);
   
               playersListElement.appendChild(playerElement);
        });
        // Escuchar evento click
        teamsListElement.addEventListener('click', (event) => {
            const playerElement = event.target.matches('li') ? event.target : event.target.closest('li');
        // Mostrar informacion jugar columna derecha
        this.showTeamPlayers(playerElement.id);
    });
    }

    showPlayerInfo(id) {
        // Recuperar informacion equipo
        const player = await getPlayers(id);

        // Renderizar jugadores del equipo

        const playerListElement = this.columnas[2].querySelector('ul');
        playerListElement.innerHTML = '';

        player.forEach(playerInfo => {
            const playerElement = document.createElement('p');
            playerElement.id = playerInfo.player.id;

            // Creamos nombre
            const playerNameElement = document.createElement('h4');
            playerNameElement.innerText = playerInfo.player.name;
            playerElement.appendChild(playerNameElement);

               // Creamos photo
               const playerPhotoElement = document.createElement('img');
               playerPhotoElement.src = playerInfo.player.photo;
               playerElement.appendChild(playerPhotoElement);
   
               playersListElement.appendChild(playerElement);
        });
    }
}