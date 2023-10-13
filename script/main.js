//변수 선언
//메인메뉴 클릭시 서브메뉴 나오게한다
let gnb = document.querySelectorAll('.gnb > ul > li');
let sub = document.querySelectorAll('.gnb .sub');
let main = document.querySelector('main');
let footer = document.querySelector('footer');

//메인메뉴외 영역을 클릭시 서브가 숨겨진다.
for(let i = 0; i < gnb.length; i++){
  gnb[i].addEventListener('click',()=>{
    // alert('클릭');
    const child = gnb[i].children;
    console.log(child[1]);

  // li태그 안에 있는 .sub 무조건 모두 숨기기 
  for(let j = 0; j < sub.length; j++){
    sub[j].style.display="none"; 

  }  
  // 내가 선택한 li의 sub만 나오게
  child[1].style.display='block';
  //#(this).find('.sub').show();

  
  //$(this).parent().siblings().find('.sub').hide();

  });
}


//메인메뉴 외 영역을 클릭시 서브가 숨겨진다.
main.addEventListener('click',()=>{
  for(let i = 0; i < gnb.length; i++){
    sub[i].style.display='none';
  }
});



$(function(){
  // 메인슬라이드
  let m_img = $('#visual_slide div');
  const l_btn = $('#visual_slide .s_btn li:first-child');
  const r_btn = $('#visual_slide .s_btn li:last-child');
  const c_btn = $('#visual_slide .c_btn li');

  let n = c_btn.index(); //무조건 0으로 시작 (공식)
  
  //5초마다 반복호출되는 함수 작성
  function fadeInOut(){
    // console.log('내용 반복하기');
    m_img.stop().fadeOut();
    c_btn.removeClass('on');
    if(n==2){
      n=0;
    }else{
      n++;
    }
    m_img.eq(n).stop().fadeIn();
    c_btn.eq(n).addClass('on');
  }

  function fadeInOut2(){
    m_img.stop().fadeOut();
    c_btn.removeClass('on');
    if(n==0){
      n=2;
    }else{
      n--;
    }
    m_img.eq(n).stop().fadeIn();
    c_btn.eq(n).addClass('on');
  }

  // 시간객체를 사용하여 함수호출 setInterval(함수명, 시간);
  let Timer = setInterval(fadeInOut,5000);
  
  //콘트롤 버튼 클릭시 시간을 제거하고
  c_btn.hover(function(){
    clearInterval(Timer);
  },function(){//마우스 아웃시 시간을 다시 생성하여 움직이게한다.
    clearInterval(Timer);
    Timer = setInterval(fadeInOut,5000);
  });

  //콘트롤 버튼 클릭시 해당 슬라이드 보이게하기
  c_btn.click(function(){
    n = $(this).index();//클릭한 콘트롤 목록의 인덱스 값을 다시구하고
    m_img.fadeOut();//보이는 이미지 모두 숨기고
    c_btn.removeClass('on');//콘트롤 버튼서식을 모두 제거
    m_img.eq(n).fadeIn();//인덱스번호에 맞는 슬라이드가 보이게한다.
    c_btn.eq(n).addClass('on');//해당하는 콘트롤버튼에 서식적용

  }); 


  // 좌측, 우측 방향버튼 클릭시 시간을 제거하고 해당 함수를 호출한다.
  l_btn.click(function(){
    clearInterval(Timer);
    fadeInOut2();
  });

  r_btn.click(function(){
    clearInterval(Timer);
    fadeInOut();
  });

  // 좌,우 버튼에 마우스 아웃시 다시 시간을 생성하여 자동으로 움직이게한다.
  $('#visual_slide .s_btn').mouseleave(function(){
    Timer = setInterval(fadeInOut, 5000);

    //제이쿼리로 탭콘텐츠
    // $('.tcon ul li').click(function(){
    //   $(this).find('a').addClass('tab_on').parent().siblings().find('a').removeClass('tab_on');
    // });

  });

});
  
// $(function(){

//   // 탭메뉴 콘텐츠 서식
//   //1.변수 li 태그 클릭
//   const tab_list = document.querySelectorAll('.tcont ul li');
//   const tcon = document.querySelectorAll('.tcon ul li div');
  
  
//   //2.탭메뉴 첫번째 li태그안에 있는 .cont를 보이게하기
//   //$('.tcon ul li:first-child .cont').show();
  
//   document.querySelector('.cont').style.display='block';
  
//   for(let i = 0; i <= tab_list.length; i++){
//     tab_list[i].addEventListener('click',(e)=>{
//       e.preventDefault();
//       // console.log(tab_list[i]);
//       const child = tab_list[i].children;
//       console.log(child);
    
//       // 선택한 li목록의 div태그를 화면에 보이게한다.
//       for(let j=0; j<=tcon.length;j++){
//         tcon[j].style.display='none'; //모두숨기기
//         tcon[i].style.display='block';//선택한 li 요소의 자손 tcon나오게
  
//         tab_list[j].classList.remove('tab_on');//모두제거
  
//         tab_list[i].classList.add('tab_on');
//         // e.currentTarget.
  
//       }
  
  
//         //a요소에 서식을 모두 제거하고 선택한 요소에만 tab_on 적용
    
//         //.cont를 모두 숨기고
    
    
//         //선택한 li의 자손 .cont를 보이게한다.
//       }
  
  
  
//     )};
// });


// tab_con 자바스크립트
// 1.탭메뉴 변수선언
let tabList = document.querySelectorAll('.tab_mnu > .list > li');

//2.for문을 사용하여 사용자가 선택한 항목에 대한 목록만 나오게한다.
for(let i = 0; i < tabList.length; i++){//li태그 개수만큼 반복
  tabList[i].querySelector('.btn').addEventListener('click',function(e){
    e.preventDefault();

    for(let j = 0; j < tabList.length; j++){
      tabList[j].classList.remove('tab_on');
    }
    this.parentNode.classList.add('tab_on');
  });
}


// 이벤트 슬라이드 
//1.변수
let l_btn = document.getElementById('l_btn');
let r_btn = document.getElementById('r_btn');
let btn = document.querySelectorAll('.fa-solid');
const slide = document.querySelector('.event_slide');
const slide_img =  document.querySelectorAll('.event_slide li');

// li의 목록개수
const img_n = slide_img.length;
// console.log(img_n);//5

const img_w = 640; //li태그 너비
const s_con = 1;// 한페이지에 보여질 개수
let count = 0;

// 감싸는 부모 요소 너비 구하기
slide.style.width=img_w*img_n + 'px';

// 왼쪽으로 움직이는 슬라이드 함수
function eslide(n){
  slide.style.left=img_w*(-n) +'px';
  count = n;
  console.log(slide.style.left);
  console.log(count);
}

// 매3초마다 자동으로 움직이게하는 함수
let Timer = setInterval(function(){
  if(count < img_n-s_con){
    eslide(count+1);
  }else{
    eslide(0);
  }
},3000);

// 왼쪽버튼
l_btn.addEventListener('click',function(){
  if(count > 0){
    eslide(count-1);
  }else{
    eslide(img_n-s_con);
  }
  clearInterval(Timer);
});
//오른쪽버튼
r_btn.addEventListener('click',function(){
  if(count < img_n-s_con){
    eslide(count+1);
  }else{
    eslide(0);
  }
  clearInterval(Timer);
});

// mouseout
for(let i = 0; i < btn.length; i++){
  btn[i].addEventListener('mouseout',function(){
    Timer = setInterval(function(){
      if(count < img_n-s_con){
        eslide(count+1);
      }else{
        eslide(0);
      }
    },3000);
  });
}
$(function(){
  //캡션나오게하기
  let g_list = $('.gallery > .item figure');

  g_list.hover(function(){
    $(this).find('figcaption').stop().animate({'bottom':'0px'},300);
  },function(){
    $('.item figcaption').stop().animate({'bottom':'-70px'},300);
  });



  let list = $('.list > li > a');

  //1.클릭한 탭에 해당하는 서식 적용
  list.click(function(){
    $(this).toggleClass('m_tab_on');//서식적용
    $(this).find('t_arrow').toggleClass('act02');//화살표방향
    $(this).next().slideToggle();//답변나오게
  });


    //1.변수
    let toggle = $('#toggle');

    //2.클릭시 메뉴 보이게
    toggle.click(()=>{
      $('.gnb').slideToggle();
    })
});

