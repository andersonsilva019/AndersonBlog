import type { RichTextField } from '@prismicio/client'
import { PrismicRichText } from "@prismicio/react";

export type TextSliceProps = {
  content: RichTextField
}

export function TextSlice({ content }: TextSliceProps) {
  return (
    <div>
      <PrismicRichText field={content} />
    </div>
  )
};

