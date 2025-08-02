const catninja = axios.create({
    baseURL: "https://catfact.ninja/"
})

const unsplash = axios.create({
    baseURL: "https://api.unsplash.com/",
    Authorization: "786567 vjj0v8N8bDXq6sDXKLI0Ve0DsUz7HivOCDWKnjq353o"
})

 async function getFact(){
    const resp = await catninja.get("fact");
    return resp.data.fact;
}

async function getFacts(){
    const resp = await catninja.get("facts");
    return resp.data.data
}

async function getPic(){
    const pic = await unsplash.get("/photos");
    console.log(pic)
    //const pic = await unsplash.get("/photos").url.regular + ("&content-filter=high")
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
    }, 2000)
    getPic();
})