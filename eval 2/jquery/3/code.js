$(document).ready(() => {
    $("input[type='radio']").click(function() {
        let color = this.value
        $("#myP").css("background-color", color)
    });
})