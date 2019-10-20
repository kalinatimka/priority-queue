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
	}

	remove() {
		if (this.parent) {
			if (this.parent.left || this.parent.right) {
				this.parent.removeChild(this);
			}
		}
	}

	swapWithParent() {
		if (this.parent == null) {
			return;
		}
		var bufParent = this.parent;
		var bufParOfPar = this.parent.parent;
		var bufLeft = this.left;
		var bufRight = this.right;
	
		if (bufParOfPar != null) {
		  if (bufParOfPar.left === bufParent) {
			bufParOfPar.left = this;
		  } else if (bufParOfPar.right === bufParent) {
			bufParOfPar.right = this;
		  }
		}
		if (this.parent != null) {
		  if (this.parent.left === this) {
			this.parent.parent = this;
	
			if (this.parent.right) {
			  this.parent.right.parent = this;
			  this.right = this.parent.right;
			}
	
			if (bufLeft != null) {
				bufLeft.parent = this.parent;
			  this.parent.left = bufLeft;
			} else {
			  this.parent.left = null;
			}
	
			if (bufRight != null) {
				bufRight.parent = this.parent;
			  this.parent.right = bufRight;
			} else {
			  this.parent.right = null;
			}
	
			this.left = this.parent;
			this.parent = bufParOfPar;
	
		  } else {
			this.parent.parent = this;
	
			if (this.parent.left) {
			  this.parent.left.parent = this;
			  this.left = this.parent.left;
			}
			if (bufLeft != null) {
				bufLeft.parent = this.parent;
			  this.parent.left = bufLeft;
			} else {
			  this.parent.left = null;
			}
			if (bufRight != null) {
				bufRight.parent = this.parent;
			  this.parent.right = bufRight;
			} else {
			  this.parent.right = null;
			}
			this.right = this.parent;
			this.parent = bufParOfPar;
		  }
		}
	}
}

module.exports = Node;
