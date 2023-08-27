const knex = require('../db/db');

const Figuritas = {

    // crud
    getAll() {
        return knex.select().from('figurita');
    },

    update(id, figurita) {
        return knex('figurita').where({ id }).update(figurita);
    },

    // reports
    getMissed() {
        return knex('figurita').where('la_tengo',false);
    },

    getRepeted() {
        return knex('figurita').where('cantidad', '>', 0);
    },
  
};

module.exports = Figuritas;