enum Direction{
     UP = "UP", 
     DOWN = "DOWN", 
     RIGHT = "RIGHT",
     LEFT = "LEFT", 
}

function doSomething(directions : Direction){
     console.log("The direction of the key is " + directions);
}

doSomething(Direction.UP);


// Response Status code usecase of the Enums in Express Code or Application

enum StatusCode{
     Success = 200, 
     NotFound = 404, 
     Error = 500, 
     Unauthorized = 401, 
}

function getStatusCode(responseType : StatusCode) {
     console.log(`The Status of the API is ${responseType}`);
}

getStatusCode(StatusCode.Unauthorized);