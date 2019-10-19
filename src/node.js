class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left == null) {
			this.left = node;
			node.parent = this;
		}
		else if (this.right == null) {
			this.right = node;
			node.parent = this;
		}
	}

	removeChild(node) {
		if (this.left == node) {
			node.parent = null;
            this.left = null;
        }
        else if (this.right == node) {
			node.parent = null;
            this.right = null;
        }
        else {
            throw 'This child doesn\'t exist!';
        }
		// var tempNode = this;
		// var isRight = null;
		// while (tempNode != null) {
		// 	if (node.data > tempNode.data) {
		// 		isRight = true;
		// 		tempNode = tempNode.right;
		// 	} 
		// 	else if (node.data < tempNode.data) {
		// 		isRight = false;
		// 		tempNode = tempNode.left;
		// 	}
		// 	else {
		// 		if (isRight) {
		// 			tempNode.parent.right = null;
		// 			break;
		// 		}
		// 		else {
		// 			tempNode.parent.left = null;
		// 			break;
		// 		}
		// 	}
		// }
		
	}

	remove() {
		if (this.parent) {
			if (this.parent.left || this.parent.right) {
				this.parent.removeChild(this);
			}
		}
	}

	swapWithParent() {
		if (this.parent) {
            if (this.left) {
                var tempLeft = this.left;
            }
            if (this.right) {
                var tempRight = this.right;
            }
            var tempParent = this.parent;
            if (tempParent.left == this && tempParent.right) {
                tempParent.right.parent = this;
            }
            else if (tempParent.right == this && tempParent.left) {
                tempParent.left.parent = this;
            }
            this.parent = tempParent.parent;
            tempParent.parent = this;
            if (this.left) {
                tempParent.left = this.left;
            }
            if (this.right) {
                tempParent.right = this.right;
            }
        }
	}
}

module.exports = Node;
