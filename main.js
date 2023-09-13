function toggleDetail(e){
    // debuging
    const target = $(e.target)
    // debuging
    // mencari ortu
    // console.log($(target).parents());
 
    if($(target).hasClass("active")){
        $(target).html("More Info").removeClass("active");
    } else {
           $(target).html("Less info").addClass("active")
    }
    
    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")
    // debuging lagi
    // mencari anak
    // console.log($(item).children(".about-exp-item-detail"));
    $(detail).slideToggle()
 
}

function onFormSubmit(e) {
    e.preventDefault()
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const message = $("#inp_message")

if(!$(email).val()){
    alert("Email is Required")
} else if (!$(subject).val()){
    alert("subject is Required")
} else if (!$(message).val()){
    alert("Message is Required")
} else {
    alert("form Submitted")
    !$(email).val("")
    !$(subject).val("")
    !$(message).val("")
 
}
}