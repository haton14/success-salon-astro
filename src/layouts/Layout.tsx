import '@fontsource/sawarabi-gothic';
import type { ReactNode } from 'react';
import styles from './Layout.module.css';

interface Props {
  title: string;
  children: ReactNode;
}

export default function Layout({ title, children }: Props) {
  return (
    <html lang="ja" className={styles.html}>
      <head>
        {/* Google tag (gtag.js) */}
        <script
          type="text/partytown"
          src="https://www.googletagmanager.com/gtag/js?id=G-P31LQLGW3Q"
        />
        <script type="text/partytown" dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "G-P31LQLGW3Q");
          `
        }} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <meta
          name="description"
          content="美容室successのホームページ 茨城県鹿嶋市小山1072-88"
        />
        <link rel="sitemap" href="/sitemap-index.xml" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="generator" content="Astro" />
        <title>{title}</title>
      </head>
      <body className={styles.body}>
        {children}
        {/* Cloudflare Web Analytics */}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "9b594bcdd658404784723e786493ce00"}'
        />
      </body>
    </html>
  );
}
