var li_items = document.getElementsByTagName("li");
var li_inputs = document.getElementsByTagName("input");
var spans = document.getElementsByTagName("span")

for (var i = 0; i < li_items.length; i++) {
	
	li_items[i].addEventListener("click", editMode, false);
	li_inputs[i].addEventListener("blur", saveMode, false);
	li_inputs[i].addEventListener("keypress", escKey, false);

}


function escKey (event) {
		if (event.which === 13) {
			saveMode.call(this);
			
		}
};


function editMode () {
	this.className = "edit";
	var input = this.querySelector("input");
	input.focus();
	input.setSelectionRange(0, input.value.length);
};



function saveMode () {
	this.parentElement.className = ""
	this.previousElementSibling.innerHTML = this.value;
};


