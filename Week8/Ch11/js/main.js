//모든 article 요소를 변수 items에 저장
const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");

//article 요소의 개수만큼 반복
for(let el of items){
  //현재 article 요소에 enter 이벤트 발생
  el.addEventListener("mouseenter", e=>{
    //자식 요소인 video 재생
    e.currentTarget.querySelector("video").play();
  });
  
  //현재 article 요소에 leave 이벤트 발생
  el.addEventListener("mouseleave",e=>{
    e.currentTarget.querySelector("video").pause();  
  });

  //현재 article 요소에 click 이벤트 발생
  el.addEventListener("click",e=>{
    //제목, 본문, video 값을 변수에 저장
    let tit = e.currentTarget.querySelector("h2").innerText;
    let txt = e.currentTarget.querySelector("p").innerText;
    let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

    //aside 요소 안쪽 콘텐츠에 위의 변수들 적용
    aside.querySelector("h1").innerText = tit;
    aside.querySelector("p").innerText = txt;
    aside.querySelector("video").setAttribute("src", vidSrc);

    //aside 요소 안쪽 동영상을 재생하고, on을 붙여 패널 활성화
    aside.querySelector("video").play();
    aside.classList.add("on");
  });
}

for(let el of items){
  //close 요소 클릭 시
  close.addEventListener("click",()=>{
    //aside 요소에 on을 제거해 비활성화하고 안쪽 영상을 재생 정지
    aside.classList.remove("on");
    aside.querySelector("video").pause();
  });
}
