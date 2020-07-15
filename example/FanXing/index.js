{
    function indentity(arg) {
        return arg;
    }
    function indentityNew(arg) {
        return arg;
    }
    indentity(2);
    indentityNew('3');
}
//  泛型写法
{
    function identity(arg) {
        return arg;
    }
    //  手动指定泛型类型
    var output = identity('myString');
    console.log(output);
    //  自动表示泛型类型
    var info = identity('info');
    console.log(info);
}
//  泛型变量
{
    function logLength(arg) {
        //  console.log(arg.length);    //  error   T 没有 length  属性
        return arg;
    }
    logLength(1);
    //  假设我们的参数是数组
    function loggingLength(arg) {
        console.log(arg.length);
        return arg;
    }
    loggingLength(['1', 2, 3]);
}
