'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {

		await queryInterface.bulkInsert('rating_scale',
			[
				{ rating: 1 },
				{ rating: 2 },
				{ rating: 3 },
				{ rating: 4 },
				{ rating: 5 }
			], {});

	},

	down: async (queryInterface, Sequelize) => {

		await queryInterface.bulkDelete('rating_scale', null, {});

	}
};
