/*
* @Author: Administrator
* @Date:   2018-09-03 22:17:45
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-03 23:29:12
*/
window.onload=function(){
	let list=document.querySelectorAll(".banner .banner_img img");
	let dots=document.querySelectorAll(".banner .ui-pager li");
	let btnL=document.getElementsByClassName("ui-prev")[0];
	let btnR=document.getElementsByClassName("ui-next")[0];
	let banner=document.querySelectorAll(".banner")[0];
	let widths=parseInt(getComputedStyle(banner,null).width);
	console.log(list);
	
	list[0].style.left=0;
	dots[0].classList.add("hot");

	let current=next=0;
	let flag=true;

	let t=setInterval(move, 10000);
	function move(){
		next++;
		if(next==list.length){
			next=0;
		}
		list[next].style.left=widths+"px";
		animate(list[current],{left:-widths});
		animate(list[next],{left:0},function(){
			flag=true;
		});
		dots[current].classList.remove("hot");
		dots[next].classList.add("hot");
		current=next;
	}
	function moveL(){
		next--;
		if(next<0){
			next=list.length-1;
		}
		list[next].style.left=-widths+"px";
		animate(list[current],{left:widths});
		animate(list[next],{left:0},function(){
			flag=true;
		});
		dots[current].classList.remove("hot");
		dots[next].classList.add("hot");
		current=next;
	}
	btnL.onclick=function(){
		// if(next==0){
		// 	return;
		// }
		if(!flag){
			return;
		}
		flag=false;
		clearInterval(t);
		moveL();
	}
	btnR.onclick=function(){
		// if(next==listlength-1){
		// 	return;
		// }
		if(!flag){
			return;
		}
		flag=false;
		clearInterval(t);
		move();
	}
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,2000);
	}
	for(let i=0;i<dots.length;i++){
	dots[i].onclick=function(){
		if(current==i){
			return;
		}else if(current>i){
			list[i].style.left=-widths+"px";
			animate(list[current],{left:widths});
			animate(list[i],{left:0});
			dots[current].classList.remove("hot");
			dots[i].classList.add("hot");
		}else if(current<i){
			list[i].style.left=widths+"px";
			animate(list[current], {left:-widths});
			animate(list[i], {left:0});
			dots[current].classList.remove("hot");
			dots[i].classList.add("hot");
		}
		next=current=i;
	}
}
}