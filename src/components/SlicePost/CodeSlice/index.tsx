import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { RichText } from "prismic-reactjs";

import styles from './styles.module.scss'

export function CodeSlice({ content, language }) {
  return (
    <div className={styles[language]}>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          backgroundColor: "#191622",
          padding: language === 'bash' ? "1rem 2rem" : "1rem 1rem 1rem 0",
          marginTop: "1rem",
          borderRadius: "0.5rem",
          lineHeight: "1.5rem",
          fontSize: "1rem",
        }}
        showLineNumbers={language !== 'bash' ? true : false}
      >
        {RichText.asText(content)}
      asdas
    </SyntaxHighlighter>
    </div>
  );
};
