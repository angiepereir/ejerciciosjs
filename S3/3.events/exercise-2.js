const input$$ = document.querySelector("input")
const mostrarValor = (event)=>{
console.log(event);
}

input$$.addEventListener("focus",mostrarValor)