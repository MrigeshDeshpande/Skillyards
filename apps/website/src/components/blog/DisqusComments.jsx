"use client";

import { useEffect, useRef } from "react";

const DISQUS_SHORTNAME = "skillyards-blog";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.skillyards.com";

export default function DisqusComments({ slug, title, id }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const pageUrl = `${SITE_URL}/blog/${slug}`;

    const config = function () {
      this.page.url = pageUrl;
      this.page.identifier = id || slug;
      this.page.title = title;
    };

    if (window.DISQUS) {
      window.DISQUS.reset({ reload: true, config });
      return;
    }

    // Both needed — config for settings, shortname for forum detection fallback
    window.disqus_config = config;
    window.disqus_shortname = DISQUS_SHORTNAME;

    if (!document.getElementById("disqus-embed-script")) {
      const script = document.createElement("script");
      script.id = "disqus-embed-script";
      script.src = `https://${DISQUS_SHORTNAME}.disqus.com/embed.js`;
      script.async = true;
      script.setAttribute("data-timestamp", String(+new Date()));
      document.body.appendChild(script);
    }
  }, [slug, title, id]);

  return (
    <div ref={containerRef} className="w-full mt-4">
      <div id="disqus_thread" style={{ minHeight: "300px" }} />
      <noscript>
        Please enable JavaScript to view{" "}
        <a href="https://disqus.com/?ref_noscript">
          comments powered by Disqus.
        </a>
      </noscript>
    </div>
  );
}