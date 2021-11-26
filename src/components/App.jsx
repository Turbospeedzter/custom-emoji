import React from "react";
import emojilist from "../emojilist";
import Entry from "./Entry";
import Header from "./Header";
import Footer from "./Footer";


function createEntry(emojilist) {
  return <Entry key={emojilist.id} emoji={emojilist.emoji} name={emojilist.name} term={emojilist.term} meaning={emojilist.meaning} />
}

function App() {
  return (
    <div>
      <Header />
      <dl className="dictionary">{emojilist.map(createEntry)}</dl>
      <Footer />
      </div>
  );
}


export default App;