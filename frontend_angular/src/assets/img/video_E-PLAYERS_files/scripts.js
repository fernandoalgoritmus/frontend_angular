$(Document).ready(function(){

    let atualSlide =  1   
    let listSlide = ["banner-f1", "banner-car", "banner-cs", "banner-lol"]

    setInterval(changeSlide,2000)
    function changeSlide(){
        if(atualSlide > 0){
            $("#carousel").removeClass(listSlide[atualSlide - 1])
        }else{
            $("#carousel").removeClass(listSlide[listSlide.length - 1])
        }
        
        $("#carousel").addClass(listSlide[atualSlide])
        atualSlide ++;

        if(atualSlide > listSlide.length - 1){
            atualSlide = 0
        }
    
    };


    $('#bars').click(function(){
    if ($('#menu').hasClass('menu-ativo')){
     $('#menu').removeClass('menu-ativo')
    }else{
        $('#menu').addClass('menu-ativo')
    }
    })
})


// function cadastrarNewsletter(){
//     let email = document.getElementById("campo-email").value
//     alert(email)
//  }
 
//  function mostrarMenu($event){
//      //identificar o elemento menu
//  let menu = document.getElementById("menu")
 
//      // mudar a visualização do menu
 
//      if(getComputedStyle(menu).display == "none"){
//          menu.style.display = "flex"
//      }else{
//          menu.style.display = "none"
//      }  
 
//          event.preventDefault()
//  }