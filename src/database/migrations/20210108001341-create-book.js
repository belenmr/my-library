'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('books', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			title: {
				allowNull: false,
				type: Sequelize.TEXT
			},
			author: {
				allowNull: false,
				type: Sequelize.STRING
			},
			isbn: {
				allowNull: false,
				type: Sequelize.INTEGER
			},
			pages: {
				allowNull: false,
				type: Sequelize.INTEGER
			},
			category_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'categories',
					key: 'id',
					as: 'category_id'
				}
			},
			user_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				onDelete: 'CASCADE',
				references: {
					model: 'users',
					key: 'id',
					as: 'user_id'
				}
			},
			read: {
				allowNull: false,
				type: Sequelize.BOOLEAN,
				defaultValue: false
			},
			score: {
				type: Sequelize.INTEGER
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
			}
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('books');
	}
};