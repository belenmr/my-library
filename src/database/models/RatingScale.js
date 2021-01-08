'use strict';
const {
	Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class RatingScale extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	};
	RatingScale.init({
		rating: {
			type: DataTypes.INTEGER,
			allowNull: false,
			unique: true		
		}
	}, {
		sequelize,
		modelName: 'RatingScale',
		tableName: 'rating_scale',
		underscored: true
	});
	return RatingScale;
};