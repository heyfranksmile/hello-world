const http = require('http');
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

app.set('port', 3000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

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

app.use('/', router);
const server = http.createServer(app);
server.listen(app.get('port'), function() {
    console.log('http://localhost:%d', app.get('port'));
});