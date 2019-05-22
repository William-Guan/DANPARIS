// 加载页面进度条
var bar =new progressbar();

function loadingDone(callback,doneCallback){
	$('.loader').show().find('img').show();
	if(callback) callback();
	setTimeout(()=>action(()=>{
		$('.loader img').fadeOut(1000,()=>{
			$('.loader').slideUp(()=>{
				if(doneCallback)doneCallback();
			});
		});
	}),1000);
}
