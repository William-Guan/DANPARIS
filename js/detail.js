var detailHTML =  '<div class="component detail">'
detailHTML     += ' 	<div class="component video">'
detailHTML     += ' 		<div class="videoContainer">'
detailHTML     += '         	<div class="scrollDown">'
detailHTML     += ' 				<span>scroll down</span>'
detailHTML     += '                 <div class="scrollBomb"></div>'
detailHTML     += '             </div>'
detailHTML     += '             <div class="play">'
detailHTML     += '             	<span class="icon"></span>'
detailHTML     += '             </div>'
detailHTML     += '             <div class="contentAsset"></div>'
detailHTML     += '             <div class="layer"></div>'
detailHTML     += '     	</div>'
detailHTML     += ' 	</div>'
detailHTML     += ' 	<div class="content" id="luxy">'
detailHTML     += '     	<div class="spaceHeader"></div>'
detailHTML     += '         <div class="subContent">'
detailHTML     += '         	<div class="component descriptions">'
detailHTML     += ' 				<div class="container">'
detailHTML     += '             	<div class="column cilent">'
detailHTML     += ' 					Handsaway'
detailHTML     += ' 				</div>'
detailHTML     += '             	<div class="column skills ">'
detailHTML     += ' 					<div class="skill">#harassment</div>'
detailHTML     += ' 					<div class="skill">#metoo</div>'
detailHTML     += ' 					<div class="skill">#ghost injuries</div>'
detailHTML     += ' 					<div class="skill">#snapchat</div>'
detailHTML     += ' 					<div class="skill">#data</div>'
detailHTML     += ' 				</div>'
detailHTML     += '                 <div class="column rewards last">'
detailHTML     += '  					<div class="reward">'
detailHTML     += ' 						<span class="logo">'
detailHTML     += ' 							<img src="imgs/lion@2x.png">'
detailHTML     += ' 						</span>'
detailHTML     += ' 					</div>'
detailHTML     += ' 				</div>'
detailHTML     += ' 				</div>'
detailHTML     += '             </div>'
detailHTML     += ' 			<div class="component text">'
detailHTML     += ' 				<div class="center">'
detailHTML     += ' 					<div class="textContainer">'
detailHTML     += ' 						<div class="text">'
detailHTML     += ' « Get in my car, I will make you dream! »<br>« Hey baby, you got a boyfriend? » « Damnnn. I mean, dammmmn. »<br>« Ooooh look at that ass, I want to put my face in that. »<br><br>85% of women have already been street harassed.<br>Hands Away, the first app against sexist agressions wanted to highlight this tragedy.<br><br>Ghost injuries.<br>It happened once there. Wherever, it will haunt her forever.<br><br>We collected data from the application to turn each geolocated harassment reported into a Snapchat geofilter. Creating 423 different geofilters Only available where the tragedy happened. Meaning everywhere. In order to teach people those furtive insults never really disappear. And that the best way to make it stop is to act when you’re here. 2500 people shared their support on Snapchat. Generating 12,3M impressions of the #Ghost injuries filters. and +65% in downloads of Hands Away app Helping Marina B, Faustine G, Julie, Chloe to feel a little less alone. And encouraging people to act if they witnessed an act. No filter can alleviate the pain of being harassed. But now, there is one to report it.'
detailHTML     += ' 						</div>'
detailHTML     += ' 				 	</div>'
detailHTML     += ' 				</div>'
detailHTML     += '     		</div>'
detailHTML     += '         </div>'
detailHTML     += ' 	</div>'
detailHTML     += ''
detailHTML     += '</div">'
var videoEl;
function loadVideo(){
	videoEl =new vidbg('.contentAsset', 
		{mp4: 'media/8.mp4',
	      overlay: false},{autoplay:false,muted:false});
}

function loadDetailPage(selector){
	$(selector).append(detailHTML);
	loadVideo();
	initluxy();
	bindEvent();
}

function bindEvent(){
	$('.play').click((e)=>{
		videoEl.playVideo();
		$('.play').fadeOut('fast');
		e.stopPropagation();
	});

	$('.videoContainer').click(function(event) {
		if(!videoEl.videoEl.paused){
			videoEl.pauseVideo();
			$('.play').fadeIn('fast');
		}
	});
}

function initluxy(){
	luxy.init();
	$(window).scroll(function(event) {
		var top = $(this).scrollTop();
		if(top>=500){
			$('.spaceHeader').css({
				'opacity': '1'
			});
		}else if(top >= 400){
			$('.spaceHeader').css({
				'opacity': '.8'
			});
		}
		else if(top >= 300){
			$('.spaceHeader').css({
				'opacity': '.6'
			});
		}else if(top >= 200){
			$('.spaceHeader').css({
				'opacity': '0.4'
			});
		}else if(top >= 100){
			$('.spaceHeader').css({
				'opacity': '0.2'
			});
		}else if(top>= 5){
			$('.spaceHeader').css({
				'opacity': '0'
			});
		}
	});
}

