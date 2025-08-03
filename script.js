const catninja = axios.create({
    baseURL: "https://catfact.ninja/"
})

const client_ID = "vjj0v8N8bDXq6sDXKLI0Ve0DsUz7HivOCDWKnjq353o";

const unsplash = axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: `Client-ID ${client_ID}`,
    }
})

const image = document.querySelector(".img");
const fact = document.querySelector(".text");
const button = document.querySelector(".btn-new-fact");
const card = document.querySelector(".fact-box")

 async function getFact(){
    try{
        const resp = await catninja.get("fact");
        return resp.data.fact;
    } catch(error){
        console.log("erro:", error);
        return "Cats are super cute!";
    }};

async function getFacts(){
    try{
        const resp = await catninja.get("facts");
        return resp.data.data;
    } catch(error){
        console.log("erro:", error);
        return ["Cats are super cute!", "Everybody should love them", "They love to meow!"];
    }};

async function getPic(){
    try{
        const randomPage = Math.floor(Math.random() * 10) + 1;
        const keyWords = ["kitten", "cat", "cute cats", "kitty", "baby cat", "funny cats", "loving cat", "baby cats", "orange kitten", "black kitten"];
        search = keyWords[Math.floor(Math.random() * keyWords.length)];
        const response = await unsplash.get("/search/photos", {
        params: {
            query: search,
            per_page: 10,
            page: randomPage,
            content_filter: "high"
        }});
        if(!response)
            return "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        const randomImageIndex = Math.floor(Math.random() * response.data.results.length);
        return response.data.results[randomImageIndex].urls.regular;
    } catch(error){
        console.log("erro:", error);
        return "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    }};

card.addEventListener("click", async function(){
    newFact = await getFact();
    newPic = await getPic();
    card.classList.add("fact-box-scroll")
    setTimeout(function(){
        image.style.backgroundImage = `url(${newPic})`
        fact.textContent = newFact;
        card.classList.remove("fact-box-scroll")
    }, 2000)
})