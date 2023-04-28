/*클릭 이벤트 연결하기*/
const link=document.querySelector("a");

link.addEventListener("click", (e)=>{
  e.preventDefault();
  console.log("링크를 클릭했습니다.");
});

/*호버 이벤트 연결하기*/
const box=document.querySelector("#box");

box.addEventListener("mouseenter",()=>{
  box.style.backgroundColor="hotpink";
});

box.addEventListener("mouseleave",()=>{
  box.style.backgroundColor="aqua";
})

/*반복되는 요소에 이벤트 한꺼번에 연결하기*/
const list=document.querySelectorAll(".list li");

for(let el of list){
  el.addEventListener("click", e=>{
    e.preventDefault();
    console.log(e.currentTarget.innerText);
  })
}

/*클릭 이벤트 발생 시 숫자 증감하기*/
const btnPlus=document.querySelector(".btnPlus");
const btnMinus=document.querySelector(".btnMinus");
let num=0;

btnPlus.addEventListener("click",e=>{
  e.preventDefault();
  num++;
  console.log(num);
});

btnMinus.addEventListener("click",e=>{
  e.preventDefault();
  num--;
  console.log(num);
});

/*문자 안에 변수 삽입하기*/
const myName="홍길동";
console.log(`내 이름은 ${myName}입니다.`);

/*클릭하면 좌우로 회전하는 박스 만들기*/
const btnLeft=document.querySelector(".btnLeft");
const btnRight=document.querySelector(".btnRight");
const square=document.querySelector("#square");
const deg=45;
let n=0;

btnLeft.addEventListener("click",e=>{
  e.preventDefault();
  n--;
  square.style.transform=`rotate(${n * deg}deg)`;
});

btnRight.addEventListener("click",e=>{
  e.preventDefault();
  n++;
  square.style.transform=`rotate(${n * deg}deg)`;
});