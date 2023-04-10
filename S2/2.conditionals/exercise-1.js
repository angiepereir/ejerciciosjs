const alumns = [
     {name: 'Pepe Viruela', T1: false, T2: false, T3: true},
     {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
     {name: 'Abel Cabeza', T1: false, T2: true, T3: true},
     {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
     {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

 
     for (let index = 0; index < alumns.length; index++) {
          const element = alumns[index];
          let trimestresAprobados = 0;
          if (element.T1 === true) {
              trimestresAprobados++
          }
       
          if (element.T2 === true) {
              trimestresAprobados++
          }
       
          if (element.T3 === true) {
              trimestresAprobados++
          }
       
          if (trimestresAprobados >= 2) {
              element.isAproved = true;
          }else{
              element.isAproved = false
          }
      }
       
      console.log(alumns)
    
