var router = require('koa-router')();
var sequelize =require('../models/ModelHeader')();
var OrderModel = require('../models/OrderModel');
var OrderDishModel = require('../models/OrderDishModel');

router.get('/getDishForKeys', async function (ctx, next) {
  let loginbean = ctx.session.loginbean;
  if(typeof(loginbean.shoprole)!='undefined'){
  	  let dishkey = ctx.query.dishkey;

  	  let sql = 'select d.id,d.dishname,d.price from dishkeys dk,dishes d where dk.dishkey=? and dk.dishid=d.id';
      let dishRs = await sequelize.query(sql,{replacements: [dishkey]});
      ctx.body=dishRs[0];
	  
  }else{
  	ctx.body=[];
  }
})

router.get('/newDishMenu', async function (ctx, next) {
  let loginbean = ctx.session.loginbean;
  if(typeof(loginbean.shoprole)!='undefined'){
      let t = await sequelize.transaction();
      try{
        let order={
          tableid:ctx.query.tableid,
          shopid:loginbean.shopid,
          sumprice:ctx.query.price*ctx.query.num,
          realprice:0,
          createtime:new Date(),
        };
        let rs1 = await OrderModel.create(order, {transaction: t});
        let orderid = rs1.null;
        let orderDish={
          orderid:orderid,
          tableid:ctx.query.tableid,
          dishid:ctx.query.dishid,
          num:ctx.query.num,
          remark:ctx.query.remark,
          createtime:new Date(),
        };
        let rs2 = await OrderDishModel.create(orderDish, {transaction: t});
        t.commit();
       }catch(err){
        console.log(err);
        t.rollback();
        ctx.body='插入失败';
        return;
       }
       ctx.body='插入成功';
  }
})
module.exports = router;
