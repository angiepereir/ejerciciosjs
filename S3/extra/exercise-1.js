const cars = [
 'Mazda 6',
 'Ford fiesta',
 'Audi A4',
 'Toyota corola'];


 const div$$ = document.querySelector('[data-function="printHere"]')
 console.log(div$$);
 document.body.appendChild(div$$);
 const ul$$ = document.createElement("ul");
 div$$.appendChild(ul$$);


 for (let i = 0; i < cars.length; i++) {
    const carList = cars[i];
    const li$$ = document.createElement("li")
    ul$$.appendChild(li$$);
    li$$.textContent=carList
    
 }