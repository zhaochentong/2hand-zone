function byId(id) {
	return typeof(id) === "string"?document.getElementById(id):id;
}

function byClass(className){
	return typeof(className) === "string"?document.getElementsByClassName(className):className;
}

var	menu = byId("menu"),
	subMenu = byClass("sub-menu"),
	mainSideMenu= byId("side-menu"),
	sideMenu = byClass("sub-side-menu"),
	content = byId("side-menu-content"),
	pics = byClass("sub-banner-slide"),
	dots = byId("dots").getElementsByTagName("span"),
	bannnr = byId("banner"),
	index = 0,
	next = byId("next"),
	prev = byId("prev");

function slideImg(){

	/*主目录绑定弹出子目录背景事件*/
	menu.onmouseover = function(){
		content.style.display = "block";
	}

	/*主目录绑定弹出子目录文字*/
	for(var i = 0;i<subMenu.length;i++){
		subMenu[i].setAttribute('data-index',i);
		subMenu[i].onmouseover = function(){
			var idx = this.getAttribute('data-index');
			for(var j=0;j<sideMenu.length;j++){
				sideMenu[j].style.display = "none";
				subMenu[j].style.background = "none";
			}
			mainSideMenu.style.display = "block";
			sideMenu[idx].style.display = "block";
			subMenu[idx].style.background = "rgba(0,0,0,0.1)";
		}
	}

	/*主目录绑定鼠标移出事件*/
	menu.onmouseout = function(){
		mainSideMenu.style.display = "none";
		for(var i=0;i<subMenu.length;i++){
			subMenu[i].style.background = "none";
		}
	}

	/*子目录绑定鼠标移入事件*/
	mainSideMenu.onmouseover = function(){
		mainSideMenu.style.display = "block";
	}

	/*子目录绑定鼠标移出事件*/
	mainSideMenu.onmouseout = function(){
		mainSideMenu.style.display = "none";
	}


	/*圆点绑定事件*/
	for(var i=0;i<pics.length;i++){
		dots[i].id = i;
		dots[i].onclick = function(){
			index = this.id;
			changeImg();
		}
	}

	/*鼠标离开自动轮播效果*/
	banner.onmouseout = function(){
		timer = setInterval(function(){
			index++;
			if (index>pics.length-1) {
				index = 0;
			}
			changeImg();
		},3000)
	}

	/*在banner上直接触发鼠标移开效果*/
	banner.onmouseout();

	/*鼠标移入清除自动轮播效果*/
	banner.onmouseover = function(){
		clearInterval(timer);
	}

	/*前后按钮绑定事件*/
	next.onclick = function(){
		index++;
		if(index>pics.length-1){
			index = 0;
		}
		changeImg();
	}

	prev.onclick = function(){
		index--;
		if (index<0) {
			index = pics.length-1;
		}
		changeImg();
	}




	/*图片圆点改变*/
	function changeImg(){
		for(var i=0;i<pics.length;i++){
			pics[i].style.display = "none";
			dots[i].className = "";
		}
		pics[index].style.display = "block";
		dots[index].className = "active";
	}
}

slideImg();

/*登录注册按钮绑定事件*/
/*登录按钮绑定事件*/

var layerMask = byId("layer-mask"),
	loginLink = byId("loginLink"),
	layerPop = byId("layer-pop"),
	layerContent = byId("layer-content"),
	loginHtml = byId("loginHtml").innerHTML,
	regeLink = byId("regeLink");
	regeHtml = byId("regeHtml").innerHTML;

function showLayers(){
	layerMask.style.display = "block";
	layerPop.style.display = "block";
	layerContent.innerHTML = loginHtml;
}

function showRegeLayer(){
	layerMask.style.display = "block";
	layerPop.style.display = "block";
	layerPop.style.width = 400 + "px";
	layerPop.style.height = 350 + "px";
	layerContent.innerHTML = regeHtml;
}

loginLink.onclick = showLayers;
regeLink.onclick = showRegeLayer;

$(".li").eq(0).on('click',function(){
	console.log('hello');
})


