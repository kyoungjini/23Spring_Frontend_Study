window.addEventListener("load", ()=>{
  const grid = new Isotope("section", { //배치할 요소를 감싸고 있는 부모 요소명
    itemSelector: "article",  //배치할 요소명
    columnWidth: "article",  //너빗값을 구할 요소명
    transitionDuration: "0.5s"  //화면 재배치 시 요소가 움직이는 속도
  });

  //클릭한 모든 버튼 변수에 저장
  const btns = document.querySelectorAll("main ul li");
  
  //버튼의 개수만큼 반복
  for(let el of btns){
    //각 버튼에 클릭 이벤트 연결
    el.addEventListener("click", e=>{
      e.preventDefault();

      const sort = e.currentTarget.querySelector("a").getAttribute("href");

      //grid에 저장된 결과값을 불러와 재정렬 기능 연결
      grid.arrange({
        filter : sort
      });

      for(let el of btns){
        el.classList.remove("on");
      }

      e.currentTarget.classList.add("on");
    })
  }
});