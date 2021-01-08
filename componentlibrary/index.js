import './styles/main.scss'
import Glide from '@glidejs/glide'

(function(){
    console.log("working")
    const copyToClipboardElements = document.querySelectorAll('.copyToClipboard')
    const selectButtonElements = document.querySelectorAll('.clib-select-button')
    const buttonVisual = document.querySelector('.clib-select-button__selected-visual')
    const clipComponent = document.querySelector('.clib-component')
    const selectedButton = document.querySelector('.clib-select-button--selected')
    const demoModeButton = document.querySelector('.clib-navigation__slider')
    let toggleStatus = false
    
    if(demoModeButton){
        demoModeButton.onclick = function () {
            !toggleStatus ? clipComponent.classList.add('clib-component--demo-active') : clipComponent.classList.remove('clib-component--demo-active')
            toggleStatus = !toggleStatus;
        }
    }
    
    function copyToClipboard(event) {
        const copyFromIdentifier = event.currentTarget.id
        const buttonText = event.currentTarget.querySelector('.clib-markup__copy-button-text')
        const copySVG = event.currentTarget.querySelector('.clib-markup__copy-svg')
        const checkmarkSVG = event.currentTarget.querySelector('.clib-markup__checkmark-svg')
        let originalButtonText = buttonText.innerText
        const copyText = document.querySelector(`.${copyFromIdentifier}`);
    
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
        document.execCommand("copy");
    
        if (buttonText) {
            copySVG.style.opacity = 0
            checkmarkSVG.style.opacity = 1
            buttonText.innerText = "Copied!"
    
            setInterval(function () {
                copySVG.style.opacity = 1
                checkmarkSVG.style.opacity = 0
                buttonText.innerText = originalButtonText
            }, 3000);
        }
    }
    
    function selectButton(htmlElement, buttonVisual) {
        console.log("click")
        const selectedButtonVisual = `clib-select-button__selected-visual--${htmlElement.id}`
        buttonVisual.className = `clib-select-button__selected-visual ${selectedButtonVisual}`
    
        buttonVisual.classList.remove("clib-select-button__selected-visual");
        void buttonVisual.offsetWidth;
        buttonVisual.classList.add("clib-select-button__selected-visual");
    
        selectButtonElements.forEach(button => {
            button.classList.remove("clib-select-button--selected")
            button.style.fontFamily = "Volte-Regular"
        })
        htmlElement.classList.add('clib-select-button--selected')
        setTimeout(function () { htmlElement.style.fontFamily = "Volte-Semibold" }, 300)
    }
    
    copyToClipboardElements.forEach(htmlElement => {
        htmlElement.addEventListener('click', event => {
            copyToClipboard(event)
        })
    })
    
    selectButtonElements.forEach(htmlElement => {
        htmlElement.addEventListener("click", event => {
            selectButton(htmlElement, buttonVisual)
        })
    })
    
    if (selectedButton) {
        selectedButton.style.fontFamily = "Volte-Semibold"
    }
    
    const glide = new Glide('.glide', {
        type: 'carousel',
        perView: 1,
        focusAt: 'center',
        dragDistance: false,
        dragThreshold: 0,
        touchDistance: false
    })
    glide.mount()
})()