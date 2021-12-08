// let sliderWrap = document.querySelector(".slider-wrap");
// let slider = document.querySelector("slider");
// let clonesWidth;
// let sliderWidth;
// let clones = [];
// let disableScroll = false;
// let scrollPos;
// let items = [...document.querySelectorAll(".slider-item")]
// console.log(items);
// let images = [...document.querySelectorAll(".img-div")]
// console.log(images);

// images.forEach((image, idx) => {
//     image.style.backgroundImage = `url(./img/${idx + 1}.jpg)`
// })

// items.forEach(item => {
//     let clone = item.cloneNode(true);
//     clone.classlist.add('clone');
//     slider.appendChild(clone);
//     clones.push(clone);

// })

// function getClonesWidth(){
//     let width = 0;
//     clones.forEach(clone =>{
//         width += clone.offsetWidth;
//     })
//     return width;
// }

// function getScrollPos(){
//         return window.scrollY;
// }

// function scrollUpdate(){
//     scrollPos = getScrollPos();
//     if(scrollPos + clonesWidth >= sliderWidth){
//         window.scrollTo({top: 1});
//      } else if(scrollPos <= 0){
//             window.scrollTo({top: sliderWidth - clonesWidth - 1})
//         }

//     slider.style.transform = `translateX ${window.scrollY}px`;
//     requestAnimationFrame(scrollUpdate)
// }


// function onLoad(){
//     calculatedDimentions()
//     document.body.style.height = `${sliderWidth}px`
//     window.scrollTo({top:1});
//     scrollUpdate()
// }
// function calculatedDimentions(){
//     sliderWidth = slider.getBoundingClientRect().width;
//     clonesWidth = getClonesWidth();
// }


// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "img/"+images[i]);
	
}