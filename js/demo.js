$(function(){
    $('div').click(function(){
        var top=$(this).css("top");
        var left=$(this).css("left");
        var zIndex=$(this).css("z-index");

        var top2=$('#selected').css("top");
        var left2=$('#selected').css("left");
        var zIndex2=$('#selected').css("z-index");

        $('#selected').animate({"top":top,"left":left}).css("z-index",zIndex).removeAttr('id');

        $(this).animate({ "top": top2, "left": left2 }).css("z-index", zIndex2).attr("id", "selected");
    })
})