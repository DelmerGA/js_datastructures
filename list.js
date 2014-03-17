function Node(value){
	this.value = value;
	this.next = null;
};


// Singly Linked List
function List(){
	this.node = null;
	this.last = null;
	this.length = 0;
};

List.prototype.head = function() {
	return this.node.value;
};

List.prototype.tail = function(){
	var list = new List();
	list.node = this.node.next;
	list.last = this.last;
	list.length -= 1;
	return list;
};

List.prototype.shift = function(value){
	var old_node = this.node;
	this.node = new Node(value);
	this.node.next = old_node;
	if(this.last === null){
		this.last = this.node;
	}
	this.length += 1;
	return this;
};

List.prototype.unshift = function(){
	this = this.tail();
};

List.prototype.push = function(value){
	if(this.node === null){
		this.shift(value);
	} else {
		this.last.next = new Node(value);
		this.last = this.last.next;
	}
	this.length += 1;
	return this;
};

List.prototype.remove = function(){

};

List.prototype.pop = function(){

};

/*
List.prototype.length = function(){
	var currentList = this, length = 0;
	while(currentList.node !== this.last){
		currentList.node = this.tail();
		length += 1;
	};
	return length;
};
*/

List.prototype.insert_after = function(index, value, list){
	list = list || this;
	if (this.node === null || this.node.next === null && index > 0 || index < 0){
		throw RangeError("invalid index")
	} else if(index === 0) {
		var old_next = this.node.next;
		this.node.next = new Node(value);
		if(this.node === this.last ){
			list.last = this.node.next;
		}
		this.node.next.next = old_next;
		list.length += 1;
	} else {
		this.tail().insert_after(index - 1, value, list);
	}
	return this;
};

try {
	module.exports = List
} catch(e){
}