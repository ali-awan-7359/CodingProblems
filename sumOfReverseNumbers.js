// //Array Implementation
// function addTwoNumbers(l1, l2) {
//     var carry = 0;
//     var resultArray = [];

//     for (var i = 0, j = 0; i < l1.length || j < l2.length; i++, j++) {
//         var x = i < l1.length ? l1[i] : 0;
//         var y = j < l2.length ? l2[j] : 0;

//         var sum = x + y + carry;
//         carry = Math.floor(sum / 10);

//         resultArray.push(sum % 10);
//     }

//     if (carry > 0) {
//         resultArray.push(carry);
//     }

//     return resultArray;
// }

// var list1 = [9,9,9,9,9,9,9];
// var list2 = [9,9,9,9];
// console.log(addTwoNumbers(list1, list2)); // Output: [7, 0, 8]




//Linked List implementationi
function ListNode(val, next) {
    this.val = val;
    this.next = next || null;
}

var addTwoNumbers = function(l1, l2) {
    var dummyHead = new ListNode(0);
    var current = dummyHead;
    var carry = 0;

    while (l1 || l2 || carry) {
        var x = l1 ? l1.val : 0;
        var y = l2 ? l2.val : 0;

        var sum = x + y + carry;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummyHead.next;
};

var list1 = new ListNode(2, new ListNode(4, new ListNode(3)));
var list2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(list1, list2));

