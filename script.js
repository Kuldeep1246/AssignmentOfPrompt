function greet(){
     let person = prompt("Enter the name");
   if(person===null || person === ""){
        console.log("Hello,! Guest");
    }
    else console.log("Hello,! ",person)
}
greet();