function getInfo() {
    let charId = document.getElementById("charCapture").value 
    document.getElementById("charCapture").value = ""
    //let url = "https://rickandmortyapi.com/api/character/"+charId

    let url = `https://rickandmortyapi.com/api/character/${charId}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            let html = `<img src="${data.image}">
                        <h1>${data.name}</h1>
                        <h2>${data.status}</h2>`

            document.getElementById("charContent").innerHTML = html
        })
        .catch(err => console.log(err))

}

    