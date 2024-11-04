function temp(c){
    return (c * 9/5) + 32;
}

let Input = parseInt(prompt("Enter The Tempareture in Celsius: "));
document.write(temp(Input));