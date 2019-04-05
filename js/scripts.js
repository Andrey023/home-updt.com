
function mytime() {
    var d = new Date();
    var x = document.getElementsByClassName("leftblock");
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    x[0].innerHTML = h + ":" + m + ":" + s;
}
setInterval(mytime, 500);

$(document).ready(function(){
	$('.child-number:nth-second').click(function(){
		$(this).animate({
			width:'150px',
			height:"150px",
			borderRadius:"50%"
		}, 2000);
	});
});


var block_text= document.querySelector('#hidden-bl');
block_text.onclick = function(){
	block_text.style.color = "red";
}