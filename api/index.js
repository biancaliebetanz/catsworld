import axios from 'axios'

const http = axios.create({
    baseURL: "https://catfact.ninja/"
})

export async function getFact(){
    const resp = await http.get("fact")
    return resp.data.fact
}

export async function getFacts(){
    const resp = await http.get("facts")
    return resp.data.data
}

// adicionar a api do unsplash para sempre mostrar fotos de gatos aleatorias