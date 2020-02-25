
let userScore=0; //값이 변하지 않는 변수는 const로, 값이 변하게 되는 변수는 let으로 설정해주는 것이 좋다.
let computerScore=0;
const userScore_span=document.getElementById("user-score"); 
//user-score의 id를 연동
const computerScore_span=document.getElementById("computer-score");
//이런 식으로 변수명을 설정할 때 맨 뒤에 어떤 태그에 이 변수가 만들어져있는지 명시하는 것을 좋은 습관이다.
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".results>p");//results 클래스의 p태그
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s"); 
const button_div=document.getElementById("button");

function getComputerChoice(){
    const choices=['r','p','s'];
    const randomNumber=Math.floor(Math.random()*3); //Math.random()은 0부터 1사이의 실수를 발생시킨다.
    return choices[randomNumber];
}//Math.floor까지 붙이게 되면 0~2까지의 정수만 출력되게 된다.

function convertToWord(letter){
    if(letter==='r') return "Rock";
    else if(letter==='s') return "Scissor";
    else if(letter==='p') return "Paper";
}
function win(user, computer){
    userScore++;
    userScore_span.innerHTML=userScore; //span태그로 된 userScore의 0값을 계속 동기화시켜준다!
    computerScore_span.innerHTML=computerScore;
    const smallUserWord="user".fontsize(3).sup();//sup을 통해 작아진 글씨가 위쪽에 달리게 된다.
    const smallCompWord="comp".fontsize(3).sub();//sub을 통해 작아진 글씨가 아래쪽에 달리게 된다.
    result_p.innerHTML=convertToWord(user)+smallUserWord+" beats "+convertToWord(computer)+smallCompWord+" You Win!";
    document.getElementById(user).classList.add('green-glow'); //user값을 가지는 id에 대해 새로운 css 함수를 적용하는 방법
    setTimeout(function() {document.getElementById(user).classList.remove('green-glow')},1000); //1000miliseconds(1초) 이후에 방금 적용했던 green-glow css를 삭제하겠다.
}

function lose(user, computer){
    computerScore++;
    userScore_span.innerHTML=userScore; //span태그로 된 userScore의 0값을 계속 동기화시켜준다!
    computerScore_span.innerHTML=computerScore;
    const smallUserWord="user".fontsize(3).sup();//sup을 통해 작아진 글씨가 위쪽에 달리게 된다.
    const smallCompWord="comp".fontsize(3).sub();//sub을 통해 작아진 글씨가 아래쪽에 달리게 된다.
    result_p.innerHTML=convertToWord(user)+smallUserWord+" beats "+convertToWord(computer)+smallCompWord+" You Lost!";
    document.getElementById(user).classList.add('red-glow'); //user값을 가지는 id에 대해 새로운 css 함수를 적용하는 방법
    setTimeout(function() {document.getElementById(user).classList.remove('red-glow')},1000); //1000miliseconds(1초) 이후에 방금 적용했던 red-glow css를 삭제하겠다.
    
}

function draw(user, computer){
    const smallUserWord="user".fontsize(3).sup();//sup을 통해 작아진 글씨가 위쪽에 달리게 된다.
    const smallCompWord="comp".fontsize(3).sub();//sub을 통해 작아진 글씨가 아래쪽에 달리게 된다.
    result_p.innerHTML=convertToWord(user)+smallUserWord+" beats "+convertToWord(computer)+smallCompWord+" Draw!";
    document.getElementById(user).classList.add('gray-glow'); //user값을 가지는 id에 대해 새로운 css 함수를 적용하는 방법
    setTimeout(function() {document.getElementById(user).classList.remove('gray-glow')},1000); //1000miliseconds(1초) 이후에 방금 적용했던 gray-glow css를 삭제하겠다.
}

function reset(){
    userScore_span.innerHTML=0;
    computerScore_span.innerHTML=0;
    userScore=0;
    computerScore=0;
    result_p.innerHTML="Reset!";
}
function game(userChoice){
    const computerChoice=getComputerChoice();
    var answer=userChoice+computerChoice;
    if(answer==='rs'||answer==='pr'||answer==='sp') //JavaScript의 비교연산자는 등호 3개
    win(userChoice, computerChoice);
    else if(answer==='rp'||answer==='ps'||answer==='sr')
    lose(userChoice, computerChoice);
    else if(answer==='rr'||answer==='ss'||answer==='pp')
    draw(userChoice, computerChoice);
    else
    reset();
}

function main(){
    rock_div.addEventListener('click', function(){
        game('r'); //주먹 그림을 누르는 순간 game('r')실행
    })
    
    paper_div.addEventListener('click', function(){
        game('p');//보자기 그림을 누르는 순간 game('p')실행
    })
    
    scissor_div.addEventListener('click', function(){
        game('s');//가위 그림을 누르는 순간 game('s')실행
    })

    button_div.addEventListener('click', function(){
        game('t');
    })
}

main();
