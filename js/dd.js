$(function(){

    $('.top .submit').click(function(){
        var _name=$(".name").val(),_message=$('.message').val();
        if(_name==""&&_message==""){
            alert("请输入信息");
        }else{
            localStorage.setItem(_name,_message);
            $(".name,.message").val("");
            lists();
        }
    });
    //显示
    function lists(){
        var str="";
        for(var i=0;i<localStorage.length;i++){
            var $name=localStorage.key(i);
            var $message=localStorage.getItem($name);
            str+='<li class="list-group-item">'+$name+
                '<span>说</span>'+$message+
                '<li>';
        }
        $('.messageList').html(str);

    };
    //删除
    $(".delte").click(function(){
        localStorage.clear();
        $(".messageList").html("所有数据已经清除");
    });
    //显示所有信息
    $(".showAll").click(function(){
        lists();
    })
})