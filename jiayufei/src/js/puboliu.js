 
 $(function(){
 	function arr(){
 		var temp=[];
 		var kuan=$(".box").outerWidth();
 		var cols=Math.floor($(window).outerWidth()/kuan);
 		$("#main").width(cols*kuan);
 		$(".box").each(function(i,n){
          if(i<cols){
            temp.push($(this).outerHeight())
          }else{
          	var minH=Math.min.apply(null,temp);
          	var index=temp.indexOf(minH);
          	//console.log(index)
          	$(this).css({"position":"absolute","left":index*kuan,"top":minH});
          	temp[index]+=$(this).outerHeight();
          }
 		})
 	}
 	arr();
 	 var data={
     	 src:[
           {name:'pics/a1(5).jpg'},
           {name:'pics/a1(1).jpg'},
           {name:'pics/a1(2).jpg'},
           {name:'pics/a1(5).jpg'},
           {name:'pics/a1(8).jpg'},
           {name:'pics/a1(7).jpg'},
           {name:'pics/a1(9).jpg'},
           {name:'pics/a1(10).jpg'},
           {name:'pics/a1(12).jpg'},
           {name:'pics/a1(6).jpg'},
           {name:'pics/a1(3).jpg'},
           {name:'pics/a1(17).jpg'},
     	 ]
     }
     $(window).on("scroll",function(){
     	var sTop=$(this).scrollTop();
     	var cHeight=$(this).height();
     	var lastH=$(".box").last().offset().top+$(".box:last").innerHeight()/2;
     	console.log(lastH);
     	if(lastH<sTop+cHeight){
          $.each(data.src,function(i,n){
             console.log(n);
             $("<div class=box><div class=nav><div class=pic><img src="+n.name+"></div></div></div>").appendTo("#main");
          })
          arr();
     	}
     })
 })