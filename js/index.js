let input_search = document.querySelector("#search_bar")
let input_text_icons;
let clear_icon =document.querySelector("#clear_icon")

let actions_text_input_icons = {
    addEffect: ()=>{
        for( icon of input_text_icons){
            console.log(icon)
           clear_icon.style.cursor = "pointer"
           icon.style.color="#70757a"
        }
    },
    removeEffect: ()=>{
        clear_icon.style.cursor = "default"
        for( icon of input_text_icons){
            icon.style.color="white"
        }
    }
}

window.addEventListener('load',()=>{
    clear_icon =document.querySelector("#clear_icon")
    input_text_icons = update_icon_reference()
})

input_search.addEventListener('focus',()=>{
    input_search.parentElement.classList.add('search_bar_action');
})

input_search.addEventListener('focusout',()=>{
    input_search.parentElement.classList.remove('search_bar_action');
})


input_search.addEventListener('input',()=>{
    if(input_search.value.length > 0){
        actions_text_input_icons.addEffect()
    }else {
        for( icon of input_text_icons){
            actions_text_input_icons.removeEffect()
        }
    }
})

input_search.addEventListener('inputout',()=>{
    for( icon of input_text_icons){
        actions_text_input_icons.removeEffect()
    }
})

clear_icon.addEventListener('click',()=>{
    input_search.value = ''
    actions_text_input_icons.removeEffect()
})

function update_icon_reference(){
    return  document.querySelectorAll(".input_text_icons[data-input-icon]")
}