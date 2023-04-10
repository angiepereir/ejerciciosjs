const button$$ = document.querySelector("button")
console.log(button$$);


const get = async()=>{
    let baseUrl = 'https://api.nationalize.io?name='
    const input$$ = document.querySelector("input")

    const response = await fetch(baseUrl+ input$$.value)
    const data = await response.json()
    console.log(data);

}
const createNationalizeP = (person) => {
    const p$$ = document.createElement('p');
    let text = `El nombre ${person.name} tiene`;

    for (const country of person.country) {
        const percentage = Math.floor(country.probability * 100)
        text += ` un ${percentage} porciento de ser de ${country.country_id}`;
    }

    p$$.textContent = text;

    document.body.appendChild(p$$);
}   




button$$.addEventListener("click", get)