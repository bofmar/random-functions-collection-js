//Default
//Outputs a random float between 0(inclusive) and 1(exclusive)

Math.random();

//Random float between two numbers
//Outputs a random float between min(inclusive) and max(exclusive)
function getRandomArbitrary(min,max){
    return Math.random() * (max - min) + min;
}

//Random Int from 0 to max
//OR random int between two numbers
function getRandomInt(max, min){
    if(typeof min === "undefined"){
        //return a random number between 0(inclusive) and max(exclusive)
        return Math.floor(Math.random() * Math.floor(max));
    }
    else{
        //Return a random integer between min(inclusive) and max(exclusive)
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }   
}