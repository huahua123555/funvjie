// JavaScript Document
var Dianji=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		Dianji++;
		if(Dianji==1){
	   			alert("在考虑一下呗");
	   }else if(Dianji==2){
		   		alert("天天准时上线学习");
		   		
	   }else if(Dianji==3){
		   		alert("每天不熬夜");
		   		
	   }else if(Dianji==4){
		   		alert("家务我全干");
		   		
	  }else if(Dianji==5){
		   		
	  }else if(Dianji==6){
		   		
	  }else if(Dianji==7){
		   		alert("过年钱全上交");
		  		Dianji=1;
	  }

	}
	hao.onclick=function(){
		alert("给我钱呗");
	}
	

}