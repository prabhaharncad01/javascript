console.log("welcome to javascript")
console.log(10)
console.log(10.10)
console.log({fname:"prabaharan",gender:"male"})
console.table({fname:"prabaharan",gender:"male"})
console.log([5,10,2,41,24])

var a=10;
let b=7;
const c=9;
console.log(a);
console.log(b);
console.log(c);

 a=5;
console.log(a);
b=6;
console.log(b);
console.log(c);

a="prabha"
console.log(a);

a={fname:"prabaharan",gender:"male"};
console.log(a);
console.table(a);

a=20;
console.log(typeof a);
a=a.toString();
console.log(typeof a);


a=parseInt(a);
console.log(typeof a);
console.log(a);

a=10.25
a=parseFloat(a);
console.log(typeof a);

a ="10"
b ="20"

a=a+b;
console.log(a);

const f={fname:"praba",age:29}
console.log(f,typeof f);
f.fname="mani";
console.log(f,typeof f);

let v1=50;
let v2=20;

//addtion

console.log(v1+v2);

//subraction
console.log(v1-v2);
//multiplication
console.log(v1*v2);
//division
console.log(v1/v2);
//modulus
console.log(v1%v2);
//Expo
console.log(v1**v2);
//incrment
v1=++v1;
console.log(v1);
//decrement
v1=--v1;
console.log(v1);
//assignment
v1=25;
console.log(v1);

v1+=20;
console.log(v1);

v1-=20;
console.log(v1);

v1*=20;
console.log(v1);

v1/=20;
console.log(v1);

v1%=20;
console.log(v1);
//comparision operator
console.log(v1==5);
console.log(v1==="5", typeof v1);

console.log(v1!==1);
console.log(v1==="5", typeof v1);


//realtion operator
console.log(v1>1);
console.log(v1<1);
console.log(v1>=5);
console.log(v1<=10);

// logical operator

v1="s";
console.log(v1==5||v1<2||v1>5);
console.log(v1=="s");
console.log(!(v1=="s"));

//ternary operator

//condition? statement1:statement2;
a1="praba"
console.log(a1);
var output=a1=="praba"? "a1 has value":"a1 has no value";
console.log(output);

function findgrade()
{
    m=96;
    var mark= (35<m && m<60)? "grade c":(60<=m && m<80)? "grade b":(80<=m && m<90)? "grade a":(90<m && m<100)? "grade distinction":"fail";
    console.log(mark);
}
findgrade()

function findgrade(m,k)
{
    m=96;
    var mark= (35<m && m<60)? "grade c":(60<=m && m<80)? "grade b":(80<=m && m<90)? "grade a":(90<m && m<100)? "grade distinction":"fail";
    console.log(k,mark);
}
findgrade(56,"praba")


var  findgrade2=(m,k)=>{


    var mark= (35<m && m<60)? "grade c":(60<=m && m<80)? "grade b":(80<=m && m<90)? "grade a":(90<m && m<100)? "grade distinction":"fail";
    console.log(k,mark);
}
console.log(findgrade2(80,"praba"));



function checkgrade(){
    console.log("welcome");
    console.log("just trying");
}

var checkgrade1=(a,b)=>{
    console.log(a+b);
    return a+b;
};


checkgrade();
console.log("added value",checkgrade1(1,2))


function gradechecking(m)
{
    if (35>m && m!=null)
    {
        console.log("no grade");
        console.log("fail");
    }
    else{
        if(35<m && m!=null && m<=60){
            console.log("pass");
            console.log("grade c");

        }
        else if(60<m && m!=null && m<=80){
            console.log("pass");
            console.log("grade b");

        }
        else if(80<m && m!=null && m<=100){
            console.log("pass");
            console.log("grade a");
        }
        else{
            gradechecking(prompt("enter mark"));
        
         }
       
}
}

gradechecking();


let day;
switch(new Date().getDay())
{
    case  0:
        day="sunday";
        break;

        case  1:
        day="monday";
        break;

        case  2:
        day="tuesday";
        break;

        case  3:
        day="wednesday";
        break;

        case  4:
        day="thusday";
        break;

        case  5:
        day="friday";
        break;

        case  6:
        day="saturday";
     
}
document.getElementById("demo").innerHTML="today is " + day;


function checkingswitch(a)
{
switch(a)
{
    case '1':
    console.log("case 1excecuted",a);
      break;
    case 'p':
    console.log("case p excecuted",a);
    break;
    case 'l':
    console.log("case  l excecuted",a);
    break;
    default:
        console.log("no cases");
}

}
checkingswitch(prompt("enter the case you want"));







function checkingswitchstmt(a)
{
    var a1,b1;
    a1=prompt("enter a1 ");
    b1=prompt("enter b1 ");
    a1=Number(a1);
    b1=Number(b1);
switch(a)
{
    case "add":
        console.log("the addition of numbers",a1,"and",b1,"is",a1+b1);
        break;
    case "mul":
        console.log("the multipication of numbers",a1,"and",b1,"is",a1*b1);
        break;
    case "sub":
        console.log("the subraction of numbers",a1,"and",b1,"is",a1-b1);
        break;
    case "div":
        console.log("the divition of numbers",a1,"and",b1,"is",a1/b1);
        break;
        default:
            alert("case not found");
}

}
checkingswitchstmt(prompt("enter the case "));
function operator(a)
{

var box1=document.getElementById("v1").value;
var box2=document.getElementById("v2").value;

 box1=Number(box1);
box2=Number(box2);

switch(a)
{
case '+':
    document.getElementById("result").innerHTML=box1+box2;
    break;

case '-':

    document.getElementById("result").innerHTML=box1-box2;
    break;

case '*':

    document.getElementById("result").innerHTML=box1*box2;
    break;

case '/':

    document.getElementById("result").innerHTML=box1/box2;
    break;

}

}



