# Binary Tree #

In computer science, a binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child. 


<img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/binary-tree-to-DLL.png" width="500"/>

# Common operations #

Insertion
Nodes can be inserted into binary trees in between two other nodes or added after a leaf node. In binary trees, a node that is inserted is specified as to which child it is.

Leaf nodes
To add a new node after leaf node A, A assigns the new node as one of its children and the new node assigns node A as its parent.

Deletion
Deletion is the process whereby a node is removed from the tree. Only certain nodes in a binary tree can be removed unambiguously.

Node with zero or one children
Suppose that the node to delete is node A. If A has no children, deletion is accomplished by setting the child of A's parent to null. If A has one child, set the parent of A's child to A's parent and set the child of A's parent to A's child.

Node with two children
In a binary tree, a node with two children cannot be deleted unambiguously. However, in certain binary trees (including binary search trees) these nodes can be deleted, though with a rearrangement of the tree structure.

Traversal
Pre-order, in-order, and post-order traversal visit each node in a tree by recursively visiting each node in the left and right subtrees of the root.

Depth-first order
In depth-first order, we always attempt to visit the node farthest from the root node that we can, but with the caveat that it must be a child of a node we have already visited. Unlike a depth-first search on graphs, there is no need to remember all the nodes we have visited, because a tree cannot contain cycles. Pre-order is a special case of this. See depth-first search for more information.

Breadth-first order
Contrasting with depth-first order is breadth-first order, which always attempts to visit the node closest to the root that it has not already visited. See breadth-first search for more information. Also called a level-order traversal.

In a complete binary tree, a node's breadth-index (i ??? (2d ??? 1)) can be used as traversal instructions from the root. Reading bitwise from left to right, starting at bit d ??? 1, where d is the node's distance from the root (d = ???log2(i+1)???) and the node in question is not the root itself (d > 0). When the breadth-index is masked at bit d ??? 1, the bit values 0 and 1 mean to step either left or right, respectively. The process continues by successively checking the next bit to the right until there are no more. The rightmost bit indicates the final traversal from the desired node's parent to the node itself. There is a time-space trade-off between iterating a complete binary tree this way versus each node having pointer/s to its sibling/s.