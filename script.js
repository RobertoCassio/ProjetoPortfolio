const target = document.querySelectorAll('[data-animation]');  //Seleciono todos elementos com data-animation
const animationClass = 'animate';

animationScroll();

function animationScroll(){
    const windowTop = window.innerHeight*0.75; //Aqui eu pego a altura da janela no geral
  
    target.forEach(function(element){
        const elTop = element.getBoundingClientRect().top; //Aqui pego a posição do objeto em relação ao local atual

        const visibleSection = (elTop - windowTop) < 0; //Se um menos o outro for < 0, então estamos em cima do elemento alvo

        if(visibleSection){ //Sendo assim, podemos chamar a função de animation
            element.classList.add(animationClass);
        }
        else{
            element.classList.remove(animationClass);
        }
        console.log("Elemento: " + elTop);
        console.log("Página: "+ windowTop);
    })

}

window.addEventListener('scroll', function(){        //Toda vez que o usuário scrollar chama o animationScroll
    animationScroll();
})