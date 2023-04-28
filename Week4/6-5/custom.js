const wrap = document.querySelector("#wrap");
const box=wrap.querySelector("article");

/*클래스 제어하기 1
wrap.addEventListener("click", ()=>{
  box.style.backgroundColor = "hotpink";
});*/

/*클래스 제어하기 2*/
wrap.addEventListener("click",()=>{
  wrap.classList.toggle("on");
});
