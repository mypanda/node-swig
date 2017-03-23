// 1，引入express
var express = require('express');

// 5,引入模板引擎
var swig = require('swig');

// 10，设置缓存减少
swig.setDefaults({cache:false});
// 2,创建server
var app = express();

// 6,这是试图引擎,第一个参数,view engine,第二个参数是模板的文件后缀
app.set('view engine','html');

// 7,设置视图文件夹,第一个参数固定，views,第二个参数是模板的路径
app.set('views','./views');

//8,引擎更改为swig,第一个参数是模板文件后缀，第二个参数是模板渲染的方法swig.renderFile
app.engine('html',swig.renderFile);

//4,get路由
app.get('/',function  (req,res,next) {

	//5,res.send(String);
	// res.send('ok');
	//9,res.render方法载入文件，传递数据,第一个参数是路由匹配的文件名，第二个参数是渲染的数据对象
	res.render('index',{
		books:[{
			id:1,
			name:'javascript权威指南'
		},{
			id:2,
			name:'php1200个实例'
		},{
			id:3,
			name:'nodejs入门指南'
		}]
	});
});

//3,监听端口8081
app.listen(8081);