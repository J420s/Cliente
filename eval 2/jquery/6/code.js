$(document).ready(() => {
    $("#img").click(function() {
        $(this).fadeOut(1000, function() {
            $(this).slideDown(1000, function() {
                $(this).slideUp(1000)
            })
        })
    })
})