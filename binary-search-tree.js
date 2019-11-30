class Node {
    right = null
    left = null
    data = null

    constructor(data = null) {
        this.data = data;
    }

}


export default class BinarySearchTree {
    constructor() {
        this.root = new Node(1);
        this.insert(10, 20, 30, 25);
        this.printTreeInorder(this.root);
    }

    insert() {
        [...arguments].forEach((data) => {
            let newNode = new Node(data);

            this.insertRec(this.root, newNode);
        });
    }

    insertRec(current, newNode) {
        if (!current) {
            return null;
        }

        if (current.data > newNode.data) {
            if (!this.insertRec(current.left, newNode)) {
                current.left = newNode;
            }
        } else if (current.data < newNode.data) {
            if (!this.insertRec(current.right, newNode)) {
                current.right = newNode;
            }
        } else {
            return true;
        }
    }


    printTreeInorder(current) {
        if (!current) {
            return;
        }

        this.printTreeInorder(current.left);
        console.log(current);
        this.printTreeInorder(current.right);

    }
}


new BinarySearchTree();