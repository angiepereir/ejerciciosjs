const users = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' }];


    const listaNombres = users.map(usuario =>{
        if (usuario.name.startsWith("a")) {
              usuario.name = "anacleto";
        }
        
            
        return usuario.name;
    });
    console.log(listaNombres);