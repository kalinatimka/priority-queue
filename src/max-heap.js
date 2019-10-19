const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		
	}

	push(data, priority) {
		this.insertNode(new Node(data, priority));
		this.shiftNodeUp(new Node(data, priority));
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		
	}

	insertNode(node) {
		if (this.root == null) {
			this.root = node;
			this.parentNodes.push(node);
		}
		else {
			var index = 0;
			while (true) {
				if (this.parentNodes[index].left && this.parentNodes[index].right) {
					index++;
				}
				else {
                    this.parentNodes[index].appendChild(node);
                    this.parentNodes.push(node);
                    break;
				}
			}
		}
	}

	shiftNodeUp(node) {
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
