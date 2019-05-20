$('.page').on('mouseenter','.gridItem ',function(){
	$('.gridItem').css({
		'opacity': '.8',
	});

	$(this).css({
		'transform': 'perspective(1000px) translate3d(0,0,100px)',
		'transition':'.8s',
		'opacity' : 1
	});
});

$('.page').on('mouseleave','.gridItem ',function(){

	$('.gridItem').css({
		'opacity': '1',
		'transition':'.8s'
	});
		$(this).css({
		'transform': 'perspective(1000px) translate3d(0,0,10px)'
	});
});

var Before_scollH = 0;
$(document).scroll((e)=>{
	if($('.gridItem').length > 0){
		var After_scollH = $(window).scrollTop();
        var differH = After_scollH - Before_scollH;
        if(differH > 0){		// 向上滚动时 left列表向上移动动画
        	console.log();
        	$('.left').css({
        			'transform': `translateY(-${$('.left').offset().top+-10}px)`,
        			'transition': '2s'
        			});
        }else{
        	$('.left').css({
        			'transform': 'translateY(50px)',
        			'transition': '2s'
        			});
        }
       // console.log(differH == 0);
       //  if (differH == 0) {
       //      return false;
       //  }

        // var scollType = differH > 0 ? 'down' : 'up';
        Before_scollH = After_scollH;

		$('.gridItem').each(function(index, el) {
			var wHeight = window.innerHeight-30;			//内容显示目标点
			var v1 = parseInt($(el).offset().top);			//元素距离文档上方的值
			var v2 = parseInt($(window).scrollTop());		//浏览器滚动的高度
			console.log(v1-v2<=wHeight);
			if(v1-v2<=wHeight){
				$(el).find('.contentAsset img').css({
					'opacity': 1,
					'visibility': 'visibale',
					'transform' : ' rotate3d(1,	0,0,0deg) scale3d(1,1,1)',
					'transition': '1s'
				});
				$(el).find('.texts .client,.texts .project').css({
					'opacity': '1',
					'transform': 'scale(1)',
					'letter-spacing':'0'
				});
			}
		});
	}
});

