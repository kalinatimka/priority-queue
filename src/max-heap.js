const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.length = 0;
	}

	push(data, priority) {
		this.insertNode(new Node(data, priority));
		this.shiftNodeUp(new Node(data, priority));
		this.length++;
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
		if(this.root==null){
			this.root = node;
			this.parentNodes.push(node);
			return;
		}
		else if(this.parentNodes[0].left==null){
			this.parentNodes[0].appendChild(node);
			this.parentNodes.push(node);
			return;
		}
		else if(this.parentNodes[0].right==null){
			this.parentNodes[0].appendChild(node);
			this.parentNodes.push(node);
			this.parentNodes.shift();
		}
	}

	shiftNodeUp(node) {
		if(node.parent!=null&&node.priority>node.parent.priority){
			if (node.parent == this.root) {
				this.root = node;
			}
			var nodeInd = this.parentNodes.indexOf(node);
			var parentInd = this.parentNodes.indexOf(node.parent);
			if (parentInd == -1) {
			  this.parentNodes[nodeInd] = node.parent;
			} else {
			  this.parentNodes[parentInd] = node;
			  this.parentNodes[nodeInd] = node.parent;
			}
			node.swapWithParent();
			this.shiftNodeUp(node);
		}
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
