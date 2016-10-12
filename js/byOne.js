window.onload = function () 
{
	var obtnPrev_main = document.getElementsByClassName('prev')[0];
	var obtnNext_main = document.getElementsByClassName('next')[0];
	var oDiv_main = document.getElementsByClassName('main')[0];
	var oUl_main = document.getElementsByClassName('main_ul')[0];
	var aLi_main = oUl_main.getElementsByTagName('li');
	var aLi_mainNav =document.getElementsByClassName('mainNav_ul')[0].getElementsByTagName('li');
	var oWidth_main = parseInt(getStyle(aLi_main[0],'width'));
	var curIndex_main = 0;

	/*鼠标滑过相关*/
	oDiv_main.onmouseover = function () 
	{
		obtnPrev_main.style.display = "inline-block";
		obtnNext_main.style.display = "inline-block";
	};
	obtnPrev_main.onmouseover = function () 
	{
		setMov(obtnPrev_main,{opacity: 60});
	};
	obtnNext_main.onmouseover = function () 
	{
		setMov(obtnNext_main,{opacity: 60});
	};
	obtnPrev_main.onmouseout = function () 
	{
		setMov(obtnPrev_main,{opacity: 30});
	};
	obtnNext_main.onmouseout = function () 
	{
		setMov(obtnNext_main,{opacity: 30});
	};	
	oDiv_main.onmouseout = function () 
	{
		obtnPrev_main.style.display = "none";
		obtnNext_main.style.display = "none";
	};

	/*给主图像全部加index*/
	for (var i = 0; i < aLi_main.length; i++) 
	{
		aLi_main[i].index = i-1;
	}

	/*点击导航相关事件*/
	for (var j = 0; j < aLi_mainNav.length; j++) 
	{
		aLi_mainNav[j].index = j;
		aLi_mainNav[j].onclick = clickNav;
	}
	function clickNav() 
	{
		curIndex_main = this.index;
		for (var i = 0; i < aLi_mainNav.length; i++) 
		{
			aLi_mainNav[i].className = '';
		}
		this.className = 'active';
		setMov(oUl_main,{left: -(this.index+1)*oWidth_main});
	}

	/*点击左箭头*/
	obtnPrev_main.onclick = function () 
	{
		movLeft();
	};
	function movLeft() 
	{
		aLi_mainNav[curIndex_main].className = "";
		if (curIndex_main===0) 
		{
			curIndex_main = aLi_main.length-3;
			//这里不能用setMov的fnEnd来重置位置，连点会出问题
			oUl_main.style.left = -(curIndex_main+2)*oWidth_main+'px';
		}
		else
		{
			curIndex_main--;
		}
		setMov(oUl_main,{left: -(curIndex_main+1)*oWidth_main});
		aLi_mainNav[curIndex_main].className = "active";
	}

	/*点击右箭头*/
	obtnNext_main.onclick = function () 
	{
		movRight();
	};
	function movRight() 
	{
		aLi_mainNav[curIndex_main].className = "";
		if (curIndex_main===4) 
		{
			curIndex_main = 0;
			oUl_main.style.left = -curIndex_main*oWidth_main+'px';
		}
		else
		{
			curIndex_main++;
		}
		setMov(oUl_main,{left: -(curIndex_main+1)*oWidth_main});
		aLi_mainNav[curIndex_main].className = "active";
	}

};