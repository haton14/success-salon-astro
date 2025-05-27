# AstroファイルからTSXへの変換手順

## 概要
AstroファイルをTSXファイルに変換する際の手順とポイントをまとめています。

## 変換手順

1. **新しいファイルの作成**
   - `.astro`ファイルと同じ場所に`.tsx`ファイルを作成
   - 同時にCSS Modulesのファイル（`.module.css`）も作成

2. **コンポーネントの変換**
   ```typescript
   // Astroの場合
   ---
   export interface Props {
     title: string;
   }
   const { title } = Astro.props;
   ---

   // TSXの場合
   import type { ReactNode } from 'react';
   
   interface Props {
     title: string;
     children: ReactNode;  // slotの代わりにchildrenを使用
   }
   
   export default function Component({ title, children }: Props) {
     // ...
   }
   ```

3. **スタイルの変換**
   ```css
   /* Astroの場合 */
   <style is:global>
     html {
       /* styles */
     }
   </style>

   /* CSS Modulesの場合 */
   /* Component.module.css */
   .html {
     /* styles */
   }
   ```

   ```typescript
   // TSXでのスタイルの適用
   import styles from './Component.module.css';
   
   <html className={styles.html}>
   ```

4. **スクリプトの変換**
   ```typescript
   // Astroの場合
   <script>
     // JavaScript code
   </script>

   // TSXの場合（インラインスクリプトの場合）
   <script dangerouslySetInnerHTML={{
     __html: `
       // JavaScript code
     `
   }} />
   ```

5. **その他の変換ポイント**
   - `<slot />` → `{children}`
   - `Astro.props` → 関数の引数でpropsを受け取る
   - グローバルスタイル → CSS Modulesのクラスとして定義
   - TypeScriptの型インポート → `import type`を使用

6. **クリーンアップ**
   - 元の`.astro`ファイルを削除

## 注意点
- TypeScriptの型定義は`import type`を使用する
- CSS Modulesを使用する場合は、クラス名の衝突を避けられる
- Reactコンポーネントでは`children`プロパティを明示的に型定義する必要がある

## 具体的な変換例

### Layout.astroからLayout.tsxへの変換

**元のLayout.astro:**
```astro
---
import '@fontsource/sawarabi-gothic';

export interface Props {
  title: string;
}

const { title } = Astro.props;
---

<!doctype html>
<html lang="ja">
  <head>
    <!-- Google tag (gtag.js) -->
    <script
      type="text/partytown"
      src="https://www.googletagmanager.com/gtag/js?id=G-P31LQLGW3Q"></script>
    <script type="text/partytown">
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-P31LQLGW3Q");
    </script>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <meta
      name="description"
      content="美容室successのホームページ 茨城県鹿嶋市小山1072-88"
    />
    <link rel="sitemap" href="/sitemap-index.xml" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="generator" content={Astro.generator} />
    <title>{title}</title>
  </head>
  <body>
    <slot />
    <!-- Cloudflare Web Analytics -->
    <script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon='{"token": "9b594bcdd658404784723e786493ce00"}'
    ></script>
  </body>
</html>
<style is:global>
  html {
    font-family: 'Sawarabi Gothic', sans-serif;
    background-color: #f6f6f6;
  }
  body {
    margin: 0;
    color: #383838;
  }
  code {
    font-family: 'Sawarabi Gothic', sans-serif;
  }
  a {
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }
</style>
```

**変換後のLayout.tsx:**
```typescript
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
```

**Layout.module.css:**
```css
.html {
  font-family: 'Sawarabi Gothic', sans-serif;
  background-color: #f6f6f6;
}

.body {
  margin: 0;
  color: #383838;
}

.code {
  font-family: 'Sawarabi Gothic', sans-serif;
}

.link {
  outline: none;
  -webkit-tap-highlight-color: transparent;
}
```

### 主な変更点
1. `<slot />`を`{children}`に変更し、Propsに`ReactNode`型で追加
2. グローバルスタイルをCSS Modulesに移行
3. インラインスクリプトを`dangerouslySetInnerHTML`を使用して変換
4. `Astro.generator`を"Astro"の固定文字列に変更
5. `charset`を`charSet`に変更（React JSXの命名規則に合わせる）
6. TypeScriptの型インポートに`import type`を使用

### 関連ファイルの更新
Layoutコンポーネントを使用している各ページ（.astroファイル）で、以下のようにインポート文を更新する必要があります：

```diff
- import Layout from "../layouts/Layout.astro";
+ import Layout from "../layouts/Layout";
```

この変更が必要なファイル：
- src/pages/index.astro
- src/pages/access/index.astro
- src/pages/concept/index.astro
- src/pages/dressing/index.astro
- src/pages/eyelash/index.astro
- src/pages/head-spa/index.astro
- src/pages/price/index.astro
- src/pages/straight/index.astro

注意点：
- 拡張子（.astro）を削除
- インポートパスは相対パスのまま
- TypeScriptは自動的に.tsxファイルを解決

## 参考
- [Astro公式ドキュメント](https://docs.astro.build/)
- [React公式ドキュメント](https://react.dev/)
