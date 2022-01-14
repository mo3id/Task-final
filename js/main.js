$(window).on("load", function () {

   $("#loading").hide();

});


window.onresize = changeSize;

window.onload = changeSize;

function changeSize(event) {

   $(".loader").fadeOut("slow");

   let newWidth = window.innerWidth;

   let newHeight = window.innerHeight;

   let myWidth = document.querySelector("main").clientWidth;

   let myHeight = document.querySelector("main").clientHeight



   if (newWidth <= myWidth) {


      let different = (myWidth - newWidth) / myWidth;

      let scaleValue = `scale(${1 - different})`;

      document.querySelector("main").style.transition = "transform 500ms ease-in-out";

      document.querySelector("main").style.transform = scaleValue;

      document.querySelector("main").style.top = "0px";

   } else if (newHeight < myHeight) {

      let different2 = (myHeight - newHeight) / myHeight;

      let scaleValue2 = `scale(${1 - different2})`;

      document.querySelector("main").style.transition = "transform 500ms ease-in-out";

      document.querySelector("main").style.transform = scaleValue2;

      document.querySelector("main").style.top = "0px";

   } else {

      document.querySelector("main").style.transform = 'scale(1)';
   }

}





var correct1 = document.getElementById('good-1');

correct2 = document.getElementById('good-2');

rong1 = document.getElementById('bad-1');

rong2 = document.getElementById('bad-2');

mainpage = document

function good() {

   if (correct1.classList.contains('correct')) {

      $('#bad-1').addClass('disabled');

      document.getElementById('right').style.display = "block";


   } else {

      setTimeout(function () {

         document.getElementById('wrong').style.display = "block";

      }, 500);
   }
};
$(window).on("load", function () {

   $("#loading").hide();

});


window.onresize = changeSize;

window.onload = changeSize;

function changeSize(event) {

   $(".loader").fadeOut("slow");

   let newWidth = window.innerWidth;

   let newHeight = window.innerHeight;

   let myWidth = document.querySelector("main").clientWidth;

   let myHeight = document.querySelector("main").clientHeight



   if (newWidth <= myWidth) {


      let different = (myWidth - newWidth) / myWidth;

      let scaleValue = `scale(${1 - different})`;

      document.querySelector("main").style.transition = "transform 500ms ease-in-out";

      document.querySelector("main").style.transform = scaleValue;

      document.querySelector("main").style.top = "0px";

   } else if (newHeight < myHeight) {

      let different2 = (myHeight - newHeight) / myHeight;

      let scaleValue2 = `scale(${1 - different2})`;

      document.querySelector("main").style.transition = "transform 500ms ease-in-out";

      document.querySelector("main").style.transform = scaleValue2;

      document.querySelector("main").style.top = "0px";

   } else {

      document.querySelector("main").style.transform = 'scale(1)';
   }

}


var correct1 = document.getElementById('good-1');

correct2 = document.getElementById('good-2');

rong1 = document.getElementById('bad-1');

rong2 = document.getElementById('bad-2');

mainpage = document



function good() {

   if (!$('#bad-1').hasClass('disabled')) {

      $('#bad-1').addClass('disabled');

      document.getElementById('right').style.display = "block";

      correctAudio();

   } else {

      //     setTimeout(function() {

      //         document.getElementById('wrong').style.display="block";

      // }, 500);        
   }
};


function good2() {

   if (correct2.classList.contains('correct')) {

      $('#bad-2').addClass('disabled');

      document.getElementById('right2').style.display = "block";

      correctAudio();

   } else {

      setTimeout(function () {

         // document.getElementById('wrong').style.display="block";

      }, 500);
   }
};

function bad() {

   if (!$('#bad-1').hasClass('disabled')) {

      document.getElementById('wrong').style.display = "block";

      inCorrectAudio();

      setTimeout(function () {

         document.getElementById('wrong').style.display = "none";

      }, 500);

   } else {


   }
};


function bad2() {

   if ($('#bad-2').hasClass('disabled')) {


   } else {

      document.getElementById('wrong2').style.display = "block";

      inCorrectAudio();

      setTimeout(function () {

         document.getElementById('wrong2').style.display = "none";


      }, 500);
   }
};


function reload() {

   if ($('#page1').hasClass('active')) {

      $('#bad-1').removeClass('disabled');

      document.getElementById('right').style.display = "none";

   } else {

      $('#bad-2').removeClass('disabled');

      document.getElementById('right2').style.display = "none";
   };

   // $('#bad-1').removeClass('disabled');

   // document.getElementById('right').style.display="none";
};

function reloadall() {

   back();

   $('#bad-1').removeClass('disabled');

   $('#bad-2').removeClass('disabled')

   document.getElementById('right').style.display = "none";

   document.getElementById('right2').style.display = "none";


};

function showans() {

   if ($('#page1').hasClass('active')) {

      $('#bad-1').addClass('disabled');

      document.getElementById('right').style.display = "block";

   } else {

      $('#bad-2').addClass('disabled');

      document.getElementById('right2').style.display = "block";
   };


};


function next() {

   document.getElementById("page1").style.display = "none";

   document.getElementById("page2").style.display = "block";

   $('#page2').addClass('active');

   $('#page1').removeClass('active');

   $('.next').addClass('disabled');

   $('.back').removeClass('disabled');

   document.getElementById("page-no").textContent = "2 of 2";

};


function back() {
   $('#page1').addClass('active');

   $('#page2').removeClass('active');

   document.getElementById("page2").style.display = "none";

   document.getElementById("page1").style.display = "block";

   document.getElementById("page-no").textContent = "1 of 2";

   $('.next').removeClass('disabled');

   $('.back').addClass('disabled');

}


var av = document.getElementById("av-tag");
var playTime = document.getElementsByClassName("play-time")[0];
var playBtn=document.getElementsByClassName("play-btn")[0];
var curTime=document.getElementById("cur-time");
var volume = document.getElementById("volume");
var speaker=document.getElementById("speaker");


function correctAudio() {

   document.getElementById("correct").play();
}


function inCorrectAudio() {

   document.getElementById("incorrect").play();
}


function desctiptinAudio() {

   document.getElementById("desctiptinAudio").play();

   if (audio.paused == false) {
      audio.pause();
   } else {
      audio.play();
   }
}


function disAppeer1() {

   document.getElementById("img-pause").style.display = "block"

   document.getElementById("img-paly").style.display = "none"

   document.getElementById("av-tag").play();
}


function disAppeer2() {

   document.getElementById("img-pause").style.display = "none"

   document.getElementById("img-paly").style.display = "block"

   document.getElementById("av-tag").pause();
}
// ---------------------- Start Audio Player ----------------- //


function bad() {

   // if (rong1.classList.contains('in-correct')){
   document.getElementById('wrong').style.display = "block";

   setTimeout(function () {

      document.getElementById('wrong').style.display = "none";

   }, 500);

   // } else {


   // }
};

function reload() {

   $('#bad-1').removeClass('disabled');

   document.getElementById('right').style.display = "none";
};

function showans() {

   $('#bad-1').addClass('disabled');

   document.getElementById('right').style.display = "block";
};


function next() {

   document.getElementById('page-1').style.display = "none";

   document.getElementById('page-2').style.display = "block";



};


function back() {


}