'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('categories', [
			{
				name: 'cuentos'
			},
			{
				name: 'novelas'
			},
			{
				name: 'ensayos'
			}
		], {});
	},

	down: async (queryInterface, Sequelize) => {		
		await queryInterface.bulkDelete('categories', null, {});		 
	}
};
