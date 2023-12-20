$(document).ready(function(){
    $("#nav-btn").change(function () {
        var ff=document.getElementById('nav-btn');
    // alert("clikd");
      //   if ($(this).is(':checked'))
         if(ff.checked){
                            $('#myNav').css('width','100%')
             $('#navi').addClass('fa-solid fa-xmark')
             $("#navi").removeClass('fa fa-bars')
            
            // $('.img').attr('src','assets/images/close.png')
            
            }
        else
        {
            $('#myNav').css('width','0%')
            $('#navi').removeClass('fa-solid fa-xmark')
             $("#navi").addClass('fa fa-bars') 
        }
});


})

$(window).scroll(function() {
    if ($(window).scrollTop() <= 200) {
        $(".navbar").css({'background': 'inherit'});
       
    } else {
        $(".navbar").css('background', 'rgb(225, 242, 252, 1)');
       
        }

})