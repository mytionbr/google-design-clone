let input_search = document.querySelector("#search_bar")
let input_text_icons;

input_search.addEventListener('focus',()=>{
    input_search.parentElement.classList.add('search_bar_action');
})

input_search.addEventListener('focusout',()=>{
    input_search.parentElement.classList.remove('search_bar_action');
})


input_search.addEventListener('input',()=>{
    input_text_icons = update_icon_reference()
    if(input_search.value.length > 0){
        for( icon of input_text_icons){
           icon.style.color="#70757a"
        }
    }else {
        for( icon of input_text_icons){
            icon.style.color="white"
        }
    }
})

input_search.addEventListener('inputout',()=>{
    input_text_icons = update_icon_reference()
    for( icon of input_text_icons){
        icon.style.color="white"
    }
})

function update_icon_reference(){
    return  document.querySelectorAll(".input_text_icons[data-input-icon]")
}