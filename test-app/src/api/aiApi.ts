import axios from "axios";

export async function askChatGPT(message: string) {
    const API_KEY = "sk-xxxxx";

    const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }],
            temperature: 0.7,
        },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_KEY}`,
            },
        }
    );

    return response.data.choices[0].message.content;
}
