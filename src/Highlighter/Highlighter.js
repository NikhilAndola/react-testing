import React, { useState, useEffect } from 'react';

export default function Highlighter(props) {
  const { cite, text } = props;
  const [searchText, setSearchText] = useState('');

  function getText(text, searchText) {
    return searchText ? getTextWithHighlights(text, searchText) : text;
  }

  function getTextWithHighlights(text, searchText) {
    const regex = new RegExp(searchText, 'gi');
    const newText = text.replace(regex, `<mark class="highlight">$&</mark>`);

    return <span dangerouslySetInnerHTML={{ __html: newText }} />;
  }

  const search = (e) => {
    setSearchText(e.target.value);
  };

  const textToShow = getText(text, searchText);

  return (
    <div className="container">
      <div className="search-container">
        <label htmlFor="search">Search within quoted text</label>
        <input
          id="search"
          placeholder="Type `web` for example"
          type="search"
          autoComplete="off"
          onChange={search}
          value={searchText}
        />
      </div>
      <blockquote cite={cite}>{textToShow}</blockquote>
    </div>
  );
}
