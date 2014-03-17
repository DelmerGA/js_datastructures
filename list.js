function Node(value){
	this.value = value || null;
	this.next = null;
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
	if(this.last === null){
		this.last = this.node;
	}
	this.length += 1;
	return this;
};

List.prototype.shift = function(){
	this.node = this.tail().node;
	return this;
};

List.prototype.push = function(value){
	if(this.node === null){
		this.unshift(value);
	} else {
		this.last.next = new Node(value);
		this.last = this.last.next;
		this.length += 1;
	}
	return this;
};

List.prototype.remove = function(){

};

List.prototype.pop = function(){

};



List.prototype.insert_after = function(index, value, list){
	list = list || this;
	if (this.node === null || index < 0){
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