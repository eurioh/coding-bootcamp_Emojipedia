//1. Create Entry components -
//2. Created props to replace hardcoded data -
//3.  Import the emopedia const.
//4.  Map through the emojipedia array and render Entry components

import React from "react";
import Card from "./components/Card";
import emojipedia from "./emojipedia.js";

function createCard(content) {
  return (
    <Card
      key={content.id}
      emoji={content.emoji}
      name={content.name}
      description={content.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
