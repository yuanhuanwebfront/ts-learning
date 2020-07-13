//  接口的声明使用interface来声明
{
    interface labelValue {
        label: string
    }

    function printLabel(labelObj:labelValue){
        console.log(labelObj.label);
    }

    let myObj = {
        label: '123'
    }
    printLabel(myObj);
}
//  接口里面的属性可以设置可选和非可选   使用？：来处理
{

    interface SquareConfig {
        color?: string;
        width?: number;
    }

    function createSquare(config: SquareConfig): {color: string; area: number}{

        let newSquare = {
            color: 'white',
            area: 0
        }

        if(config.color) newSquare.color = config.color;
        if(config.width) newSquare.area = config.width * config.width;

        console.log(newSquare);

        return newSquare;
    }

    createSquare({
        color: 'red',
        // width: 10
    })

}
//  只读属性  使用readonly来标识属性
{
    interface readOnlyInterface{
        readonly x:number;
        readonly y:number
    }

    let config:readOnlyInterface = {x: 10, y: 20};

    // config.x = 20;  can't change
    console.log(config);
}
//  函数也可以使用接口定义
{
    interface fnConfig{
        (source:string, substring:string):boolean;
    }

    let mySearch:fnConfig;
    //  函数参数名没有必要一一匹配  但相同的参数格式必须相同
    mySearch = function(source:string, substring:string) {
        let result = source.search(substring);
        console.log(result);
        return result > 1;
    };

    mySearch('123456', '2');
}
//  接口实现
{
    interface ClockInterface{
        currentTime: Date;
        setTime(d:Date);
    }

    class Clock implements ClockInterface {
        currentTime: Date;
        setTime(d: Date) {
            this.currentTime = d;
            console.log(this.currentTime);
        }
        constructor(h:number, m:number) {
        }
    }

    let myClock = new Clock(1, 2);
    myClock.setTime(new Date());
}
//  接口继承
{

    interface Shape{
        color:string
    }
    interface PenStroke{
        penWidth:number;
    }
    interface Square extends Shape, PenStroke{
        sideLength:number;
    }

    let square = <Square>{};
    square.color = 'red';
    square.penWidth = 10;
    square.sideLength = 20;

}

