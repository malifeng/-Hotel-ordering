var Sequelize = require('sequelize'); 
var sequelize =require('./ModelHeader')();


var DishkeyModel = sequelize.define('dishkeys', {
	id: {type:Sequelize.BIGINT,primaryKey: true},
    dishid: Sequelize.BIGINT,
    dishkey: Sequelize.STRING
},{
		timestamps: false,
		//paranoid: true  //获取不到id的返回值
	});

module.exports = DishkeyModel;