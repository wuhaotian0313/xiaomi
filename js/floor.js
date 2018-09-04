/*
* @Author: ravaille
* @Date:   2018-09-04 09:28:41
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-05 00:54:30
*/
window.onload=function(){
	let wh=window.innerHeight;
	let floors=document.querySelectorAll(".floor");
	let search=document.querySelector("search");
	let arr=[];
	for(let i=0;i<floors.length;i++){
		arr.push(floors[i].offsetTop);
	}
	window.onscroll=function(){
		let bh=document.body.scrollTop||document.documentElement.scrollTop;
		arr.forEach(function(value,index){
			// console.log(value);
			if(wh+bh>=value+300){
				let imgs=floors[index].querySelectorAll("img");
				console.log(imgs);
				imgs.forEach(function(element){
					element.src=element.getAttribute("imgsrc");
				})
			}
			// if(wh+bh>=value){
			// 	let imgs=floor[index].querySelectorAll(".floor img");
			// 	// console.log(imgs);
			// 	imgs.forEach(function(element){
			// 		element.src=element.getAttribute("imgsrc");
			// 	})
			// }
		})
// 头部搜索
		// if(bh>500){
		// 	search.style.top=0;
		// }
		// else{
		// 	seachr.style.top="-60px";
		// }


	}	
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
		t=setInterval(move,10000);
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


	let lis=document.querySelectorAll(".banner .aside li");
	let son=document.querySelectorAll(".son");
	// let banner=document.getElementsByClassName("banner");
	// console.log(lis,son,banner);
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			for(let j=0;j<son.length;j++){
				son[j].style.display="none";
			}
			son[i].style.display="block";
		}
	}



function contentbanner(imgs,dots,leftBtn,rightBtn,widths,active){

	let now1=0;
	let next1=0;
	let flag1=true;
	
	// console.log(box,leftBtn,rightBtn,dot,width1);
	imgs[0].style.left=0;
	dots[0].classList.add(active);

    function moveL() {
        next1++;
        if (next1==imgs.length){
            next1=0;
        }
            imgs[next1].style.left=widths+"px";
            animate(imgs[next1],{left:0},function(){
            	flag1=true;
            });
            animate(imgs[now1],{left:-widths});
            dots[next1].classList.add(active);
            dots[now1].classList.remove(active);
            now1=next1;
            
    }
    function moveR() {
        next1--;
        if (next1<0){
            next1=imgs.length-1;
        }
        imgs[next1].style.left=-widths+"px";
        animate(imgs[next1],{left:0},function(){
        	flag1=true;
        });
        animate(imgs[now1],{left:widths});
        dots[next1].classList.add(active);
        dots[now1].classList.remove(active);
        now1=next1;
    }
    leftBtn.onclick=function () {
    	if(!flag1){
    		return;
    	}
    	if(next1==0){
    		return;
    	}
    	flag1=false;
        moveR();
    };
    rightBtn.onclick=function () {
    	if(!flag1){
    		return;
    	}
    	if(next1==dots.length-1){
    		return;
    	}
    	flag1=false;
        moveL();
    };

    //鼠标点击
    
    for(let i=0;i<dots.length;i++){
    	dots[i].onclick=function(){
    		if(next1==i){
    			return;
    		}else if(next1>i){
    			imgs[i].style.left=`${-widths}px`;
    			animate(imgs[now1],{left:widths});
    			animate(imgs[i],{left:0});
    			dots[now1].classList.remove(active);
    			dots[i].classList.add(active)
    		}else if(next1<i){
    			imgs[i].style.left=`${widths}px`;
    			animate(imgs[i],{left:0});
    			animate(imgs[now1],{left:-widths});
    			dots[now1].classList.remove(active);
    			dots[i].classList.add(active);
    		}
    		now1=i;
    		next1=i;
    	}
    }

}



	let box1=document.querySelectorAll(".box1 .innerBox1");
	let dot1=document.querySelectorAll(".box1 .dot .box");
	let Lbtn1=document.querySelectorAll(".box1 .tip1")[0];
	let Rbtn1=document.querySelectorAll(".box1 .tip2")[0];
	let width1=parseInt(getComputedStyle(box1[0],null).width);
	console.log(box1,dot1,Lbtn1,Rbtn1,width1);
	contentbanner(box1,dot1,Lbtn1,Rbtn1,width1,"boxdot");

	let box2=document.querySelectorAll(".box2 .innerBox1");
	let dot2=document.querySelectorAll(".box2 .dot .box");
	let Lbtn2=document.querySelectorAll(".box2 .tip1")[0];
	let Rbtn2=document.querySelectorAll(".box2 .tip2")[0];
	let width2=parseInt(getComputedStyle(box2[0],null).width);
	console.log(box2,dot2,Lbtn2,Rbtn2);
	contentbanner(box2,dot2,Lbtn2,Rbtn2,width2,"boxdot");

	let box3=document.querySelectorAll(".box3 .innerBox1");
	let dot3=document.querySelectorAll(".box3 .dot .box");
	let Lbtn3=document.querySelectorAll(".box3 .tip1")[0];
	let Rbtn3=document.querySelectorAll(".box3 .tip2")[0];
	let width3=parseInt(getComputedStyle(box3[0],null).width);
	console.log(box3,dot3,Lbtn3,Rbtn3,width3);
	contentbanner(box3,dot3,Lbtn3,Rbtn3,width3,"boxdot");

	let box4=document.querySelectorAll(".box4 .innerBox1");
	let dot4=document.querySelectorAll(".box4 .dot .box");
	let Lbtn4=document.querySelectorAll(".box4 .tip1")[0];
	let Rbtn4=document.querySelectorAll(".box4 .tip2")[0];
	let width4=parseInt(getComputedStyle(box4[0],null).width);
	console.log(box4,dot4,Lbtn4,Rbtn4,width4);
	contentbanner(box4,dot4,Lbtn4,Rbtn4,width4,"boxdot");




let out=document.querySelector(".Recommend .Recommend-feet");

let btnleft=document.querySelector(".Recommend-head-rightbox .Recommend-guide-left");
let btnright=document.querySelector(".Recommend-head-rightbox .Recommend-guide-right");
let w1=parseInt(getComputedStyle(out,null).width)/3;
let time=0;
// // console.log(out,btnleft,btnright,wh);
btnright.onclick=function(){
	time++;
	if(time==3){
		time=2;
	}
	out.style.transform=`translate(${(-w1*time)}px)`;

}
btnleft.onclick=function(){
	time--;
	if(time==-1){
		time=0;
	}
	out.style.transform=`translate(${(-w1*time)}px)`;

}
console.log(out,btnleft,btnright,w1);
}
	// 	


	// 	}





