import { Ollama } from "ollama";
const ollama = new Ollama({host: "http://localhost:11434"});
export const generate = async()=>{
    const messages = [{
        role: "system", content: "You are a helpful AI assistant."
    }, {
        role: "user", content: "why ai and coding are good for humanity"
    }]

    return ollama.chat({
        model: "llama3.2:1b",
        messages,
        stream: false
    });
}