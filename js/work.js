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
function blindEvent(){
	$(document).scroll((e)=>{
		if($('.gridItem').length > 0){
			var After_scollH = $(window).scrollTop();
	        var differH = After_scollH - Before_scollH;
	        if(differH > 0){		// 向上滚动时 left列表向上移动动画
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
}


function loadItems(){
	blindEvent();
	workItmes.forEach( function(element, index) {
		var pageWorkHtml = '';
			pageWorkHtml    += '            	<div class="component gridItem big">'
			pageWorkHtml    += '                	<a id="pitchr" href="#">'
			pageWorkHtml    += '                    	<div class="contentAsset">'
			pageWorkHtml    += ' 							<img src="'+element.imgs+'"  name="home_preview_1494947443043" lineheight="0">'
			pageWorkHtml    += ' 					  	</div>' 
			pageWorkHtml    += '                        <div class="texts">' 
			pageWorkHtml    += '                        	<div class="client">'+element.des+'</div>'
			pageWorkHtml    += '                            <br>'
			pageWorkHtml    += ' 							<div class="project">'
			pageWorkHtml    += 									element.txt
			pageWorkHtml    += '                            </div>'
			pageWorkHtml    += '                        </div>' 
			pageWorkHtml 	+= '                    </a>'
			pageWorkHtml	+= '                </div>'		
		if(element.dir==='left'){
			$('.left .content').append($(pageWorkHtml));
		}else{
			$('.right .content').append($(pageWorkHtml));
		}
	});
}


var workItmes = [
{
	imgs : 'media/workleft0jpg.jpg',
	des : 'NISSAN',
	txt : 'PITCH-R',
	dir : 'left'
},
{
	imgs : 'media/workleft1jpg.jpg',
	des : 'wwf',
	txt : 'TOOLATERGRAM',
	dir : 'left'
},
{
	imgs : 'media/workleft2jpg.jpg',
	des : 'wwf',
	txt : 'TOOLATERGRAM',
	dir : 'left'
},
{
	imgs : 'media/workleft3jpg.jpg',
	des : 'Système U',
	txt : 'Fresh Stories',
	dir : 'left'
},
{
	imgs : 'media/workleft4jpg.jpg',
	des : 'Orient Express',
	txt : 'Orient Express',
	dir : 'left'
},
{
	imgs : 'media/workleft5jpg.jpg',
	des : 'Carolina Herrera',
	txt : 'A very New York Christmas',
	dir : 'left'
},
{
	imgs : 'media/workleft6jpg.jpg',
	des : 'Système U',
	txt : 'The gender free catalog',
	dir : 'left'
},
{
	imgs : 'media/workleft7jpg.jpg',
	des : 'SNCF',
	txt : 'Défi ingénieurs 3',
	dir : 'left'
},
{
	imgs : 'media/workleft8jpg.jpg',
	des : 'Warner',
	txt : 'Batman VS Superman',
	dir : 'left'
},
{
	imgs : 'media/workleft9jpg.jpg',
	des : 'Nina Ricci',
	txt : 'Digital ecosystem',
	dir : 'left'
},
{
	imgs : 'media/workleft10jpg.jpg',
	des : 'Essilor',
	txt : 'EYEZEN',
	dir : 'left'
},
{
	imgs : 'media/workleft11jpg.jpg',
	des : 'Paco Rabanne',
	txt : 'Invictus awards',
	dir : 'left'
},
{
	imgs : 'media/workleft2jpg.jpg',
	des : 'SNCF',
	txt : 'Europe next door',
	dir : 'left'
},
// {
// 	imgs : 'media/workleft3jpg.jpg',
// 	des : 'Adidas',
// 	txt : 'ALL BLEUS',
// 	dir : 'left'
// },{
// 	imgs : 'media/workright0jpg.jpg',
// 	des : 'Handsaway',
// 	txt : 'Handsaway',
// 	dir : 'right'
// },
{
	imgs : 'media/workright1jpg.jpg',
	des : 'Castorama',
	txt : 'Magic Wallpaper',
	dir : 'right'
},
{
	imgs : 'media/workright2jpg.jpg',
	des : 'McDonald"s',
	txt : 'McDonald"s quality',
	dir : 'right'
},
{
	imgs : 'media/workright3jpg.jpg',
	des : 'SNCF',
	txt : 'Level crossing',
	dir : 'right'
},
{
	imgs : 'media/workright4jpg.jpg',
	des : 'Jennyfer',
	txt : 'Epic Holiday',
	dir : 'right'
},
{
	imgs : 'media/workright5jpg.jpg',
	des : 'KPMG',
	txt : 'LOOP',
	dir : 'right'
},
{
	imgs : 'media/workright6jpg.jpg',
	des : 'Roger Gallet',
	txt : 'The Youtube experiment',
	dir : 'right'
},
{
	imgs : 'media/workright7jpg.jpg',
	des : 'DanParis',
	txt : 'JUST THE BELL',
	dir : 'right'
},
{
	imgs : 'media/workright8jpg.jpg',
	des : 'SNGF',
	txt : 'Défi Ingénieurs 2',
	dir : 'right'
},
{
	imgs : 'media/workright9jpg.jpg',
	des : 'OPI',
	txt : 'SPEAK IN COLORS',
	dir : 'right'
},
{
	imgs : 'media/workright10jpg.jpg',
	des : 'Michelin',
	txt : 'Cross Climate',
	dir : 'right'
},
{
	imgs : 'media/workright11jpg.jpg',
	des : 'Hermès',
	txt : 'SOUND OF SILVER',
	dir : 'right'
},
{
	imgs : 'media/workright12jpg.jpg',
	des : 'Chloé',
	txt : 'Blowing Roses',
	dir : 'right'
}
]



/* WORK PAGE*/
var pageWorkHtml = '<div class="component list" >'
	pageWorkHtml    += '	<div class="component background">'
	for(let i = 0; i < 400; i++){
	pageWorkHtml    += ' 		<div class="circle"></div>' }
	pageWorkHtml    += '	</div>'
	pageWorkHtml    += ' 	<div class="pattern"></div>'
	pageWorkHtml    += ' 	<div class="component grid">'
	pageWorkHtml    += ' 		<div class="left">'
	pageWorkHtml	+= ' 			<div class="content">'
	pageWorkHtml	+= '            </div>'
	pageWorkHtml    += '        </div>'
	pageWorkHtml	+= ' 		<div class="right">'
	pageWorkHtml    += ' 			<div class="content">'
	pageWorkHtml    += ' 			</div>'
	pageWorkHtml    += ' 		</div>'
	pageWorkHtml    += ' 	</div>'
	pageWorkHtml    += '</div>'