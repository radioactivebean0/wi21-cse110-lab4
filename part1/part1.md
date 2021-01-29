1. 2 will be printed since the var i is declared inside the function and used in the loop until it is 2
2. 150 will be printed since the var is declared inside the function and the last time it is assigned it is set to 150.
3. 150 will be printed since the var is last set to it inside the for loop.
4. It will return the list [50,100,150]. The function takes the input prices, subtracts the discount from each price and returns a list of the new prices.
5. an error thrown, i was declared inside the for loop using let, and is out of scope
6. an error thrown, discountedPrice is declared inside the for loop using let, and is out of scope
7. 150 will be printed since the variable finalPrice is delared with let inside the function.
8. It will throw an error since the line 11 code will give an error.
9. An error will be thrown, i was declared inside the for loop using let and is outside of the scope.
10. An error will be thrown, discountedPrice is a const declared inside the for loop, its scope is within a code block like let.
11. 0 should be printed since finalPrice is assigned as 0, it is a constant so the value cannot change.
12. An error is thrown since the constant finalPrice is being reassigned which is not allowed.
13. 
    A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]
14. 
    A. '32', It turns the 2 into a string and concats them
    B. 1, It cant do string subtraction so it turns 3 into an int and subtracts 2
    C. 3, It turns the null into zero and adds it
    D. '3null', the value null is interpreted as a string this time and gets concatenated to the string '3'
    E. 4, to add an int to a boolean, the boolean is turned into 1 if true, 0 if false, then added
    F. 0, false is equal to zero, and null will be interpreted as an int 0. Then they are added.
    G. '3undefined', The value undefined is converted to a string and concatenated to the string '3'
    H. NaN, Since the operation is subtraction, 3 turns into an int, and undefined becomes the int NaN
15. 
    A. true, the '2' gets converted into an int, then it is compared with 1
    B. false, since both sides are strings, the string comparison is used. The string that starts with later characters in the alphabet is greater, so '2' would be greater thus the output is false
    C. true, the '2' is converted into an int and then compared
    D. false, the === operation does not convert types and the types are not the same
    E. false, the boolean value true gets turned into the integer 1
    F. true, when you use the cast function, any number not 0 will be converted to the boolean true.
16. == is the equals operator with type conversions, it will convert both sides to a common type. === does not convert types, if the types dont match it is false.
17. 'How are you?' gets printed. the expression ( 2 == true ) is not true so the first code block wont get executed. (2) is always true since the int value will be cast to a boolean and Boolean(2) is true so the second code block will be executed. The third block will not be executed since the second block was executed.
19. [6,8,10] The result of the function is a new array. It takes the values of the input array, and calls the doSomething function. That function adds 2 to the input number and then calls the callback then returns the result. The combination of both functions is (arr[i]+2)*2
20. it prints a 1, 3, 4, then a bunch of 3s until one second passes then prints a 2 followed by 3s until the next second and prints a 2 and continues this pattern forever.