String.prototype.sj=function(val,val2){try{var reg=new RegExp(val+"(.*?)"+val2);var value=String(this).match(reg)[1];if(typeof(JSON.parse(value))=="object"){return JSON.parse(value)}else{return value}}catch(err){if(this){return this;}else{return false}}};


var str="我是一个字符串演示啊";
alert(str.sj("是","演")); //输出 “一个字符串”
