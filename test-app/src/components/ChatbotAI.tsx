import { useState } from "react";
import { Input, Button } from "antd";
import { askChatGPT } from "../api/aiApi";

export default function ChatbotAI() {
    const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        if (!input.trim()) return;
        const userMessage = { sender: "user", text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const aiReply = await askChatGPT(input);
            setMessages((prev) => [...prev, { sender: "ai", text: aiReply }]);
        } catch (err) {
            console.error(err);
            setMessages((prev) => [...prev, { sender: "ai", text: "Đã có lỗi xảy ra." }]);
        }
        setLoading(false);
    };

    return (
        <div className="border rounded-lg w-full max-w-md mx-auto flex flex-col h-[500px]">
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`p-2 rounded-lg max-w-[80%] ${msg.sender === "user" ? "ml-auto bg-blue-100" : "bg-gray-100"
                            }`}
                    >
                        {msg.text}
                    </div>
                ))}
                {loading && <div className="text-gray-400">AI đang trả lời...</div>}
            </div>
            <div className="flex border-t p-2 gap-2">
                <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onPressEnter={handleSend}
                    placeholder="Nhập câu hỏi..."
                />
                <Button type="primary" onClick={handleSend} loading={loading}>
                    Gửi
                </Button>
            </div>
        </div>
    );
}
