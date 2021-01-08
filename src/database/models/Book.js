'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Book extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Book.belongsTo(models.Category, {
				as:'category',
				foreignKey:'categoryId'
			}),
			Book.belongsTo(models.User, {
				as: 'user',
				foreignKey:'userId'
			})
		}
	};
	Book.init({
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		title: {
			allowNull: false,
			type: DataTypes.TEXT
		},
		author: {
			allowNull: false,
			type: DataTypes.STRING
		},
		isbn: {
			allowNull: false,
			type: DataTypes.INTEGER
		},
		pages: {
			allowNull: false,
			type: DataTypes.INTEGER
		},
		categoryId: {
			allowNull: false,
			type: DataTypes.INTEGER
		},
		userId: {
			allowNull: false,
			type: DataTypes.INTEGER
		},
		read: {
			allowNull: false,
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		score: {
			type: DataTypes.INTEGER
		}
	}, {
		sequelize,
		modelName: 'Book',
		tableName: 'books',
		underscored: true
	});
	return Book;
};