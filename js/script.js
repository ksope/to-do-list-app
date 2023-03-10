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


}