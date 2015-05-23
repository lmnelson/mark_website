//Initialize fastclick
$(function() {
    FastClick.attach(document.body);
});

$(function() {
  //Sidbar nav
  if(Modernizr.csstransforms3d){
    //Toggle global sidebar nav
    $(function(){
      $("#menu-toggle,#nav-close").click(function(){
        $("#wrapper").toggleClass("pushed");
      });
    });

  }else{
    //jQuery fallback
    $("nav#sidebar-global-nav").css("right","-260px");
    $("#wrapper .content").css("right","0");
    var status = "closed";
    $(function(){
      $('#menu-toggle,#nav-close').click(function(){
        if(status == "closed") {
          $("nav#sidebar-global-nav").animate({ right: 0});
          $("#wrapper .content").animate({ right: 260});
          status = "open";
        } else {
          $("nav#sidebar-global-nav").animate({ right: -260});
          $("#wrapper .content").animate({ right: 0});
          status = "closed";
        }
      });
    });
  }
});

//Set day for hours of operation
$(function(){
	today = new Date().getDay();
	$(".day:eq("+today+")").addClass('today');
});

//Active nav class
var bodyClass = $('body').attr('class');
var contentNavItem = $('.content-nav-desktop li a, .content-nav li a').each(function(){
	var navItem = $(this).attr('data-nav-item');
	if(navItem == bodyClass) {
		$(this).addClass('active');
	}
});

//Sticky content nav desktop
var $contentNav = $('.content-nav-desktop');
$window = $(window);
offset = $contentNav.offset();


$window.scroll(function(){
	if($window.scrollTop() > offset.top -1) {
		$contentNav.addClass('fixed');
	} else {
		$contentNav.removeClass('fixed');
	}
});

//Tip tip
$(function(){
  $(".tip-tip").tipTip({
    defaultPosition: "top",
    delay: 100,
    //wrap in span
  })
});

//Custom Carousel
showStep = function(e) {
  e.preventDefault();
  iCaption = $(this).index();

  $('li.benefits-step').removeClass('active');
  $('li.benefits-step').eq(iCaption).addClass('active');

  $('div.benefits-step').removeClass('active');
  $('div.benefits-step').eq(iCaption).addClass('active');
  //Ipad Inner
  $('.ipad-inner .step').removeClass('active fadeIn');
  $('.ipad-inner .step').eq(iCaption).addClass('active fadeIn');
}

showPrevStep = function(e) {
  e.preventDefault();
  var current_step = $('.benefits-step.active').attr('data-position');
  current_step = parseInt(current_step);

  // find and set the previous step as active
  if(current_step > 1) {
    // remove all current active
    $('.benefits-step').removeClass('active');
    // add active to the prev step
    var prev_step_number = current_step - 1;

    $('div').find("[data-position='" + prev_step_number + "']").addClass('active');
    // show the new image in the ipad
    $('.ipad-inner .step').removeClass('active fadeIn');
    $('.ipad-inner .step').eq(prev_step_number - 1).addClass('active fadeIn');
  }
}

showNextStep = function(e) {
  e.preventDefault();
  var current_step = $('.benefits-step.active').attr('data-position');
  current_step = parseInt(current_step);
  // find and set the next step as active
  if(current_step < 4) {
    // remove all current active
    $('.benefits-step').removeClass('active');
    // add active to the next step
    var next_step_number = current_step + 1;
    $('div').find("[data-position='" + next_step_number + "']").addClass('active');
    // show the new image in the ipad
    $('.ipad-inner .step').removeClass('active fadeIn');
    $('.ipad-inner .step').eq(next_step_number - 1).addClass('active fadeIn');

    if(current_step == 2) {
      $('img#prescriptions-step-3c, img#referrals-step-3').addClass('trigger-animation');
    }
  }
}

//Prev Button
$('a.prev').click(showPrevStep);

//Next Button
$('a.next').click(showNextStep);

//Custom FX for Slides

//Slide 3 Prescriptions Zoom FX
$('.benefits-step:eq(2), li.benefits-step:eq(2)').click(function(){
  $('img#prescriptions-step-3c, img#referrals-step-3').addClass('trigger-animation');
});

//Add Completed Class
var updateCaptionClasses = function(currentIndex){
  $('.benefits-step').each(function(index, element) {
    if(index < currentIndex)
      $(element).addClass('completed');
    else
      $(element).removeClass('completed');
  });
};

$('.benefits-step').click(function(element){
  updateCaptionClasses($(this).index());
  $('.completed i.icon-checkmark-circle').addClass('completed');
});

//showStep on Click
$('.benefits-step, li.benefits-step').click(showStep);


