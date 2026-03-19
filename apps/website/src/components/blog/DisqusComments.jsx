"use client";

import { useEffect } from "react";
import Script from "next/script";

const DISQUS_SHORTNAME = "skillyards-blog";

export default function DisqusComments({ slug, title, id }) {
  useEffect(() => {
    window.disqus_config = function () {
      this.page.url = window.location.href;
      this.page.identifier = id || slug;
      this.page.title = title;
    };

    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: window.disqus_config,
      });
    }
  }, [slug, title, id]);

  return (
    <>
      <div suppressHydrationWarning>
        <div id="disqus_thread" style={{ minHeight: "300px" }} />
      </div>

      <Script
        id="disqus-script"
        strategy="afterInteractive"
        src={`https://${DISQUS_SHORTNAME}.disqus.com/embed.js`}
      />
    </>
  );
}