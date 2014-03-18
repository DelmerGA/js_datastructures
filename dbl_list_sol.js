function Node(value){
	this.value = value || null;
	this.next = null;
	this.previous = function(){
		return null;
	}
};

Node.prototype.setPrevious = function(node){
	this.previous = function(){
		return node;
	}
	return this;
};


// Singly Linked List
function List(){
	this.node = null;
	this.last = null;
	this.length = 0;
};

List.prototype.head = function() {
	return this.node? this.node.value : this.node;
};

List.prototype.tail = function(){
	if(this.node === null){
		return this;
	} else {
		var list = new List();
		if(this.node.next){
			list.node = this.node.next;
			list.last = this.last;
			list.length = this.length - 1;
		}
		return list;
	}
};

List.prototype.unshift = function(value){
	var old_node = this.node;
	this.node = new Node(value);
	this.node.next = old_node;
	if(old_node){
		old_node.setPrevious(this.node);
	}
	if(this.last === null){
		this.last = this.node;
	}
	this.length += 1;
	return this;
};

List.prototype.shift = function(){
	this.node = this.tail().node;
	this.node.setPrevious(null);
	return this;
};

List.prototype.push = function(value){
	if(this.node === null){
		this.node = new Node(value);
		this.last = this.node;
	} else {
		this.last.next = new Node(value);
		this.last.next.setPrevious(this.last);
		this.last = this.last.next;
	}
	this.length += 1;
	return this;
};

List.prototype.remove = function(index){

};

List.prototype.pop = function(){
	var value = null;
	if (this.length === 1){
		value = this.head();
		this.node = null;
		this.last = null;
		this.length -= 1;
	} else if (this.length > 1) {
		value = this.last.value;
		var prev_node = this.last.previous();
		prev_node.next = null;
		this.last = prev_node;
		this.length -= 1;
	}

	return value;
};



List.prototype.insert_after = function(index, value, list){
	list = list || this;
	if (this.node === null || index < 0){
		throw RangeError("invalid index")
	} else if(index === 0) {
		var old_next = this.node.next;
		this.node.next = new Node(value);

		if(old_next){
			old_next.setPrevious(this.node.next);
		}
		this.node.next.setPrevious(this.node);
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


List.prototype.insert = function(index, value, list){
	list = list || this;

	if (index == 0){
		this.unshift(value);
	} else {
		this.insert_after(index - 1, value, list);
	}
};

try {
	exports.list = List;
	exports.node = Node;
} catch(e){
}