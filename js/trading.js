function nav_pop(){
		$('.nav_item1').mouseover(function(){
			var t = setTimeout(function(){
				$('.sub_nav_item1').show();
			},120);
		})

		$('.nav_item1').mouseout(function(){
			var t = setTimeout(function(){
				$('.sub_nav_item1').hide();
			},120);
		})

		$('.nav_item2').mouseover(function(){
			var t = setTimeout(function(){
				$('.sub_nav_item2').show();
			},120);
		})

		$('.nav_item2').mouseout(function(){
			var t = setTimeout(function(){
				$('.sub_nav_item2').hide();
			},120);
		})

		$('.nav_item3').mouseover(function(){
			var t = setTimeout(function(){
				$('.sub_nav_item3').show();
			},120);
		})

		$('.nav_item3').mouseout(function(){
			var t = setTimeout(function(){
				$('.sub_nav_item3').hide();
			},120);
		})

		$('.nav_item4').mouseover(function(){
			var t = setTimeout(function(){
				$('.sub_nav_item4').show();
			},120);
		})

		$('.nav_item4').mouseout(function(){
			var t = setTimeout(function(){
				$('.sub_nav_item4').hide();
			},120);
		})
}
nav_pop();


