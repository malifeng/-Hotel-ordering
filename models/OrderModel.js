
var Sequelize = require('sequelize'); 
var sequelize =require('./ModelHeader')();

var OrderModel = sequelize.define('orders', {
	id: {type:Sequelize.BIGINT,primaryKey: true},
    tableid: Sequelize.BIGINT,
    shopid: Sequelize.BIGINT,
    sumprice: Sequelize.DECIMAL,
    realprice: Sequelize.DECIMAL,
    state: Sequelize.INTEGER,
    updtime:Sequelize.DATE,
    createtime:Sequelize.DATE,
},{
		timestamps: false,
		//paranoid: true  //获取不到id的返回值
	});

module.exports = OrderModel;