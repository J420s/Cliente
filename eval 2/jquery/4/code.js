$(document).ready(() => {
    $("#sumar").change(function() {
        let num1 = parseInt($("#num1").val())
        let num2 = parseInt($("#num2").val())
        let input = '<input id="dynamic"type="number"class="form-control"style="display:none" value="' + (num1 + num2) + '"></div>'

        $("form").append(input)
        $("#dynamic").toggle()

    });
})