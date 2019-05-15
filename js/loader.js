// 加载页面进度条
var bar =new progressbar();

function loadingDone(callback){
	setTimeout(()=>action(()=>{
		$('.loader img').fadeOut(1000,()=>{
			$('.loader').slideUp(()=>{
				callback();
			});
		});
	}),1000);
}

