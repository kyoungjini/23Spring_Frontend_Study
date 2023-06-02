const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45; //각각의 article 요소가 회전할 각도
const len = lists.length-1; //순번이 0부터 시작하므로 1 빼기
let i = 0;

//article 개수만큼 반복
for(let el of lists){
  //각 article 요소를 45도씩 회전하고 아래로 배치
  let pic = el.querySelector(".pic");
  el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
  pic.style.backgroundImage = `url(../Ch12/img/member${i+1}.jpg)`; /*배경 이미지 추가*/
  i++; 

  //각 article 요소 안쪽의 버튼 3개를 변수에 저장
  let play = el.querySelector(".play");
  let pause = el.querySelector(".pause");
  let load = el.querySelector(".load");

  //play 버튼 클릭 시
  play.addEventListener("click", e=>{
    let isActive = e.currentTarget.closest("article").classList.contains("on");
    
    if(isActive){
      //play 버튼부터 .pic 요소까지 탐색한 뒤 on 추가하여 활성화
      e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
      //play 버튼부터 audio 요소까지 탐색한 뒤 음악 재생
      e.currentTarget.closest("article").querySelector("audio").play();
    }
  });

  //pause 버튼 클릭 시
  pause.addEventListener("click", e=>{
    let isActive = e.currentTarget.closest("article").classList.contains("on");

    if(isActive){
      //pause 버튼부터 .pic 요소까지 탐색한 뒤 on 제거하여 활성화
      e.currentTarget.closest("article").querySelector(".pic").classList.remove("on");
      //pause 버튼부터 audio 요소까지 탐색한 뒤 음악 정지
      e.currentTarget.closest("article").querySelector("audio").pause();
    }
  });

  //load 버튼 클릭 시
  load.addEventListener("click", e=>{
    let isActive = e.currentTarget.closest("article").classList.contains("on");

    if(isActive){
      //load 버튼부터 .pic 요소까지 탐색한 뒤 on 추가하여 활성화
      e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
      //load 버튼부터 audio 요소까지 탐색한 뒤 다시 로드하고 재생
      e.currentTarget.closest("article").querySelector("audio").load();
      e.currentTarget.closest("article").querySelector("audio").play();
    }
  });
}

//전체 리스트가 회전할 때 가운데 패널만 활성화하기
let active = 0; 

function activation(index, lists){
  for(let el of lists){
    el.classList.remove("on");
  }
  lists[index].classList.add("on");
}

//좌우 버튼 클릭 시 패널 회전시키기
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");

let num = 0; //frame 요소 회전하기 위한 카운트값

prev.addEventListener("click", ()=>{
  initMusic();
  num++;
  frame.style.transform = `rotate(${deg * num}deg)`;

  (active == 0) ? active = len : active--;
  activation(active, lists);
});

next.addEventListener("click", ()=>{
  initMusic();
  num--;
  frame.style.transform = `rotate(${deg * num}deg)`;

  (active == len) ? active = 0 : active++;
  activation(active, lists);
});

//활성화된 패널만 음악 재생되도록 컨트롤
const audio = frame.querySelectorAll("audio");

function initMusic(){
  //모든 오디오 요소를 반복하면서 정지시키고 .pic 요소의 모션을 중지해서 초기화하는 함수
  for(let el of audio){
    el.pause();
    el.load();
    el.parentElement.previousElementSibling.classList.remove("on");
  }  
}