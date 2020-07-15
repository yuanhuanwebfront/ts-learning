{
    function indentity(arg: number): number {
        return arg;
    }

    function indentityNew(arg: any): any {
        return arg;
    }

    indentity(2);
    indentityNew('3');

}
//  泛型写法
{
    function identity<T>(arg: T): T {
        return arg;
    }

    //  手动指定泛型类型
    let output = identity<string>('myString');
    console.log(output);
    //  自动表示泛型类型
    let info = identity('info');
    console.log(info);

}
//  泛型变量
{
    function logLength<T>(arg: T): T {
        //  console.log(arg.length);    //  error   T 没有 length  属性
        return arg;
    }

    logLength(1);

    //  假设我们的参数是数组
    function loggingLength<T>(arg: T[]): T[] {
        console.log(arg.length);
        return arg;
    }
    loggingLength(['1', '2', '3']);

}