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

button.addEventListener("click", async function() {
    newFact = await getFact();
    fact.textContent = newFact;
    })