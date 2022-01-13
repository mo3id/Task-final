
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
        
    }  else {
        
        document.querySelector("main").style.transform = 'scale(1)';
    }
    
}





var correct1 = document.getElementById('good-1');

    correct2 = document.getElementById('good-2');

    rong1 = document.getElementById('bad-1');

    rong2 = document.getElementById('bad-2');

    mainpage = document

function good () {

    if (correct1.classList.contains('correct')){
        
        $('#bad-1').addClass('disabled');

        document.getElementById('right').style.display="block";


    } else {

            setTimeout(function() {
            
                            document.getElementById('wrong').style.display="block";
            
        }, 500);        
    }
};


function bad () {

    // if (rong1.classList.contains('in-correct')){
        document.getElementById('wrong').style.display="block";

        setTimeout(function() {
            
            document.getElementById('wrong').style.display="none";

}, 500);  

    // } else {

        
    // }
};

function reload(){

    $('#bad-1').removeClass('disabled');

    document.getElementById('right').style.display="none";
};

function showans(){

    $('#bad-1').addClass('disabled');

    document.getElementById('right').style.display="block";
};


function next(){

    document.getElementById('page-1').style.display="none";

    document.getElementById('page-2').style.display="block";



};


function back(){


}
