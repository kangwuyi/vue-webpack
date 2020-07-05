/*
 * 微型服务器
 */

let express = require('express');
let ejs = require('ejs');
let bodyParser = require('body-parser');
let axios = require('axios');
let path = require('path');
let fs = require('fs');
let app = express();
//app.use('/static', express.static(__dirname + '/dist')); // static 虚拟的静态目录
app.use(express.static(__dirname + '/dist'));

const doMode = process.env.NODE_ENV !== 'production' ? 'development' : 'production';
const doDev = process.env.NODE_ENV !== 'production';

const jsonParser = bodyParser.json();

app.engine('html', ejs.__express);
app.set('view engine', 'html');

app.set('views', __dirname + '/dist'); // 设置模板的目录

//let data = require('./analogdata');

app.get('/', (req, res) => {
    res.render('./index', {
        title: '主页'
    });
});
app.get('/disease/footer_recommend',(req, res) => {
    axios.get('http://apiv2.chujingyi.cn/v2/disease/footer_recommend').then((reqData) => {
        return res.send(reqData.data);
    });
});
app.get('/home/best_hospital',jsonParser,(req, res) => {
    axios.get('http://apiv2.chujingyi.cn/v2/home/best_hospital').then((reqData) => {
        return res.send(reqData.data);
    });
});
app.get('/body_parts/all',jsonParser,(req, res) => {
    axios.get('http://apiv2.chujingyi.cn/v2/body_parts/all').then((reqData) => {
        return res.send(reqData.data);
    });
});
app.get('/hospital/search_filters',jsonParser,(req, res) => {
    axios.get('http://apiv2.chujingyi.cn/v2/hospital/search_filters').then((reqData) => {
        return res.send(reqData.data);
    });
});
app.get('/v2/hospital/list',jsonParser,(req, res) => {
    axios.get('http://apiv2.chujingyi.cn/v2/hospital/list?' +
        Object.keys(req.query)[0] + '=' + Object.values(req.query)[0]
        + '&' + Object.keys(req.query)[1] + '=' + Object.values(req.query)[1]
        + '&'+Object.keys(req.query)[2]+'=' + Object.values(req.query)[2]).then((reqData) => {
        return res.send(reqData.data);
    });
});
app.listen(3000); // 监听3000端口