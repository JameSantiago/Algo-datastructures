// LinkedList //

function Node(data){
    this.data = data;
    this.next = null;
}

function List(){
    this._length = 0;
    this.head = null;
}


List.prototype.add = function(data){
    var newNode = new Node(data);
    var current = this.head;

    if(!current){
        this.head = newNode;
        this._length++;
        return newNode;
    }

    while(current.next){
        current = current.next;
    }

    current.next = newNode;
    this._length++;
    return newNode;
};


List.prototype.delete = function(){

    var current = this.head;

    if(!current){return null;}
    if(this._length === 1){
        var deleted = this.head;
        this.head = null;
        this._length--;
        return deleted;
    }

    while(current.next.next){
        current = current.next;
    }

    var deleted = current.next.data;
    current.next = null;
    this._length--;
    return deleted;


    
}

List.prototype.getAll = function(){
    current = this.head 
    if(!current){
        console.log('La lista esta vacia!')
        return
    }
    while(current){
        console.log(current.data);
        current = current.next;
    }
    return
};