import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { RichText } from "prismic-reactjs";

export function CodeSlice({ content, language }) {
  return (
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      customStyle={{
        backgroundColor: "#191622",
        padding: "1rem",
        marginTop: "1rem",
        borderRadius: "0.5rem",
        lineHeight: "1.5rem",
        fontSize: "1rem",
      }}
      li
      showLineNumbers
    >
      {RichText.asText(content)}
    </SyntaxHighlighter>
  );
};
