//変数
let unko = 'hello word!';

//unko = 'hello word2!';

//定数
const bigunko ='He...HeLLHello Word!';
//bigunko = 'hello word2!!';

//配列
let inoki = ['いーち','にー','さーん','だーー！！'];

//ループ文
let index = 0;
//while(index < inoki.length){//4
//くり返したい命令
//console.log(inoki[index]);
//index++; //index = 1
//}

//if / else
/*
if(inoki.length > 5){
  console.log('ボンバイエ！');
}else{
  console.log('bonnbaiii');
}
*/


//関数
const test = (arg) => {
  //ここに実行したい命令を書く
  if(inoki.length > arg){
  console.log('ボンバイエ！');
}else{
  console.log('bonnba');
}
};

test(6);

//オブジェクト
const unko2 = {
  color: 'pink',
  size:'large',
  purfume:'mint',
  gotoilet:() => {
    console.log('hello word!');
  }
};
window.alert('hi');


console.log(document.getElementsByName('button'));