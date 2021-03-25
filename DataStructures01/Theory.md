## Linked List ## 

In computer science, a linked list is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence. In its most basic form, each node contains: data, and a reference (in other words, a link) to the next node in the sequence. This structure allows for efficient insertion or removal of elements from any position in the sequence during iteration. More complex variants add additional links, allowing more efficient insertion or removal of nodes at arbitrary positions. A drawback of linked lists is that access time is linear (and difficult to pipeline). Faster access, such as random access, is not feasible. Arrays have better cache locality compared to linked lists.

The principal benefit of a linked list over a conventional array is that the list elements can be easily inserted or removed without reallocation or reorganization of the entire structure because the data items need not be stored contiguously in memory or on disk, while restructuring an array at run-time is a much more expensive operation. Linked lists allow insertion and removal of nodes at any point in the list, and allow doing so with a constant number of operations by keeping the link previous to the link being added or removed in memory during list traversal.

On the other hand, since simple linked lists by themselves do not allow random access to the data or any form of efficient indexing, many basic operations—such as obtaining the last node of the list, finding a node that contains a given datum, or locating the place where a new node should be inserted—may require iterating through most or all of the list elements. The advantages and disadvantages of using linked lists are given below. Linked list are dynamic, so the length of list can increase or decrease as necessary. Each node does not necessarily follow the previous one physically in the memory.

## Disadvantages ##
They use more memory than arrays because of the storage used by their pointers.
Nodes in a linked list must be read in order from the beginning as linked lists are inherently sequential access.
Nodes are stored noncontiguously, greatly increasing the time periods required to access individual elements within the list, especially with a CPU cache.
Difficulties arise in linked lists when it comes to reverse traversing. For instance, singly-linked lists are cumbersome to navigate backward [1] and while doubly linked lists are somewhat easier to read, memory is consumed in allocating space for a back-pointer.


<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Singly-linked-list.svg/408px-Singly-linked-list.svg.png" width="500"/>


## Hash table ## 

#### What is a hash table? ####
A hash table (often called a hash map) is a data structure that maps keys to values. Hash tables combine lookup, insert, and delete operations in an efficient way. The key is sent to a hash function that performs arithmetic operations on it. The result (called the hash value or hash) is an index of the key-value pair.

Think of this like a signature on a block of data that allows us to search in constant time. A hash table operates like a dictionary that we can map to get from the hash to the desired data.

This data structure is widely used in many kinds of computer software, particularly for associative arrays, database indexing, caches, and sets. Usually, this operation returns the same hash for a given key.

The performance of a hash table depends on three fundamental factors: hash function, size of the hash table, and collision handling method.

Hash tables are made up of two parts:

Object: An object with the table where the data is stored. The array holds all the key-value entries in the table. The size of the array should be set according to the amount of data expected.
Hash function (or mapping function): This function determines the index of our key-value pair. It should be a one-way function and produce the a different hash for each key.

<img src="https://www.educative.io/api/page/4910944193871872/image/download/5155964159262720" width="500"/>


