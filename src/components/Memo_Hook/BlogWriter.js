import React, { useMemo, useState } from "react";

const calculateTextStats = (text) => {
    // console.log("calculateTextStats called");

    const words = text.trim().length > 0 ? text.trim().split(/\s+/) : [];
    const characters = text.replace(/\s+/g, "").length;

    return {
        wordCount: words.length,
        characterCount: characters,
    };
};

const BlogWriter = () => {
    const [body, setBody] = useState("");
    const [title, setTitle] = useState("");

    const stats = useMemo(() => {
        return calculateTextStats(body);
    }, [body]);

    return (
        <div>
            <input
                style={{ marginBottom: "10px" }}
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Post title"
            />
            <br />
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Post Body"
            />
            <div>
                <p>Word count: {stats.wordCount}</p>
                <p>Character count: {stats.characterCount}</p>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div style={{ margin: "20px" }}>
            <h1>Create Post</h1>
            <BlogWriter />
        </div>
    );
};

export default App;