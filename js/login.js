$(function(){
	$(".login_ewm").mouseenter(function(){
		$(".ewm_img").stop(true).animate({"left":0,"width":136},400).next().stop(true).animate({"opacity":1},400);
	});
	$(".login_ewm").mouseleave(function(){
		$(".ewm_img").stop(true).animate({"left":59,"width":192},400).next().stop(true).animate({"opacity":0},400);
	});
});