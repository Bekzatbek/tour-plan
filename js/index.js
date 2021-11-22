// NEW INDEX NUMBER animation
function changeColors() {
	$('.current').css('color', 'rgba(0,0,0,1)');
	$('.current').prev().css('color', 'rgba(0,0,0,0.66)');
	$('.current').next().css('color', 'rgba(0,0,0,0.66)');
	$('.current').prev().prev().css('color', 'rgba(0,0,0,0.33)');
	$('.current').next().next().css('color', 'rgba(0,0,0,0.33)');
	$('.current').prev().prev().prev().css('color', 'rgba(0,0,0,0)');
	$('.current').next().next().next().css('color', 'rgba(0,0,0,0)');
}

function changePosition() {
	$('.current').css({'transform' : 'translate3d(0,-50%,0)', 'top' : '50%'});
	$('.current').prev().css({'transform' : 'translate3d(0,-50%,0)', 'top' : '29%'});
	$('.current').next().css({'transform' : 'translate3d(0,-50%,0)', 'top' : '71%'});
	$('.current').prev().prev().css({'top' : '0%', 'transform' : 'none'});
	$('.current').next().next().css({'transform' : 'translate3d(0,-100%,0)', 'top' : '100%'});
	$('.current').prev().prev().prev().css({'top' : '-16px', 'transform' : 'none'});
	$('.current').next().next().next().css({'transform' : 'none', 'top' : '100%'});
	$('.current').prev().prev().prev().prev().css({'top' : '-32px', 'transform' : 'none'});
	$('.current').next().next().next().next().css({'transform' : 'none', 'top' : '115%'});
}

function changeProject() {
	// Change background image
	var currentProject = $('.current').attr('data-img-bg');
	$('.bg, .content-info').removeClass('active');
	$('.bg.' + currentProject + ', .content-info.' + currentProject).addClass('active');
}

$(document).ready(function() {
	changeColors();
	changePosition();
});

var listTop = 0;
var i;

$('.arrow-right-box').on('click', function(e) {
	e.preventDefault();
	if($(this).hasClass('disabled')) {
		return;
	} else {
		$(this).addClass("disabled");

		var current = $('.list').find('.current');
		var first = $('.list li').first();
		var data = first.attr('data-img-bg');

		current.next().addClass('current');
		current.removeClass('current');
		$('.list').append('<li style="top:100%" data-img-bg="' + data + '">' + first.html() + '</li>');

		setTimeout(function() {
			setTimeout(function() {
				$(first).remove();
				$('.arrow-right-box').removeClass("disabled");
			},380);
			changeColors();
			changePosition();
			changeProject();
		}, 10);
	}
});

$('.arrow-left-box').on('click', function(e) {
	e.preventDefault();
	if($(this).hasClass('disabled')) {
		return;
	} else {
		$(this).addClass("disabled");

		var current = $('.list').find('.current');
		var last = $('.list li').last();
		var data = last.attr('data-img-bg');

		current.prev().addClass('current');
		current.removeClass('current');
		$('.list').prepend('<li style="top:-16px" data-img-bg="' + data + '">' + last.html() + '</li>');

		setTimeout(function() {
			setTimeout(function() {
				$(last).remove();
				$('.arrow-left-box').removeClass("disabled");
			},380);
			changeColors();
			changePosition();
			changeProject();
		}, 10);
	}
});

$("body").keydown(function(e) {
	if(e.keyCode == 37 || e.keyCode == 38) { // left
		if( $('.arrow-right-box').hasClass('disabled') || $('.arrow-left-box').hasClass('disabled')) {
			return;
		} else {
			$('.arrow-right-box').addClass("disabled");
			$('.arrow-left-box').addClass("disabled");

			var current = $('.list').find('.current');
			var last = $('.list li').last();
			var data = last.attr('data-img-bg');

			current.prev().addClass('current');
			current.removeClass('current');
			$('.list').prepend('<li style="top:-16px" data-img-bg="' + data + '">' + last.html() + '</li>');

			setTimeout(function() {
				setTimeout(function() {
					$(last).remove();
					$('.arrow-right-box').removeClass("disabled");
					$('.arrow-left-box').removeClass("disabled");
				},380);
				changeColors();
				changePosition();
				changeProject();
			}, 10);
		}
	}
	else if(e.keyCode == 39 || e.keyCode == 40) { // right
		if( $('.arrow-right-box').hasClass('disabled') || $('.arrow-left-box').hasClass('disabled')) {
			return;
		} else {
			$('.arrow-right-box').addClass("disabled");
			$('.arrow-left-box').addClass("disabled");

			var current = $('.list').find('.current');
			var first = $('.list li').first();
			var data = first.attr('data-img-bg');

			current.next().addClass('current');
			current.removeClass('current');
			$('.list').append('<li style="top:100%" data-img-bg="' + data + '">' + first.html() + '</li>');

			setTimeout(function() {
				setTimeout(function() {
					$(first).remove();
					$('.arrow-right-box').removeClass("disabled");
					$('.arrow-left-box').removeClass("disabled");
				},380);
				changeColors();
				changePosition();
				changeProject();
			}, 10);
		}
	}
});

$('.list').on('click', 'li', function() {
	var number = $(this).html();
	var i = $(this).index();
	// alert(i)
	if($('.list').hasClass('disabled')) {
		return;
	} else {
		$('.list').addClass("disabled");

		if ( $(this).hasClass('current') ) {
			return;
		} else if ( i == 0 ) {
			var last = $('.list li').last();
			var secondLast = $('.list li').last().prev();
			var data1 = last.attr('data-img-bg');
			var data2 = secondLast.attr('data-img-bg');

			$('.list').find('.current').removeClass('current');
			$(this).addClass('current');
			$('.list').prepend('<li style="top:-16px" data-img-bg="' + data1 + '">' + last.html() + '</li>');
			$('.list').prepend('<li style="top:-32px" data-img-bg="' + data2 + '">' + secondLast.html() + '</li>');

			setTimeout(function() {
				setTimeout(function() {
					$(last).remove();
					$(secondLast).remove();
					$('.list').removeClass("disabled");
				},380);
				changeColors();
				changePosition();
				changeProject();
			}, 10);
		} else if ( i == 1 ) {
			var last = $('.list li').last();
			var data = last.attr('data-img-bg');

			$('.list').find('.current').removeClass('current');
			$(this).addClass('current');
			$('.list').prepend('<li style="top:-16px" data-img-bg="' + data + '">' + last.html() + '</li>');

			setTimeout(function() {
				setTimeout(function() {
					$(last).remove();
					$('.list').removeClass("disabled");
				},380);
				changeColors();
				changePosition();
				changeProject();
			}, 10);
		} else if ( i == 3 ) {
			var first = $('.list li').first();
			var data = first.attr('data-img-bg');

			$('.list').find('.current').removeClass('current');
			$(this).addClass('current');
			$('.list').append('<li style="top:100%" data-img-bg="' + data + '">' + first.html() + '</li>');

			setTimeout(function() {
				setTimeout(function() {
					$(first).remove();
					$('.list').removeClass("disabled");
				},380);
				changeColors();
				changePosition();
				changeProject();
			}, 10);
		} else if ( i == 4 ) {
			var first = $('.list li').first();
			var second = $('.list li').first().next();
			var data1 = first.attr('data-img-bg');
			var data2 = second.attr('data-img-bg');

			$('.list').find('.current').removeClass('current');
			$(this).addClass('current');
			$('.list').append('<li style="top:100%" data-img-bg="' + data1 + '">' + first.html() + '</li>');
			$('.list').append('<li style="top:115%" data-img-bg="' + data2 + '">' + second.html() + '</li>');

			setTimeout(function() {
				setTimeout(function() {
					$(first).remove();
					$(second).remove();
					$('.list').removeClass("disabled");
				},380);
				changeColors();
				changePosition();
				changeProject();
			}, 10);
		}
	}
});
