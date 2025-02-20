import React, { useEffect, useState } from "react";

function Home({ properties }) {
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("useEffect triggered when text change");
  }, [text]);
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div>
      <h1>useState Example</h1>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <h1>value typed {text}</h1>
      <button onClick={()=>setShowOptions(!showOptions)}>
        {showOptions ? "hide" : "show"}
      </button>
      {showOptions && (
        <div>
          <li>useState</li>
          <li>useEffect</li>
        </div>
      )}
    </div>
  );
}

export default Home;
