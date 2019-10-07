const http = require('http');
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const static = require('serve-static');

app.set('port', 3000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// static 미들웨어 등록
app.use('/public', static(path.join(__dirname, 'public')));

/// --------------------------------- 함수 선언 부분
const CAR_LIST = [
    {name:'Sonata', price:3000, company:'HYNDAI', year:2017},
    {name:'BMW', price:3000, company:'BMW', year:2017},
    {name:'SM6', price:3000, company:'SAMSUNG', year:2017},
    {name:'K7', price:3000, company:'KIA', year:2017}
];

function getCarList() {
    return CAR_LIST;
}

function insertCarList(name, price, company, year, callback) {
    CAR_LIST.push({name:name, price:price, company:company, year:year});
    
    callback(null, 'ok');
}

/// --------------------------------- router 설정
router.route('/').get(function(req, res) {
    res.end('<h1>Home page</h1>');
});

router.route('/car/list').get(function(req, res) {
    console.log('/car/list 요청 됨.');
    let carlist = getCarList();
    
    req.app.render('car_list', {'list':carlist}, function(err, html) {
        if(err) {
            console.log('view 엔진 렌더링 에러!');
            throw err;
        }
        res.end(html);
    });
});

router.route('/car/input').get(function(req, res) {
    console.log('/car-input 요청됨');
    var name = req.query.name;
    var price = req.query.price;
    var company = req.query.company;
    var year = req.query.year;
    
    insertCarList(name, price, company, year, function(err, status) {
        if(status == 'ok') {
            console.log('car list 입력 완료!');
            res.redirect('/car/list');
        }
    });
    // res.end('/car-input');
});

app.use('/', router);
const server = http.createServer(app);
server.listen(app.get('port'), function() {
    console.log('http://localhost:%d', app.get('port'));
});