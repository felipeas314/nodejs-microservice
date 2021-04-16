let ampq = require('amqplib/callback_api');

let QUEUE = 'email_queue';

ampq.connect('amqp://localhost:5672', function (err, conn) {
    conn.createChannel(function (err, ch) {
        // ch.assertQueue(QUEUE, { durable: false });

        ch.consume(QUEUE, function (msg) {
            console.log('mensagem recebida', msg.content.toString());
        }, { noAck: true });
    });
});