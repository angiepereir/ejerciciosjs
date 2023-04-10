const allDiv$$ = document.querySelectorAll(".fn-insert-here")
console.log(allDiv$$);


for (const div$$ of allDiv$$) {
    const p$$ = document.createElement("p")
    p$$.textContent= "voy dentro"
    div$$.appendChild(p$$)
}