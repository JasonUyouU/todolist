//Remove and Complete icons
var removeI ='<i class="fa fa-trash-o" aria-hidden="true"></i>';
var completeI = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>';


//If there is any text in side the input, add to todo list
document.getElementById('add').addEventListener('click', function() {
	var value = document.getElementById('item').value;

	if (value) {
		addItem(value);
	}
});

document.getElementById('item').addEventListener('keydown', function (e) {
	var value = this.value;

	if (e.code === 'Enter' && value) {
		addItem(value)
	}
})

function addItem(value) {
	addItemToDo(value);
	document.getElementById('item').value = '';
}

function removeItem() {
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;

	parent.removeChild(item);

}

function completeItem() {
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;
	var id = parent.id;
	var value = item.innerText;

	var target;

	if (id === 'todo') {
		//it's a todo item to be completed
		target = document.getElementById('completed');
		parent.removeChild(item);
		target.insertBefore(item, target.childNodes[0]);
	} else {
		//it's a completed item to be uncompleted
		target = document.getElementById('todo');
		parent.removeChild(item);
		target.insertBefore(item, target.childNodes[0]);
	}
}

function addItemToDo(text) {
	var list = document.getElementById('todo');

	var item = document.createElement('li');
	item.innerText = text;
	item.className += "animated fadeInUp"
	var buttons = document.createElement('div');
	buttons.classList.add('buttons');

	var remove = document.createElement('button');
	remove.classList.add('remove');
	remove.innerHTML = removeI;

	//Add click event for removing item
	remove.addEventListener('click', removeItem);

	var complete = document.createElement('button');
	complete.classList.add('complete');
	complete.innerHTML = completeI;

	//Add click event for completing the item
	complete.addEventListener('click', completeItem);

	buttons.appendChild(remove);
	buttons.appendChild(complete);
	item.appendChild(buttons);
	list.appendChild(item);
}