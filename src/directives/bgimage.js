/* eslint-disable */
import { utilities } from "@/utilities"
const scrollController = new ScrollMagic.Controller()

function processFigure(figure, imgArray) {
	
    let screenSrcsData = imgArray,
        screenSrcs = screenSrcsData.slice().reverse(),
        loadingSrc = ""


    for (let i = 0; i < screenSrcs.length; i++) {
        if (window.innerWidth > screenSrcs[i].screen) {
            loadingSrc = screenSrcs[i].src
            break
        }
    }

    if (loadingSrc) {
        let img = new Image()
        img.src = loadingSrc;
        if (img.complete) {
            loadImage(loadingSrc, figure);
        } else {
        	img.onload = function() {
        		loadImage(loadingSrc, figure);
        	}
        }
    }
}

function loadImage(src, figure) {
    figure.style.backgroundImage = 'url('+ src +')';
    figure.classList.add('background__image--loaded')
    figure.classList.remove('background__image--preload')
}

export default {
    bind(el, binding, vnode) {
        let scene = new ScrollMagic.Scene({ triggerElement: el, triggerHook: 'onEnter' })
            .on('enter', function() {
                let triggerElem = this.triggerElement(),
                    resizeFunc = utilities.debounce(() => {
                        processFigure(el, binding.value)
                    }, 250)
                processFigure(el, binding.value);
                window.addEventListener('resize', resizeFunc)
            }).addTo(scrollController)
    }
}