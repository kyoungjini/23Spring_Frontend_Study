/*요소 선택하기*/
const items=document.querySelectorAll("#wrap article");

for(let i=0; i<items.length; i++){
  console.log(items[i]);
}

/*제일 가까운 상위 부모 요소 선택하기*/
const li=document.querySelector("li");
console.log(li.closest("main"));