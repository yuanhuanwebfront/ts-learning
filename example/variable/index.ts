{
  //  布尔值
  let isDone: boolean = false;

  //   数字  
  let commonNum: number = 6;


  //   字符串
  let name:string = 'tom';
  let insertName = `my name is ${name}`; 



  //    数组   
  //    ts中的数组必须指定数组类型，且有两种指定方法,一种是元素类型后面加[],一种是数组泛型，Array<元素类型>
  let list:number[] = [1, 2, 3];            
  let list2:Array<number> = [1, 2, 3];

    
  
  //    元组
  //    表示一个已知元素数量和类型的数组，各元素的类型不必相同.
  let tupleArr: [string, number];
  tupleArr = ['tom', 25];  
  
  console.log(tupleArr[0].substr(1));
//   console.log(tupleArr[1].substr(1));    会报错，因为number不存在substr方法

}
