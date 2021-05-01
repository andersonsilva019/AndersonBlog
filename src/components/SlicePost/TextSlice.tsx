import { RichText } from "prismic-reactjs";

export function TextSlice({ slice }) {
  return <div>{RichText.render(slice.primary.content)}</div>;
};

