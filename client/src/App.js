import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [data, setData] = useState("");
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const result = await axios.get("http://localhost:3000/");
        setData(result.data["hello"]);
    };

    return <div className="App">{data}</div>;
}

export default App;
