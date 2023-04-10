const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];


const ul$$ = document.createElement("ul")
document.body.appendChild(ul$$)

for (const app of apps) {
    const li$$ = document.createElement("li")
    li$$.textContent= app
    ul$$.appendChild(li$$)
}