//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
//"this" allows you to have reference to some object.
  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
//explicit, implicit, default
//explicit is when you bind an object to a form of "this"
//Implicit is where This becomes reference to the object the method/function is called upon
//default will always look to the window for "this"
  // 3) What is the difference between call and apply?

      //Answer
// call accepts a reference and args. whereas apply takes in two args, an refrence & and array
  // 4) What does .bind do?

      //Answer
//creates a new function based on the function its assigned with the addition of a reference

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
var user = {
  username:"mike",
  email:"michael.G224@gmail.com",
  getUsername: function(){
    console.log(this.username)
    return this.username;
  }
}
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername()

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here
function Car(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function(){
    this.move +=10;
    console.log(this.model+" "+this.move);
    return this.move
  }
  return this;
}
var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  console.log(this.model+" "+this.year);
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
getYear.call(prius)

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername(); //Fix this
//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //Answer Here
// it'll look for the username of the window object ie: window.username

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here
// the global window
//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
var userName = getMyUsername.call(myUser)
console.log(userName)
