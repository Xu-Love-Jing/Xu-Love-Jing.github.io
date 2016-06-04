var i =0;
$(window).on('load',function(){
	waterFall();
	var dataInt={"data":[{"src":31},{"src":32},{"src":33},{"src":34}]};
	$(window).on('scroll',function(){
		if(checkScrollSlide()){
			if(i<126){
			$.each(dataInt.data,function(key,value){
				var oBox=$('<div>').addClass('box').appendTo($('#main'));
				var oPic=$('<div>').addClass('pic').appendTo(oBox);
				$('<img>').attr('src','images/'+$(value).attr('src')+".jpg").appendTo(oPic);
				
			});
			
			waterFall();
		}else{
			$.each(dataInt.data,function(key,value){
				var oBox=$('<div>').addClass('box').appendTo($('#main'));
				var oPic=$('<div>').addClass('pic').appendTo(oBox);
				$('<img>').attr('src','').appendTo(oPic);
				
			});
		}}
		$.each(dataInt.data, function(key,value) {
				    i =$(value).attr('src')+4;
					$(value).attr('src',i);
				});
	});
	$(".pic").mouseover(function(){
		
	});
});


function waterFall() {
	var $boxs=$('#main>div');
	var w=$boxs.eq(0).outerWidth();
	var cols=Math.floor($(window).width()/w);
	$("#main").width(w*cols).css('margin','0 auto');
	var hArr=[];
	$boxs.each(function(index,value){
		var h=$boxs.eq(index).outerHeight();
		if(index<cols){
			hArr.push(h);
		}else {
			minH=Math.min.apply(null,hArr);
			var minHeightIndex=$.inArray(minH,hArr);
			// console.log(value);
			$(value).css({
				'position':'absolute',
				'top':minH+'px',
				'left':minHeightIndex*w+'px'
			});
			hArr[minHeightIndex]+=$boxs.eq(index).outerHeight();
		}
	});
	// console.log(hArr);
}

function checkScrollSlide() {
	var $lastBox=$('#main>div').last();
	var lastBoxDis=$lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
	var scrollTop=$(window).scrollTop();
	var documentH=$(window).height();
	return (lastBoxDis<scrollTop+documentH)?true:false;

}