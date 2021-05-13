import Queue from "./Data Structures/Queue/main.js";
import Stack from "./Data Structures/Stack/main.js";
import MinHeap from "./Data Structures/Heap/MinHeap.js";
import HashTable from "./Data Structures/HashTable/main.js"
import LinkedList from "./Data Structures/LinkedList/main.js";
import RedBlackTree from "./Data Structures/Red Black Tree/main.js";
import BinarySearchTree from "./Data Structures/Binary Search Tree/main.js";

var list = new LinkedList();
list.append(5);
list.append(6);
list.append(7);
list.append(8);
list.append(9);
list.prepend(4);
list.prepend(3);
list.prepend(2);
list.prepend(1);

console.group("LinkedList");
console.log(list.toString() + "\n");
console.groupEnd();

var queue = new Queue();
queue.enqueue({ name: "Walter", lastName: "Morales" });
queue.enqueue({ name: "Daniela", lastName: "Huezo" });
queue.enqueue({ name: "Miguel", lastName: "Mesquita" });
queue.enqueue({ name: "Andrea", lastName: "Ayala" });
queue.enqueue({ name: "Pedro", lastName: "Gomez" });

console.group("Queue");
console.log(queue.toString(e => `${e.name} ${e.lastName}`) + "\n");
console.groupEnd();

var stack = new Stack();
stack.push({ name: "Walter", lastName: "Morales" });
stack.push({ name: "Daniela", lastName: "Huezo" });
stack.push({ name: "Miguel", lastName: "Mesquita" });
stack.push({ name: "Andrea", lastName: "Ayala" });
stack.push({ name: "Pedro", lastName: "Gomez" });

console.group("Stack");
console.log(stack.toString(e => `${e.name} ${e.lastName}`) + "\n");
console.groupEnd();

var heap = new MinHeap();
heap.add(7);
heap.add(1);
heap.add(-10);
heap.add(5);
heap.add(9);
heap.add(-4);
heap.add(100);
heap.add(27);
heap.add(13);
heap.toString();

console.group("MinHeap");
console.log(heap.toString() + "\n");
console.groupEnd();

var hashTable = new HashTable();
hashTable.set(".NET Dev", { name: "Walter", lastName: "Morales" });
hashTable.set("FullStack Dev", { name: "Daniela", lastName: "Huezo" });
hashTable.set("Laravel Dev", { name: "Miguel", lastName: "Mesquita" });
hashTable.set("QA Analyst", { name: "Andrea", lastName: "Ayala" });
hashTable.set("Frontend Dev", { name: "Pedro", lastName: "Gomez" });

console.group("HashTable");
console.log(hashTable.getValues());
console.groupEnd();

var bst = new BinarySearchTree();
bst.insert(8);
bst.insert(9);
bst.insert(-1);
bst.insert(0);
bst.insert(13);
bst.insert(15);
bst.insert(8);
bst.insert(8);

console.group("BST");
console.log(bst.toString() + "\n");
console.groupEnd();

var rbt = new RedBlackTree();
rbt.insert(8);
rbt.insert(9);
rbt.insert(-1);
rbt.insert(0);
rbt.insert(13);
rbt.insert(15);
rbt.insert(8);
rbt.insert(8);

console.group("RBT");
console.log(rbt.colorShow())
console.groupEnd();