$(function(){

	/*点击type元素添加下划线*/
	$('.condition').on('click',function(event){
		$('.condition').removeClass('underline');
		$(event.target).addClass('underline');
		$('.item').addClass('hide');
		var i = '.group-' + $(event.target).html();
		$(i).removeClass('hide');
	})

	/*点击type的子元素添加下划线*/
	$('.item-condition').on('click',function(event){
		var i = '.'+$(event.target).closest('div').attr('class').slice(5);
		$(i).find('a').removeClass('underline');
		// $('.item-condition').removeClass('underline');
		$(event.target).addClass('underline');
	})

	/*收藏按钮绑定事件*/
	$('.save-button').on('click',function(){
		if($(this).attr('class') === 'save-button'){
			$(this).removeClass('save-button').addClass('saved-button');
		}
		else{
			$(this).removeClass('saved-button').addClass('save-button');
		}
	})

	$('.page_number').on('focus',function(){
		$('.go_btn').css({'background-color':'rgba(0,0,0,0.7)','color':'#fff'});
	}).on('blur',function(){
		$('.go_btn').css({'background-color':'#ddd','color':'#000'});
	})


})