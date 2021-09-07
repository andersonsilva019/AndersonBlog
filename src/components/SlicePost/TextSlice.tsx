import { RichText, RichTextBlock } from "prismic-reactjs";

export type TextSliceProps = {
  content: RichTextBlock[]
}

export function TextSlice({ content }: TextSliceProps) {
  return <div>{RichText.render(content)}</div>;
};

