//  接口的声明使用interface来声明
{
    function printLabel(labelObj) {
        console.log(labelObj.label);
    }
    var myObj = {
        label: '123'
    };
    printLabel(myObj);
}
//  接口里面的属性可以设置可选和非可选   使用？：来处理
{
    function createSquare(config) {
        var newSquare = {
            color: 'white',
            area: 0
        };
        if (config.color)
            newSquare.color = config.color;
        if (config.width)
            newSquare.area = config.width * config.width;
        console.log(newSquare);
        return newSquare;
    }
    createSquare({
        color: 'red'
    });
}
//  只读属性  使用readonly来标识属性
{
    var config = { x: 10, y: 20 };
    // config.x = 20;  can't change
    console.log(config);
}
//  函数也可以使用接口定义
{
    var mySearch = void 0;
    //  函数参数名没有必要一一匹配  但相同的参数格式必须相同
    mySearch = function (source, substring) {
        var result = source.search(substring);
        console.log(result);
        return result > 1;
    };
    mySearch('123456', '2');
}
//  接口实现
{
    var Clock = /** @class */ (function () {
        function Clock(h, m) {
        }
        Clock.prototype.setTime = function (d) {
            this.currentTime = d;
            console.log(this.currentTime);
        };
        return Clock;
    }());
    var myClock = new Clock(1, 2);
    myClock.setTime(new Date());
}
