var express = require('express');
const schedule = require('node-schedule');
var cors = require('cors');
const {getTicketEvents} = require('./models/event_ticket');

var app = express();
app.use(cors());

const port = 8080

app.get('/ticketHis/:index', function(req, res) {
	const ticketIndex = req.params.index;
	

	//console.log("index = ", ticketIndex);
	let ab = getTicketEvents(ticketIndex).then(resq=>{
		//console.log("events = ", resq);
		const infoList = resq.map(element => 'block height: ' + element.block_num +'. info: ' + element.info)
		res.json(infoList);
	});
    //const data = require('./data.json'); 
    //res.json(events);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

//https://bezkoder.com/node-js-rest-api-express-mysql/