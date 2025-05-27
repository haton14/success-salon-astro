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

## 参考
- [Astro公式ドキュメント](https://docs.astro.build/)
- [React公式ドキュメント](https://react.dev/)
