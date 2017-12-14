$(function(){
    //提交留言
    $(".btn-lists .submit").click(function(){
        var _name=$(".name").val(),_messgae=$(".message").val();
        if(_name==""&&_message==""){
            alert('请输出信息')
        }else{
            //存储到localStorage
            localStorage.setItem(_name,_messgae);
            $(".name,.message").val();
            lists();
        }
    });
    //列表显示
    function lists() {
        var str="";
        for (var i = 0; i < localStorage.length; i++) {
            var $name=localStorage.key(i);
            var $message=localStorage.getItem($name);
            str+='<li class="list-group-item">'+$name+
                '<span>说</span>'+$message+
                '<li>';
        }
        $(".messageList").html(str);
    }
    //删除
    $(".delteAll").click(function(){
        localStorage.clear();
        $(".messageList").html("所有数据已经清除");
    })
    //查看
    $(".view").click(function(){
        lists();
    })
})