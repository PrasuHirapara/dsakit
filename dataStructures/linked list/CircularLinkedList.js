/**
 * Node is the object which contains data and address of next node.
 * @returns - Object of class Node
 */
class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

/**
 * Linked List is data stucture which store data in non continues locations.
 * It consist of chains of Node which contains data and address of next Node.
 * @method insert - Insert data at tail.
 *                - Time Complexity: O(1)
 * @method insertAtHead - Insert data at Head ( starting of Linked List ).
 *                - Time Complexity: O(1)
 * @method insertAtIndex - Insert data at perticular index.
 *                - Time Complexity: O(n)
 * @method remove - remove data at tail.
 *                - Time Complexity: O(n)
 * @method removeAtHead - remove data at Head ( starting of Linked List ).
 *                - Time Complexity: O(1)
 * @method removeAtIndex - remove data at perticular index.
 *                - Time Complexity: O(n)
 * @method peek - Return peek element and its data.
 *                - Time Complexity: O(1)
 * @method length - Returns length of Linked List
 *                - Time Complexity: O(1)
 * @method getNext - Returns next node if exists.
 *                 - Time Complexity: O(1)
 * @method getPrev - Returns previous node if exists.
 *                 - Time Complexity: O(1)
 * @method contains - Returns true if Linked List contains perticular data.
 *                - Time Complexity: O(n)
 * @method indexOf - Returns index value of perticular data if present else -1.
 *                - Time Complexity: O(n)
 * @method reverse - Reverses Linked List in place.
 *                - Time Complexity: O(n)
 * @method addAll - Adds values of other Linked list.
 *                - Time Complexity: O(n + k)
 * @method display - Prints the data
 *                 - Time complexity: O(n)
 * @returns - Object of class Linked List.
 */
