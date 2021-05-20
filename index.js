// Write a function which can reverse string
// Write a JavaScript function that reverse a string. Sample Data and output: Example reverse("hello world") Expected Output: dlrow olleh
const string="hello world"
//     reverse(string)  // return dlrow olleh

function reverse(string){
    if (string === ""){
        return "";
    }
    else {
        return reverse(string.substr(1)) + string[0];}
}

console.log(reverse(string));