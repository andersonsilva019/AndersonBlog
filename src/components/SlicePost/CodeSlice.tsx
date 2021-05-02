import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { RichText } from "prismic-reactjs";

const customStyle = {
  lineHeight: "1rem",
  fontSize: "1rem",
};

export function CodeSlice({ content }) {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={tomorrow}
      showLineNumbers
      codeTagProps={{
        style: customStyle,
      }}
    >
      {RichText.asText(content)}
    </SyntaxHighlighter>
  );
};
