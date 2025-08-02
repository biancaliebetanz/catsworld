const http = axios.create({
    baseURL: "https://catfact.ninja/"
})

 async function getFact(){
    const resp = await http.get("fact");
    return resp.data.fact;
}

async function getFacts(){
    const resp = await http.get("facts");
    return resp.data.data
}

const fact = document.querySelector(".text");
const button = document.querySelector(".btn-new-fact");
const card = document.querySelector(".fact-box")

card.addEventListener("dragstart", async function(){
    newFact = await getFact();
    card.classList.add("fact-box-scroll")
    setTimeout(function(){
        fact.textContent = newFact;
        card.classList.remove("fact-box-scroll")
    }, 1500)
})