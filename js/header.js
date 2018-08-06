function byId(id) {
	return typeof(id) === "string"?document.getElementById(id):id;
}

function byClass(className){
	return typeof(className) === "string"?document.getElementsByClassName(className):className;
}

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



