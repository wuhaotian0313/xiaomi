/*
* @Author: Administrator
* @Date:   2018-09-04 23:27:11
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-05 00:32:17
*/
window.onload=function(){
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



// 	let out=document.querySelector(".recommend .two");
// 	let btnleft=document.querySelector(".recommend .left");
// 	let btnright=document.querySelector(".recommend .right");
// 	let wh=parseInt(getComputedStyle(out,null).width)/3;
// 	let times=0;
// // console.log(out,btnleft,btnright,wh);
// 	btnright.onclick=function(){
// 		times++;
// 		if(times==3){
// 		times=2;
// 		}
// 		out.style.transform=`translate(${(-wh*times)}px)`;

// 	}
// 	btnleft.onclick=function(){
// 		times--;
// 		if(times==-1){
// 			times=0;
// 		}
// 		out.style.transform=`translate(${(-wh*times)}px)`;

// 	}

}