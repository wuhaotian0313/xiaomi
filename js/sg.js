/*
* @Author: ravaille
* @Date:   2018-09-04 15:26:04
* @Last Modified by:   ravaille
* @Last Modified time: 2018-09-04 16:19:28
*/
window.onload=function(){
	let btn=document.getElementsByClassName("btn");
	let milist=document.querySelectorAll(".shop_module-bottom")[0];
	let w=parseInt(getComputedStyle(milist,null).width)/3;
	console.log(btn);
	let times=0;
	
	btn[0].onclick=function(){
		times--;
		if(times==-1){
			times=0;
		}
		milist.style.transform=`translate(${(-w*times)}px)`;
	}
	btn[1].onclick=function(){
		times++;
		if (times==3) {
			times=2;
		}
		milist.style.transform=`translate(${(-w*times)}px)`;
	}



}