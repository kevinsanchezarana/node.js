const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');

const ticketControl = new TicketControl();

io.on('connection', (client) => {

    client.on('siguienteTicket', (data, callback) => {
        const siguienteTicket = ticketControl.siguienteTicket();
        callback(siguienteTicket);
    });

    client.emit('estadoActual', { actual: ticketControl.getUltimoTicket() });

});