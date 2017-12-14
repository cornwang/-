$(function(){

    var _img=$(".list img");
    var currentIndex;
    $.each(_img,function (index,item){
        var _src=$(item).attr("src");
        $(".context-img").append('<li><img src="'+_src+'"></li>')
    })
    //点击图片 显示当前
    $(".list img").click(function(){
        var _src=$(this).attr("src");
         currentIndex=$(this).attr("index");
        $(".back").show();//style.display=block;
        show(currentIndex);
        //$(".context-img li").eq(currentIndex).show().sibling("li").hide();
       // $(".context-img").html('<li><img src="'+_src+'"></li>')
    })
    $(".close img").click(function(){
        $(".back").hide();
    })
//左右按键轮播
    $(".left").click(function(){
        if(currentIndex=0){
            currentIndex=_img.length-1;
           // $(".context-img li").eq(currentIndex).show().sibling("li").hide();
            show(currentIndex)
        }else{
          //  $(".context-img li").eq(--currentIndex).show().sibling("li").hide();
            show(--currentIndex)
        }

    })

    $(".rigth").click(function(){
        if(currentIndex>_img.length){
            currentIndex=0;
           // $(".context-img li").eq(currentIndex).show().sibling("li").hide();
            show(currentIndex)
        }else
            show(++currentIndex)
       // $(".context-img li").eq(++currentIndex).show().sibling("li").hide();
    })
    function show(picIndex){
        $(".context-img li").eq(picIndex).show().sibling("li").hide();
    }
})