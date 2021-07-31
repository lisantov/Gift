let sliderImageIndex = 0;

function nextSlide()
{
	if (sliderImageIndex < 3)
	{
		sliderImageIndex+=1;
		moveSlide();
	}
}
function previousSlide()
{
	if (sliderImageIndex >= 1)
	{
		sliderImageIndex-=1;
		moveSlide();
	}
}

function moveSlide()
{
	let slides = document.getElementsByClassName("slide");
	let slideWidth = slides[sliderImageIndex].width;

	let slideMargin = slideWidth * sliderImageIndex;
	let slidesList = document.getElementById("slidesList");
	slidesList.style.left = -slideMargin + 'px';
}

function init()
{
    let buttonNext =  document.getElementById("buttonNext");
    nextSlide();
    buttonNext.addEventListener ("click", nextSlide);
    let buttonPrevious =  document.getElementById("buttonPrevious");
    buttonPrevious.addEventListener ("click", previousSlide);
}
setTimeout(init, 0);
