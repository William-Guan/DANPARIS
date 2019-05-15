 
let videos = [new vidbg('body', {
	      mp4: 'media/1.mp4',
	      overlay: false
}, {}),
new vidbg('body', {
	      mp4: 'media/2.mp4',
	      overlay: false
}, {}),
new vidbg('body', {
	      mp4: 'media/3.mp4',
	      overlay: false
}, {}),
new vidbg('body', {
	      mp4: 'media/4.mp4',
	      overlay: false
}, {}),
new vidbg('body', {
	      mp4: 'media/5.mp4',
	      overlay: false
}, {}),
new vidbg('body', {
	      mp4: 'media/6.mp4',
	      overlay: false
}, {}),
new vidbg('body', {
	      mp4: 'media/7.mp4',
	      overlay: false
}, {}),
new vidbg('body', {
	      mp4: 'media/7.mp4',
	      overlay: false
}, {})];

let homeTitles = ['THE MAGIC WALLPAPER','HANDSAWAY',
					'IT\'S JUST THE BELL','WHY SO SERIOUS',
					'SPARKS IN COLORS','THE IMPOSSIBLE CHANLLENGE',
					'THE SOUND OF SLIVER','CROSSING AT OWN RISK'];

var index = 0;		// 视频轮播下标
var timer;
var hasRemove = true;

var rightToggle = document.querySelector('.controls.right');
var leftToggle = document.querySelector('.controls.left');

window.onload = () => {
	initHomeTitle();
	$('.home-title h1').eq(index).show();
	loadingDone(loopTimer);
}

rightToggle.onclick = ()=>{
	if(hasRemove){				// 防抖
		hasRemove=false;	
		clearInterval(timer);
		slideVideos(()=>{
			hasRemove = true;
			loopTimer();
		});
	}
}

leftToggle.onclick = () => {
	if(hasRemove){				// 防抖
		hasRemove=false;	
		clearInterval(timer);
		slideVideos(()=>{
			hasRemove = true;
			loopTimer();
		},true);
	}
}

function toggleslides(toggle,hasRemove){

}

function loopTimer(){
	// 显示方块蒙版
	$('.pattern')[0].style.visibility = 'visible';
	$('.home-title h1').eq(0).textillate('in');
	timer = setInterval(function(){
		slideVideos(()=>{
			$('.home-title h1').eq(index).textillate('in');
		});
	}, 4000);
}

function slideVideos(callback,direction){		// 切换视频 ,callback 切换回调
	if(direction){
		videos[index--].removeVideo(callback);	//当前视频隐藏

	}else{
		$('.home-title h1').eq(index).textillate('out');		// 当前视频标题隐藏
		disanima('out');
		videos[index++].removeVideo(callback);	//当前视频隐藏
	}
	
	if(index==videos.length){
		index=0;
	}

	if(index<0){
		index = videos.length-1;
	}
	
	videos[index].showVideo();
}


function disanima(eff){
	
	if(eff === 'in'){
		anime({													// discover 按钮隐藏
			targets: '.discover',
			scale: '1',
			opacity: '1'
		});
		$('.description').fadeIn(400);
	}else if(eff === 'out'){
		anime({													// discover 按钮隐藏
			targets: '.discover',
			scale: '1.2',
			opacity: '0'
		});

		$('.description').fadeOut(400);
	}
}

function createTitle(title,ineffect,outeffect){
	 $('.home-title').append(`<h1>${title}</h1>`);

	 $('.home-title h1').textillate({
				  // the default selector to use when detecting multiple texts to animate
				  selector: 'h1',
				  loop: false,
				  // sets the minimum display time for each text before it is replaced
				  minDisplayTime: 800,
				  // sets the initial delay before starting the animation
				  // (note that depending on the in effect you may need to manually apply
				  // visibility: hidden to the element before running this plugin)
				  initialDelay: 0,

				  // set whether or not to automatically start animating
				  autoStart: false,

				  // custom set of 'in' effects. This effects whether or not the
				  // character is shown/hidden before or after an animation
				  inEffects: [],

				  // custom set of 'out' effects
				  outEffects: [ 'fade' ],

				  // in animation settings
				  in: {
				      // set the effect name
				    effect: 'fadeInRightBig',

				    // set the delay factor applied to each consecutive character
				    delayScale: .3,

				    // set the delay between each character
				    delay: 50,

				    // set to true to animate all the characters at the same time
				    sync: false,

				    // randomize the character sequence
				    // (note that shuffle doesn't make sense with sync = true)
				    shuffle: true,

				    // reverse the character sequence
				    // (note that reverse doesn't make sense with sync = true)
				    reverse: false,

				    // callback that executes once the animation has finished
				    callback: function () {
				    	disanima('in');
				    }
				  },

				  // out animation settings.
				  out: {
				    effect: 'fadeOutLeftBig',
				    delayScale: .3,
				    delay: 50,
				    sync: false,
				    shuffle: false,
				    reverse: false,
				    callback: function () {
				    }
				  },

				  // callback that executes once textillate has finished
				  callback: function () {

				  },
				  type: 'char'
		});
}

function initHomeTitle(){
	homeTitles.forEach((e)=>{
		createTitle(e);
	})
}