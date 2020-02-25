document.write("환영합니다");

var tag="<h1>String</h1>";  //이런 식의 html 태크를 이용한 변수 설정도 가능하다.

var num1=15; var num2=25;
document.write(num1,"<br>"); //개행을 이렇게 document 속에 집어 넣을 수도 있다.
document.write(num2);

var str="<table border='1'>";    //tr,td 태그는 html에서 표를 만들기 위한 태그.
str+="<tr>";
str+="<td>1</td><td>2</td><td>3</td>";
str+="</tr>";
str+="</table>"
document.write(str);

var a=10;
var b=3;
var result=a>b?"javascript":"hello"; //삼항 조건 연산자 a>b가 참이면 javascript, 거짓이면 hello
document.write(result);

var name=prompt("당신의 이름은?",""); //prompt는 질문 창을 띄우는 명령어. 좌측이 질문 내용/우측이 아무 것도 입력 안했을 때 들어가는 기본 응답 입력창에도 기본적으로 뜨게 된다.
document.write(name);

var result=confirm("정말로 회원을 탈퇴하시겠습니까?");//confirm은 확인/취소 버튼이 있는 창을 띄운다. 확인을 누르게 되면 result에 true가 취소를 누르게 되면 result에 false가 들어가게 된다.

var id="easy1004";
var pw="112233";
var user_id=prompt("아이디는?","");
var user_pw=prompt("비밀번호는?","");
if(id==user_id)
{
    if(pw==user_pw)
    {
        document.write(user_id+"님 반갑습니다!");
    }
    else
    {
        alert("비밀번호가 일치하지 않습니다.");    //경고창을 출력시키는 법.
        location.reload(); //브라우저 새로고침
    }
}
else
{
    alert("아이디가 일치하지 않습니다.");
    location.reload();
}

location.href="http://www.naver.com"; //이거를 실행하게 되면 자동으로 네이버 화면으로 접속하게 된다.

//76쪽에 p tag를 달리하여 경우에 따라 다른 색깔의 text를 쓰도록 하는 경우를 체크하자.

Math.floor(Math.random()*31); //Math.random()은 0에서 1 사이의 랜덤한 실수를 만들어 낸다. 이 문장의 경우 0에서 30까지 정수로 난수를 발생시킨다.

//101쪽에 배열 객체의 함수들이 많은데 요상한 것들이 많아서 필요할 때 보고 써야 할듯.

//105쪽에 문자열 객체에서 사용하는 함수들.

//110쪽 이메일의 유효성 검사를 진행하는 예제

//115쪽 팝업창 만드는 예제(window.open()을 사용)

function sum(){
    var sum=0;
    for(var i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    document.write(sum);
}
sum(10,20,30);  //이런 식으로 매개변수가 존재하지 않는 함수를 만들었지만 매개변수를 넣어서 이 함수를 호출 할 수도 있다. 이때 지정하지 않은 매개변수들은 arguments 배열에 순서대로 자동 저장되게 된다.

//152쪽 아예 객체의 구성을 어떻게 하는지를 보여준다.