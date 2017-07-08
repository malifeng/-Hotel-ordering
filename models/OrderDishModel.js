var Sequelize = require('sequelize'); 
var sequelize =require('./ModelHeader')();

var OrderDishModel = sequelize.define('orderdishes', {
	id: {type:Sequelize.BIGINT,primaryKey: true},
    orderid: Sequelize.BIGINT,
    dishid: Sequelize.BIGINT,
    tableid: Sequelize.BIGINT,
    num: Sequelize.INTEGER,
    state: Sequelize.INTEGER,
    remark: Sequelize.STRING,
    updtime: Sequelize.DATE,
    createtime:Sequelize.DATE
},{
		timestamps: false,
		//paranoid: true  //获取不到id的返回值
	});

module.exports = OrderDishModel;