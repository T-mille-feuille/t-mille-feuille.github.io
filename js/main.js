'use strict';
{
  // フィールドを表示
const main = document.querySelector('main');

// ゴールキーパー表示
const keeperArea = document.getElementById('sample1');
const keeper = document.createElement('img');
keeper.src = 'img/goalkeepercenter.jpeg';
keeper.classList.add('keeper');
keeperArea.appendChild(keeper);

const keeper2 = document.createElement('img');
keeper2.src = 'img/goalkeepercenter.jpeg';
keeper2.classList.add('keeper');
keeperArea.appendChild(keeper2);

const keeper3 = document.createElement('img');
keeper3.src = 'img/goalkeepercenter.jpeg';
keeper3.classList.add('keeper');
keeperArea.appendChild(keeper3);

// ボールエリア表示
 const ballArea = document.getElementById('sample2');
 const ball = document.createElement('img');
 ball.src = 'img/soccerball.jpg';
 ball.classList.add('ball');
 ballArea.appendChild(ball); 

// スコア表表示・更新
 const tr = document.getElementById('score');
 const tr2 = document.getElementById('score2');
 const scorenum = document.getElementById('scorenum');
 const scorenum2 = document.getElementById('scorenum2');
 let num = 0;
 let num2 = 0;
 scorenum.textContent = num;
 scorenum2.textContent = num2;
 
//  NEXTボタンを押した回数を数える
 let bnum = 0;

 function countClick(){
   bnum++;
   console.log(bnum);
 }

 let GameStop = 'continue??';

//  function replayGame(){
//    confirm(GameStop);

//  }

 // スコア表記載のマーク
 const res = ['〇','✕'];
 const overRay = document.querySelector('p');

//  勝敗結果を出すメソッド
function GameOver(){
  overRay.textContent = "Game Set!";
  main.appendChild(overRay);
  next.classList.add('inactive');
  replayGame(GameStop);
}

 //プレイヤー1に対し”〇✕”を作成し数えるメソッド
 function countScore(){
   const td = document.createElement('td');
   td.classList.add('td');
   if(overRay.textContent ==='GOAL!!'){
     td.textContent = res[0];
     num++;
     scorenum.textContent =num;
   }else{
    td.textContent = res[1];
   }
    tr.appendChild(td);

    if(num - num2 >= 2 || num2 - num >= 2){
      GameOver();
      return;
    }
  }

//プレイヤー2に対し”〇✕”を作成し数えるメソッド
 function countScore2(){
   const td2 = document.createElement('td');
   td2.classList.add('td');
   if(overRay.textContent ==='GOAL!!'){
     td2.textContent = res[0];
     num2++;
     scorenum2.textContent = num2;
   }else{
    td2.textContent = res[1];
   }
    tr2.appendChild(td2);

    if(num - num2 >= 2 || num2 - num >= 2){
      GameOver();
      return;
    }
    }

// ゴールキーパーの動作メソッド
 function save(){
   let min = 1;
   let max = 6;
   let a = Math.floor( Math.random() * (max + 1 - min) ) + min ;
   if(a <= 2){
     keeper.classList.add('active')
   } else if(a <= 4){
     keeper2.classList.add('active')
   } else{
     keeper3.classList.add('active')
   }
  }

  // フィールドに文字列で結果表示しスコア表更新メソッド
  function result(){
    overRay.classList.remove('overray');
    if(keeper.classList.contains('active') && ball.className === 'left'){
      overRay.textContent = 'SUPERSAVE!'
      main.appendChild(overRay);
    }else{
      overRay.textContent = 'GOAL!!'
      main.appendChild(overRay);
    }
    next.classList.remove('inactive');

    if(bnum % 2 === 0){
      countScore();
    }else if(bnum % 2 !== 0){
      countScore2();
    }
  }

  function result2(){
    overRay.classList.remove('overray');
    if(keeper2.classList.contains('active') && ball.className === 'center'){
      overRay.textContent = 'SUPERSAVE!'
      main.appendChild(overRay);
    }else{
      overRay.textContent = 'GOAL!!';
      main.appendChild(overRay);
    }
    next.classList.remove('inactive');

    if(bnum % 2 === 0){
      countScore();
    }else if(bnum % 2 !== 0){
      countScore2();
    }
  }

  function result3(){
    overRay.classList.remove('overray');
    if(keeper3.classList.contains('active') && ball.className === 'right'){
      overRay.textContent = 'SUPERSAVE!'
      main.appendChild(overRay);
    }else{
      overRay.textContent = 'GOAL!!';
      main.appendChild(overRay);
    }
    next.classList.remove('inactive');

    if(bnum % 2 === 0){
      countScore();
    }else if(bnum % 2 !== 0){
      countScore2();
    }
  }

 // キーパー、ボール、ボタンを初期値に戻す
  function reset(){
    if(left.classList.contains('inactive')){
      left.classList.remove('inactive');
    }
    if(center.classList.contains('inactive')){
      center.classList.remove('inactive');
    }
    if(right.classList.contains('inactive')){
      right.classList.remove('inactive');
    }

    if(keeper.classList.contains('active')){
      keeper.classList.remove('active');
    }
    if(keeper2.classList.contains('active')){
      keeper2.classList.remove('active');
    }
    if(keeper3.classList.contains('active')){
      keeper3.classList.remove('active');
    }
    overRay.classList.add('overray');
    ball.className = 'ball';
    next.classList.add('inactive');
  }

  let stopButton = false;

  // 左ボタンの動作
  const left = document.getElementById('left');
  left.addEventListener('click',()=>{
    if(left.classList.contains('inactive')){
      return;
    }
    ball.className = 'left';
    center.classList.add('inactive');
    right.classList.add('inactive');
    save();
    setTimeout(result,1500);
  });
  
// 中央ボタンの動作
const center = document.getElementById('center');
  center.addEventListener('click',()=>{
    if(center.classList.contains('inactive')){
      return ;
    }
   ball.className = 'center';
   left.classList.add('inactive');
   right.classList.add('inactive');
   save();
   setTimeout(result2,1500);
   
  });

  // 右ボタンの動作
  const right = document.getElementById('right');
  right.addEventListener('click',()=>{
    if(right.classList.contains('inactive')){
      return ;
    }
    ball.className = 'right';
   left.classList.add('inactive');
   center.classList.add('inactive');
   save();
   setTimeout(result3,1500);
  });
  
  // NEXTボタンの動作
  const next = document.getElementById('next');
  next.classList.add('inactive');
  next.addEventListener('click',()=>{
    if(next.classList.contains('inactive')){
      return;
    }
    reset();
   countClick(bnum);       
  });
}