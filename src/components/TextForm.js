import { english } from "stopwords";
import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

export default function TextForm(props) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [undo, setundo] = useState("");

  const [text, setText] = useState("");

  const getMostRepeatedWord = (text) => {
    const words = text
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .split(/\s+/)
      .filter((word) => !english.includes(word));

    if (words.length === 0) {
      return "-";
    }

    const wordCounts = words.reduce((countMap, word) => {
      countMap[word] = (countMap[word] || 0) + 1;
      return countMap;
    }, {});

    const maxCount = Math.max(...Object.values(wordCounts));
    const mostRepeatedWord = Object.keys(wordCounts).find(
      (word) => wordCounts[word] === maxCount
    );

    if (!mostRepeatedWord) {
      return "-";
    }

    return (
      mostRepeatedWord.charAt(0).toUpperCase() +
      mostRepeatedWord.slice(1).toLowerCase()
    );
  };

  const getLeastRepeatedWord = (text) => {
    const wordCounts = text
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .split(/\s+/)
      .filter((word) => !english.includes(word))
      .reduce((countMap, word) => {
        countMap[word] = (countMap[word] || 0) + 1;
        return countMap;
      }, {});

    const words = Object.keys(wordCounts);
    const minCount = Math.min(...Object.values(wordCounts));
    const leastRepeatedWord = words.find(
      (word) => wordCounts[word] === minCount
    );

    if (!leastRepeatedWord) {
      return "-";
    } else {
      return (
        leastRepeatedWord.charAt(0).toUpperCase() +
        leastRepeatedWord.slice(1).toLowerCase()
      );
    }
  };

  const upper = () => {
    setundo(text);
    let ans = text.toUpperCase();
    setText(ans);
    props.showAlert("Successfully converted to Uppercase", "success");
  };

  const lower = () => {
    setundo(text);
    let ans = text.toLowerCase();
    setText(ans);
    props.showAlert("Successfully converted to Lowercase", "success");
  };

  const clear = () => {
    setundo(text);
    let ans = "";
    setText(ans);
    props.showAlert("Successfully cleared the text", "success");
  };

  const capitalise = () => {
    setundo(text);
    const arr = text.split(" ");

    //loop through each element of the array and capitalize the first letter.

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const ans = arr.join(" ");

    setText(ans);
    props.showAlert("Successfully capitalized the text", "success");
  };

  const alternating = () => {
    setundo(text);
    let ans = "";
    for (let index = 0; index < text.length; index++) {
      if (index % 2 === 0) {
        ans = ans + text[index].toUpperCase();
      } else {
        ans = ans + text[index].toLowerCase();
      }
    }

    setText(ans);
    props.showAlert("Successfully converted to Alternating Case", "success");
  };

  const inverse = () => {
    setundo(text);
    let ans = "";
    for (let index = 0; index < text.length; index++) {
      if (index % 2 === 0) {
        ans = ans + text[index].toLowerCase();
      } else {
        ans = ans + text[index].toUpperCase();
      }
    }

    setText(ans);
    props.showAlert("Successfully converted to Inverse Case", "success");
  };

  const undoText = () => {
    setText(undo);
    props.showAlert("Successfully Undone", "success");
  };

  const time = () => {
    let duration = Math.round(
      0.008 *
        text.split(/\s+/).filter((element) => {
          return element.length !== 0;
        }).length
    );

    if (duration >= 60) {
      let hours = duration / 60;
      let minutes = duration % 60;

      if (minutes === 0) {
        return Math.floor(hours) + " hours of reading";
      } else {
        return (
          Math.floor(hours) + " hours and " + minutes + " minutes of reading"
        );
      }
    } else {
      let minutes = duration % 60;
      if (minutes === 1) {
        return minutes + " minute of reading ";
      }
      return minutes + " minutes of reading ";
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  // Credits: Coding Wala
  const handleExtraSpaces = () => {
    setundo(text);
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const handle = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1
          className={`text-${
            props.mode === "dark" ? "light" : "dark"
          } text-center`}
          style={{ animation: "fadeInUp 1s forwards" }}
        >
          {props.heading}
        </h1>
        <br />
      </div>
      <div className="container">
        <GrammarlyEditorPlugin clientId="client_BjCz9ioNF9BuopLyuwyCkC">
          <textarea
            placeholder="Write here"
            cols="160"
            rows="15"
            onChange={handle}
            value={text}
            className={`bg-${props.mode === "dark" ? "dark" : "light"} text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
          ></textarea>
        </GrammarlyEditorPlugin>
      </div>
      <div className="col-xs-3 container">
        <button
          disabled={text.length === 0}
          className="btn btn-primary rounded-0 py-2 px-3 mx-1 my-1"
          onClick={upper}
        >
          UPPERCASE
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary rounded-0 py-2 px-3 mx-1 my-1"
          onClick={lower}
        >
          lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary rounded-0 py-2 px-3 mx-1 my-1"
          onClick={alternating}
        >
          AlTeRnAtInG
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary rounded-0 py-2 px-3 mx-1 my-1"
          onClick={inverse}
        >
          iNvErSe
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary rounded-0 py-2 px-3 mx-1 my-1"
          onClick={capitalise}
        >
          Capitalize
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary rounded-0 py-2 px-3 mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary rounded-0 py-2 px-3 mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={undo.length === 0}
          className="btn btn-primary rounded-0 py-2 px-3 mx-1 my-1"
          onClick={undoText}
        >
          Undo Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary rounded-0 py-2 px-3 mx-1 my-1"
          onClick={clear}
        >
          Clear Text
        </button>
      </div>
      <br />
      <div
        className="container my-3 raise"
        style={{
          border: "2px solid #ffa260",
          color: "#fff",
          padding: "10px",
          transition: "border-color 0.5s, transform 0.5s, box-shadow 0.5s",
          boxShadow: "0 0.5em 0.5em -0.4em #ffa260",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.borderColor = "#e5ff60";

          e.currentTarget.style.boxShadow = "0 0.5em 0.5em -0.4em #e5ff60";
          e.currentTarget.style.transform = "translateY(-0.25em)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.borderColor = "#ffa260";

          e.currentTarget.style.boxShadow = "0 0.5em 0.5em -0.4em #ffa260";
          e.currentTarget.style.transform = "none";
        }}
      >
        <br />
        <h6 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          The details of the text entered are:{" "}
        </h6>
        <p className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          {time()}
        </p>
        <p className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          Most common word: {getMostRepeatedWord(text)}
        </p>
        <p className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          Least common word: {getLeastRepeatedWord(text)}
        </p>
      </div>
      {/* Preview of text */}
      <br />
      <div
        className="container pulse"
        style={{
          border: "2px solid #3A98B9",
        }}
        // style={{ animation: "fadeInUp 1s forwards" }}
      >
        <br />
        <h2 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          Preview
        </h2>
        <br />
        <p
          className={`text-${props.mode === "dark" ? "light" : "dark"}`}
          style={{ margin: 0, padding: 0, width: "100%" }}
        >
          {text.length > 0 ? (
            text
          ) : (
            <div className="alert alert-primary container" role="alert">
              Nothing to preview!!
            </div>
          )}
        </p>
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
