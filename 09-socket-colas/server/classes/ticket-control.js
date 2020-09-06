const fs = require('fs');

class TicketControl {

    constructor() {
        this.ultimo = 0;
        this.hoy = new Date().getDate();
        const data = require('../data/data.json');

        if (data.hoy === this.hoy) {
            this.ultimo = data.ultimo;
        } else {
            this.reiniciarConteo();
        }
    }

    siguienteTicket = () => {
        this.ultimo += 1;
        this.grabarArchivo();
        return `Ticket ${this.ultimo}`;
    }

    getUltimoTicket = () => {
        return `Ticket ${this.ultimo}`;
    }

    reiniciarConteo = () => {
        this.ultimo = 0;
        this.grabarArchivo();
    }

    grabarArchivo = () => {
        const jsonData = {
            "ultimo": this.ultimo,
            "hoy": this.hoy
        };
        const jsonDataString = JSON.stringify(jsonData);
        fs.writeFileSync('./server/data/data.json', jsonDataString);
    }

}

module.exports = {
    TicketControl
}