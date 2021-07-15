const sq  = require('../config/sequelize');
const Sequelize = require('sequelize');
var TicketEvent = sq.define(
    'ticket_event',
    {
        id: {
            type: Sequelize.BIGINT(32),
            primaryKey: true,
            autoIncrement: true
        },
        method: Sequelize.STRING(128),
        section: Sequelize.STRING(128),
        ticket_index: Sequelize.STRING(128),
        ticket_hash: Sequelize.STRING(64),
        extrinsic_hash: Sequelize.STRING(128),
        block_hash: Sequelize.STRING(128),
        block_num: Sequelize.STRING(128),
        info:  Sequelize.STRING(512)  
    }, 
    {
        timestamps: false
    },
    {
        tableName: 'ticket_event'
    }
);
////

async function getTicketEvents(index)
{
    const events = await findTicketEvent(index);
    //console.log("getTicketEvents ", events);
    return events;
}


async function findTicketEvent (index)
{
    var events = await TicketEvent.findAll({
        where: {
            ticket_index: index 
        }
    });
    //console.log("findTicketEvent: ", events);
    return events;
}

module.exports ={
    findTicketEvent,getTicketEvents
};