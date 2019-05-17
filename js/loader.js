// 加载页面进度条
var bar =new progressbar();

function loadingDone(callback){
	$('.loader').show().find('img').show();
	
	setTimeout(()=>action(()=>{
		$('.loader img').fadeOut(1000,()=>{
			$('.loader').slideUp(()=>{
				if(callback) callback();
			});
		});
	}),1000);
}
