$(document).ready(() => {
    $(".btn").click(function() {
        let myID = $(this).attr('id')
        if (myID.includes("img")) {
            $("#imagen").css("display", myID.split('-').pop())
        }
    });
})

$(document).ready(() => {
    $('[id*=btn-img]:visible').click(function() {
        $("#imagen").css("display", $(this).attr('id').split('-').pop())
    });
})

/**https://api.jquery.com/attribute-contains-selector/**/
/**https://www.w3schools.com/jquery/sel_attribute_contains_string_value.asp**/

/*  El selector 'Attribute Contains':
 *  
 *  
 */