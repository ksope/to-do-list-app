function newItem() {
  //1. Add a new to-do list item to the list:

  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }

  //2. Crossing an item out by double-clicking on it:
  function crossOut() {
		li.toggleClass("strike");
	}

	li.on("dblclick", crossOut);

  //3. Add an 'X' button to delete to-do list item
  let cancelButton = $('<crossOutButton></crossOutButton>');
  cancelButton.append(document.createTextNode('X'));
  li.append(cancelButton);

  //Delete to-do list item on clicking 'X' button
  cancelButton.on("click", deleteListItem);
  function deleteListItem(){
    li.addClass("delete")
  }


}