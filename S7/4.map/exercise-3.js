const cities = [
    { isVisited: true, name: 'Tokyo' },
    { isVisited: false, name: 'Madagascar' },
    { isVisited: true, name: 'Amsterdam' },
    { isVisited: false, name: 'Seul' }];


    const listaCities = cities.map(citie =>{
        if (citie.isVisited) {
            citie.name += "(visitado)"
            
        }
        return citie.name
    })
    console.log(listaCities);