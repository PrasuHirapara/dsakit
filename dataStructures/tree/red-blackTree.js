class Node {
    constructor(data, color = ' red', left = null, right = null, parent = null) {
        this.data = data;
        this.color = color;
        this.left = left;
        this.right = right;
        this.parent = parent;
    }
}

class RedBlackTree {
    constructor() {
        this.nullNode = new Node(null, 'black');
        this.root = this.nullNode;
    }

    insert(data) {
        let newNode = new Node(data);
        newNode.left = this.nullNode;
        newNode.right = this.nullNode;

        let parent = null;
        let current = this.root;

        while (current !== this.nullNode) {
            parent = current;
            if (newNode.data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        newNode.parent = parent;
        if (parent === null) {
            this.root = newNode;
        } else if (newNode.data < parent.data) {
            parent.left = newNode;
        } else {
            parent.rigth = newNode;
        }

        newNode.color = 'red';
        this.adjustInsert(newNode);
    }

    adjustInsert(node) {
        while (node.parent && node.parent.color === 'red') {
            if (node.parent === node.parent.parent.left) {
                let uncle = node.parent.parent.right;
                if (uncle.color === 'red') {
                    node.parent.color = 'black';
                    uncle.color = 'black';
                    node.parent.parent.color = 'red';
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.right) {
                        node = node.parent;
                        this.rotateLeft(node);
                    }
                    node.parent.color = 'black';
                    node.parent.parent.color = 'red';
                    this.rotateRight(node.parent.parent);
                }
            } else {
                let uncle = node.parent.parent.left;
                if (uncle.color === 'red') {
                    node.parent.color = 'black';
                    uncle.color = 'black';
                    node.parent.parent.color = 'red';
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.left) {
                        node = node.parent;
                        this.rotateRight(node);
                    }
                    node.parent.color = 'black';
                    node.parent.parent.color = 'red';
                    this.rotateLeft(node.parent.parent);
                }
            }
        }

        this.root.color = 'black';
    }

    rotateLeft(node) {
        let rightChild = node.right;
        node.right = rightChild.left;
        if (rightChild.left !== this.nullNode) {
            rightChild.left.parent = node;
        }

        rightChild.parent = node.parent;
        if (node.parent === null) {
            this.root = rightChild;
        } else if (node === node.parent.left) {
            node.parent.left = rightChild;
        } else {
            node.parent.right = rightChild;
        }

        rightChild.left = node;
        node.parent = rightChild;
    }

    rotateRight(node) {
        let leftChild = node.left;
        node.left = leftChild.right;
        if (leftChild.right !== this.nullNode) {
            leftChild.right.parent = node;
        }

        leftChild.parent = node.parent;
        if (node.parent === null) {
            this.root = leftChild;
        } else if (node === node.parent.right) {
            node.parent.right = leftChild;
        } else {
            node.parent.left = leftChild;
        }

        leftChild.right = node;
        node.parent = leftChild;
    }

    delete(data) {
        let node = this.root;
        let z = this.nullNode;

        while (node !== this.nullNode) {
            if (node.data === data) {
                z = node;
            }

            if (node.data < data) {
                node = node.right;
            } else {
                node = node.left;
            }
        }

        if (z === this.nullNode) {
            console.log(`Data ${data} not found in treee.`);
            return;
        }

        let y = z;
        let yOriginalColor = y.color;
        let x;

        if (z.lastChild === this.nullNode) {
            x = z.right;
            this.transPlant(z, z.right);
        } else if (z.rigth === this.nullNode) {
            x = z.left;
            this.transPlant(z, z.left);
        } else {
            y = this.minimum(z.right);
            yOriginalColor = y.color;
            x = y.right;

            if (y.parent === z) {
                x.parent = y;
            } else {
                this.transPlant(y, y.right);
                y.right = z.right;
                y.right.parent = y;
            }

            this.transPlant(z, y);
            y.left = z.left;
            y.left.parent = y;
            y.color = z.color;
        }

        if (yOriginalColor === 'black') {
            this.adjustDelete(x);
        }
    }

    adjustDelete(x) {
        while (x !== this.root && x.color === 'black') {
            if (x === x.parent.left) {
                let w = x.parent.right;
                if (w.color === 'red') {
                    w.color = 'black';
                    x.parent.color = 'red';
                    this.rotateLeft(x.parent);
                    w = x.parent.right;
                }

                if (w.left.color === 'black' && w.right.color === 'black') {
                    w.color = 'red';
                    x = x.parent;
                } else {
                    if (w.right.color === 'black') {
                        w.left.color = 'black';
                        w.color = 'red';
                        this.rotateRight(w);
                        w = x.parent.right;
                    }

                    w.color = x.parent.color;
                    x.parent.color = 'black';
                    w.right.color = 'black';
                    this.rotateLeft(x.parent);
                    x = this.root;
                }
            } else {
                let w = x.parent.left;
                if (w.color === 'red') {
                    w.color = 'black';
                    x.parent.color = 'red';
                    this.rotateRight(x.parent);
                    w = x.parent.left;
                }

                if (w.right.color === 'black' && w.left.color === 'black') {
                    w.color = 'red';
                    x = x.parent;
                } else {
                    if (w.left.color === 'black') {
                        w.right.color = 'black';
                        w.color = 'red';
                        this.rotateLeft(w);
                        w = x.parent.left;
                    }

                    w.color = x.parent.color;
                    x.parent.color = 'black';
                    w.left.color = 'black';
                    this.rotateRight(x.parent);
                    x = this.root;
                }
            }
        }
        x.color = 'black';
    }

    transPlant(a, b) {
        if (a.parent === null) {
            this.root = b;
        } else if (a === a.parent.left) {
            a.parent.left = b;
        } else {
            a.parent.right = b;
        }

        b.parent = a.parent;
    }

    minimum(node) {
        while (node.left !== this.nullNode) {
            node = node.left;
        }

        return node;
    }

    bfs() {
        const result = [];
        const queue = [this.root];

        while (queue.length) {
            const current = queue.shift();
            if (current !== this.nullNode) {
                result.push(current.data);
                queue.push(current.left);
                queue.push(current.right);
            }
        }
        return result;
    }

    inOrder(node = this.root) {
        if (node === this.nullNode) return [];
        return [...this.inOrder(node.left), node.data, ...this.inOrder(node.right)];
    }

    preOrder(node = this.root) {
        if (node === this.nullNode) return [];
        return [node.data, ...this.preOrder(node.left), ...this.preOrder(node.right)];
    }

    postOrder(node = this.root) {
        if (node === this.nullNode) return [];
        return [...this.postOrder(node.left), ...this.postOrder(node.right), node.data];
    }

    printNode(node = this.root, level = 0) {
        if (node === this.nullNode) return;
        console.log(" ".repeat(level * 4) + `├── ${node.data} (${node.color})`);
        this.printNode(node.left, level + 1);
        this.printNode(node.right, level + 1);
    }
}
module.exports = RedBlackTree;
