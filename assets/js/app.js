
function toggle(short) {
	$('#s-' + short).toggleClass('active');
}

$(document).ready(function(){
  
	$('.space').click(function() {
		$(this).toggleClass('active');
	});

	$.each(['1','2','3','4','a','b','c','d'], function(i, val) {
		// console.log(val);
		Mousetrap.bind(val, function() {
			// console.log(val);
			toggle(val);
		});
	})

});
