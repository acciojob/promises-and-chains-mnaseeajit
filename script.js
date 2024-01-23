//your JS code here. If required.
let submit = document.getElementById("submit");
 function promise1(name,age){
	return new Promise((resolve,reject)=>{
		   setTimeout(()=>{
			   if(age>18){
				let data =  resolve(`Welcome,${name}. You can vote`);
				 //  alert(data);
			   }
			   else{
				let data =   reject(`Oh sorry ${name}. You aren't old enough`);
			 //  alert(data);
			   }
		   },4000)
	})
}

submit.addEventListener("click",function(e){
	  e.preventDefault();
	  let name = document.getElementById("name").value;
	let age = document.getElementById("age").value;

	promise1(name,age).then((message)=>{
		alert(message);
	}).catch((err)=>{
		alert(err);
	})
})

