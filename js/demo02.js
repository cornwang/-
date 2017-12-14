/// <reference path="jquery-1.10.2.min.js" />
$(function(){
    $('#btn').click(function(){
       var iNum=Math.floor(Math.random()*100+1);//产生(1,100)区间的数 Math.floor取整数
        console.log(iNum);
        for(var i=1;i<7;i++){
            if(i==6){
                alert('游戏结束,中奖号码是'+iNum);
                return;
            }else{
                var slnput=prompt('请输入1~100之间的整数');//弹出一个输入框
                var nlnput=Number(slnput);
                console.log(nlnput)
                if(isNaN(nlnput)){//is not a number
                    alert('输入的不是一个数字')
                }else{
                    if(nlnput==parseInt(nlnput)){//判断是不是整数相等 12.3==12
                            if(nlnput<1||nlnput>100){
                                alert('不在范围内')
                            }else {
                                if(nlnput >iNum){
                                    alert("输入的数字太大")
                                }else if(nlnput<iNum){
                                    alert("输入的数字太小")
                                }else{
                                    alert("恭喜中奖");
                                    return;
                                }
                            }
                    }else{
                        alert('输的不是整数')
                    }
                }

            }
        }
    });
    $("#btn2").click(function(){
        var str=prompt("请输入")
    })
})