
//je recuper la nav
const navigation = document.querySelector('nav');

window.addEventListener('scroll',function nav() {
    if (window.scrollY > 30) {
        navigation.classList.add('anim-nav');
    }else{
        navigation.classList.remove('anim-nav'); 
    }
})

//Anim click
window.addEventListener('click', (e) => {
        const rond = document.createElement('div');
        rond.className = 'clickAnim';
        rond.style.left = `${e.pageX - 50}px`;
        rond.style.top = `${e.pageY - 50}px`;
        document.body.appendChild(rond);

        setTimeout(() => {
            rond.remove();
        }, 1500)
})

// Animation input

const validationInput = document.querySelector('input');

window.addEventListener('input',(e) =>{
    if (e.target.value.length >= 3) {
        validationInput.style.borderColor = "green";
    }else{
        validationInput.style.borderColor = "red";
    }
})

