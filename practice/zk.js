 
 //方法一：
 var str = [1,1,5,5,8];

 // console.log(arr(str))
 // function arr(str){
 // 	var arr = [];
 // 	for(var i=0;i<str.length;i++){
 //        if(arr.indexOf(str[i]) == -1){
 //             arr.push(str[i])
 //        }  
 // 	}
 // 	return arr;
 // }

 //方法二：

   Array.prototype.beaf = function(){
	 this.sort();
	 var lop = [this[0]];
	 for(var i=1;i<this.length;i++){
	  if(this[i]!=lop[lop.length-1]){
	   lop.push(this[i]); 
	  }
	 }
	 return lop;
	}
	console.log(str.beaf());

   //  console.log(beaf(str))
   // function beaf(str){
   //    var bt = str[0];
   //    var mn = [];
   //    for(var i=1;i<str.length;i++){
   //         if(bt == str[i]){
   //            str.splice(0,1);
   //            beaf(str);
   //         }else{
   //         	  mn.push(bt);
   //         }
   //    }
   //    return mn;
   // }