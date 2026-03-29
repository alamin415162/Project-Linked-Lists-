class Node {
    constructor(element) {
        this.element = element;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(element) {
        const node = new Node(element)
        if (this.head === null) {
            this.head = node;
        } else {
            let currentNode = this.head;
            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode
            }
            currentNode.nextNode = node;
        }
        this.length++;
    }

    size() {
        return this.length;
    }

    prepend(element) {
        let node = new Node(element)
        if (this.head === null) {
            this.head = node
        } else {
            let currentNode = this.head;
            node.nextNode = currentNode;
            this.head = node;
        }

        this.length++;
    }
    header() {
        if (this.length === 0) {
            return undefined;
        }
        return this.head
    }

    tail() {
        if (this.length === 0) {
            return undefined;
        } else {
            let currentNode = this.head;
            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
            return currentNode;
        }
    }

    at(index) {
        if (index > this.length) {
            return undefined;
        } else {
            let currentNode = this.head
            let spot = 0;
            while (index > spot) {
                currentNode = currentNode.nextNode;
                spot++
            }
            return currentNode;
        }
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        } else {
            let val = this.head;
            this.head = this.head.nextNode;

            return val;

        }
    }

    contains(element) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.element === element) {
                return true
            }
            currentNode = currentNode.nextNode

        }
        return false
    }
    findIndex(element){
        let currentNode = this.head;
        let index = -1;
        while(currentNode){
            index++;
            if(currentNode.element === element){
                return index;
            }
            currentNode = currentNode.nextNode;
        }

        return -1;
    }
    toString(){
        let currentNode = this.head;
        let str = ''
        if(this.length === 0){
            return str
        }
        while(currentNode.nextNode){
            str += ` (${currentNode.element}) -->`
            currentNode = currentNode.nextNode;
        }
        str += `--> null`
        return str
    }
}


const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");

console.log(list.toString());


