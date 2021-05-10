import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: { [key: string]: unknown }[]
  }
}

export function AdBanner() {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-9324248521098640"
      data-ad-slot="7142364289"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
  );
};
