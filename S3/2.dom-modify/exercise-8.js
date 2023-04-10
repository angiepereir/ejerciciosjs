const segundoDiv = document.querySelectorAll("div")[1]
console.log(segundoDiv);

const p$$ = document.createElement("p")
p$$.textContent="voy en medio"

document.body.insertBefore(p$$,segundoDiv)