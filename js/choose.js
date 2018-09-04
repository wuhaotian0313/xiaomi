/*
* @Author: ravaille
* @Date:   2018-09-04 18:34:59
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-04 21:49:37
*/
window.onload=function(){
	let lis=document.querySelectorAll(".banner .aside li");
	let son=document.querySelectorAll(".son");
	let banner=document.getElementsByClassName("banner");
	console.log(lis,son,banner);
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			for(let j=0;j<son.length;j++){
				son[j].style.display="none";
			}
			son[i].style.display="block";
		}
	}


}