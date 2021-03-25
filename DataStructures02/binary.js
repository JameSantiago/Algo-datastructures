function BinarySearchTree(value) {
	this.value = value; 
	this.left = null; 
	this.right = null; 
}

BinarySearchTree.prototype.insert = function (value){

	if(value > this.value){

		if(this.right !== null){
			this.right.insert(value); 
		}else{
			this.right = new BinarySearchTree(value); 
		}
	}

	if(value < this.value){

		if(this.left !== null){
			this.left.insert(value); 
		}else{
			this.left = new BinarySearchTree(value); 
		}
	}
	
}

BinarySearchTree.prototype.contains = function (value){
	if(this.value === value) return true; 

	if(value > this.value){


		if(this.right === null) {
			return false;
		}else {
			return this.right.contains(value); 
		}
	}

	if(value < this.value){

		if(this.left === null) {
			return false;
		}else{
			return this.left.contains(value); 
		}
	}
}; 

BinarySearchTree.prototype.size = function (){
	if(this.right === null && this.left === null) return 1; 

	if(this.right !== null && this.left === null) {
		return 1 + this.right.size(); 
	}

	if(this.right === null && this.left !== null){
		return 1 + this.left.size(); 
	}

	if(this.right !== null && this.left !== null){
		return 1 + this.left.size() + this.right.size(); 
	}
};

BinarySearchTree.prototype.depthFirstForEach = function  (cb, order){
	if(order === 'pre-order'){

		cb(this.value);
		if(this.left !== null) this.left.depthFirstForEach(cb, order); 
		if(this.right !== null) this.right.depthFirstForEach(cb, order); 
	}else if(order === 'post-order'){

		if(this.left !== null) this.left.depthFirstForEach(cb, order); 
		if(this.right !== null) this.right.depthFirstForEach(cb, order); 
		cb(this.value); 
	}else {

		if(this.left !== null) this.left.depthFirstForEach(cb, order); 
		cb(this.value); 
		if(this.right !==null) this.right.depthFirstForEach(cb,order); 
	}

}; 

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array){
	
	if(!array){
		var array = []; 
	}

	if(this.left !== null){
		array.push(this.left); 
	}

	if(this.right !== null){
		array.push(this.right); 
	}


	cb(this.value);

	if(array.length > 0){
		array.shift().breadthFirstForEach(cb, array); 
	}
}; 