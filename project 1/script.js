//color changer code is here

const boxs = document.querySelectorAll(".box");
const container = document.querySelector(".container");
const heading = document.querySelector(".heading");

boxs.forEach(function(box){
    box.addEventListener('click', function(e){
        if(e.target.id === "grey"){
            container.style.backgroundColor = e.target.id;
           
            box.style.border = "2px solid white"
        }
       
        
        if(e.target.id === "purple"){
            container.style.backgroundColor = e.target.id;
            box.style.border = "2px solid white"
        }
        if(e.target.id === "yellow"){
            container.style.backgroundColor = e.target.id;
            box.style.border = "2px solid white"
        }
        if(e.target.id === "black"){
            container.style.backgroundColor = e.target.id;
            box.style.border = "2px solid white"
            heading.style.color = "white"
        }
        if(e.target.id === "crimson"){
            container.style.backgroundColor = e.target.id;
            box.style.border = "2px solid white"
        }
        
    })
})

container.addEventListener('click', function(e){
    container.style.backgroundColor = e.target.id;
    heading.style.color = "black";
})

//BMI calculator code is here

const form = document.querySelector("form");

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if(height <= 0 && weight <= 0){
        
        results.innerHTML = `<span>give the valid value ${height} and ${weight}</span>`;
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>BMI Result:  ${bmi}</span>`;
    }
})

