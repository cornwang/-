$(function(){
    //
   /* $(".m_item .item_title").toggle(function(){
        //toggle 绑定事件轮回
        $(this).next().slideUp();//绑定它的领居
    },function(){
        $(this).next().slideDown();//slideUp or Down 是动作
    })*/
   $(".i_item").hide();
   $(".i_item").eq(0).show();
   //除了第一个 其它都是+号
   $(".i_item").find("b").not(":eq(0)").text("+");
    $(".m_item .item_title").mouseover(function(){
        $(".i_item").slideUp();
        if($(this).next().is(":visible")){//判断 是否显示或者隐藏  is()
            $(this).next().slideUp();//隐藏
            $(this).find("b").text("+");
        }else{
            $(this).next().slideDown();
            $(".item_title").find("b").text("+");
            $(this).find("b").text("-");

        }
    })
})