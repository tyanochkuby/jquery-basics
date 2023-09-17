function func1(){
    //$("div").css('background-color', 'orange'); //select all divs
    $("#p1").css('font-style', 'italic'); //select element with id 'p1'
    $(".first-row").css('color', 'blue'); //select elements with class 'first-row'
    // $("#div1, #div2").css('background-color', 'blue');
    $("#div1, li").css('background-color', 'violet'); //select div1 id and all li elements
    $("div > p").fadeToggle(); //select p elements inside div tags
    $("p:first").fadeToggle(); //first p tag from all the html doc
    //$("li:even").fadeToggle(); //selects 2n - 1 li elements
    $("li:odd").fadeToggle(); //selects 2n li elements
}