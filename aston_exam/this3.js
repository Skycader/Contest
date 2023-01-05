var name = "Zone"
var obj = {
	name: "Study",
	showName: function() {
		console.log(this.name)
		setTimeout(function(){
			console.log(this.name)
		},0)
		setTimeout(()=>console.log(this.name),0)
}
}

obj.showName()
