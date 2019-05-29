pl.v.createBook = {
	setupUserInterface: function(){
	var saveButton = document.forms['Book'].commit;
	Book.retrieveAll();
	saveButton.addEventListener("click", pl.v.createBook.handleSaveButtonClickEvent);
	window.addEventListener("beforeunload", function(){Book.saveAll();});
	},
	handleSaveButtonClickEvent: function(){
		var formEl = document.forms['Book'];
		var slots = {isbn: formEl.isbn.value,
			title: formEl.title.value,
			year: formEl.year.value};
			Book.add(slots);
			formEl.reset();
	}
}