/***
var Users=[{name:"소녀시대",age:20},{name:"걸스데이",age:22},{name:"티아라",age:23},{name:"애프터스쿨",age:25}];
console.log("배열 요소의 수 :%d",Users.length);
console.log("원본 Users");
console.dir(Users);
var Users2=Users.slice(1,3);
console.log("slice로 잘라낸 후 Users2");
console.dir(Users2);
***/
/***
function Person(name,age)
{
  this.name=name;
  this.age=age;
}
Person.prototype.walk=function(speed)
{
  console.log(speed+"km의 속도로 걸어갑니다");
}
var person1=new Person("소녀시대",20);
var person2=new Person("티아라",30);

console.log(person1.name);
person1.walk(10);
***/
function Person(name,age,walk)
{
  this.name=name;
  this.age=age;
  this.walk=walk;
}

var person1=new Person("소녀시대",20,10);
var person2=new Person("티아라",30,15);

console.log(person1.name);
console.log(person1.walk);
