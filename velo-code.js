
import wixAnimations from 'wix-animations';
let timeline = wixAnimations.timeline()

$w.onReady(function () {


});



export function vectorImage2_click(event) {
	$w('#image1, #text1').show('fade')
}



export function vectorImage4_click(event) {
	$w('#image3, #text3').show('fade')
}

export function vectorImage5_click(event) {
	$w('#image4, #text4').show('fade')
}


export function vectorImage3_click_1(event) {
	$w('#image2, #text2').show('fade')
}


export function vectorImage7_click(event) {
	$w('#image5, #text5').show('fade')

}


export function vectorImage8_click(event) {
	$w('#image6, #text6').show('fade')
}


export function vectorImage9_click(event) {
	$w('#image7, #text7').show('fade')
}


export function vectorImage10_click(event) {
	$w('#image8, #text8').show('fade')
}


export function vectorImage1_mouseIn(event) {
	timeline.add($w('#vectorImage1'), {'duration':200, 'scale':1.15})
	timeline.play()
	
}

export function vectorImage1_mouseOut(event) {
	timeline.add($w('#vectorImage1'), {'duration':200, 'scale': 1})
}



export function vectorImage16_click(event) {
	$w('#image10, #text10').show('fade')
}


export function vectorImage12_click_1(event) {
	$w('#image9, #text9').show('fade') 

}


export function vectorImage14_click_1(event) {
	$w('#image12, #text12').show('fade') 
}


export function vectorImage17_click_1(event) {
	$w('#image11, #text11').show('fade')
}


export function vectorImage11_mouseIn(event) {
	timeline.add($w('#vectorImage11'), {'duration':200, 'scale':1.15})
	timeline.play()
}




export function vectorImage11_mouseOut(event) {
	timeline.add($w('#vectorImage11'), {'duration':200, 'scale': 1}) 
}

/**
*	Adds an event handler that runs when the mouse pointer is moved
 onto the element.

 You can also [define an event handler using the Properties and Events panel](https://support.wix.com/en/article/velo-reacting-to-user-actions-using-events).
	[Read more](https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn)
*	 @param {$w.MouseEvent} event
*/
export function vectorImage6_mouseIn_1(event) {
	timeline.add($w('#vectorImage6'), {'duration':200, 'scale':1.15})
	timeline.play()
}

export function vectorImage6_mouseOut_1(event) {
	timeline.add($w('#vectorImage6'), {'duration':200, 'scale': 1})