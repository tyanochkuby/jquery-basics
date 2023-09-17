

$("document").ready(function(){ //run when html document is fully loaded
    $("button").dblclick(function(){ //by double click
        // $("#img1").mouseenter(function(){ //by mouse entering the image
        //     $("#img1").css('width', '500px');
        // });
    
        // $("#img1").mouseleave(function(){ //by mouse leaving the image
        //     $("#img1").css('width', '250px');
        // });

        $("#img1").hover(func1, func2)

        function func1(){
            $("#img1").css('width', '500px');
        }
        function func2(){
            $("#img1").css('width', '250px');
        }
    });

    
    
});