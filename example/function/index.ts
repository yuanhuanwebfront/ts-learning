//  为函数添加返回值类型
{
    function add(x:number, y:number):number {
        return x + y;
    }
}

{
    let myAdd: (x: number, y: number) => number = function(x: number, y: number): number {
        return x + y;
    };

    console.log(myAdd(1, 2));
}

//  可选参数和默认参数
{
    function buildName(firstName:string, lastName:string){
        return firstName + ' ' + lastName;
    }

    //  let result1 = buildName('first');   error   必须需要两个参数

    //  使用?来添加可选参数
    function buildNameWithSelectParams(firstName:string, lastName?:string){
        return firstName + ' ' + lastName;
    }

    let result = buildNameWithSelectParams('first');
    console.log(result);

}
