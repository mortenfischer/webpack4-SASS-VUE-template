import './styles/main.scss'
import Glide from '@glidejs/glide'

(function(){
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
        const copyFromIdentifier = event.currentTarget.dataset.copytargetclassname || event.currentTarget.dataset.copytargetsiblingclassname

        const copyTargetIsSibling = !!(event.currentTarget.dataset.copytargetsiblingclassname)

        const buttonText = event.currentTarget.querySelector('.clib-markup__copy-button-text')
        const copySVG = event.currentTarget.querySelector('.clib-markup__copy-svg')
        const checkmarkSVG = event.currentTarget.querySelector('.clib-markup__checkmark-svg')
        let originalButtonText = buttonText.innerText

        const copyTargetParent = copyTargetIsSibling ? event.currentTarget.parentNode : document

        const copyText = copyTargetParent.querySelector('.'+copyFromIdentifier);

        if(copyText.select){
            copyText.select();
        } else {
            const el = document.createElement('textarea');
            el.value = copyText.innerHTML;
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
        }

        
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
        const selectedButtonVisual = `clib-select-button__selected-visual--${htmlElement.id}`
        buttonVisual.className = `clib-select-button__selected-visual ${selectedButtonVisual}`
    
        buttonVisual.classList.remove("clib-select-button__selected-visual");

        buttonVisual.classList.add("clib-select-button__selected-visual");
    
        selectButtonElements.forEach(button => {
            button.classList.remove("clib-select-button--selected")
        })
        htmlElement.classList.add('clib-select-button--selected')
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

    if(document.querySelector('.glide')){
        const glide = new Glide('.glide', {
            type: 'carousel',
            perView: 1,
            focusAt: 'center',
            dragDistance: false,
            dragThreshold: 0,
            touchDistance: false
        })
        glide.mount()
    }
    
})()