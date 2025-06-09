var textfield=document.getElementById("inputfield");
textfield.addEventListener('focus',()=>{
document.addEventListener('keydown',function (event) {
	if (event.key==='Enter')
	console.log("google.com/"+textfield.value);
})
});