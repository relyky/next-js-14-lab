# Next.js 14 初評手札

主要參考練習: [Next.js 14 Tutorial](https://www.youtube.com/playlist?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI)

登入機制參考: [Implementing stateless session for Next.js using Server Actions](https://blog.logto.io/nextjs-server-actions-stateless-session/)

# 評估項目

- [x]  安裝 next.js app
- [x]  App Router
- [x]  [useTransaction](https://react.dev/reference/react/useTransition) - https://dmitripavlutin.com/react-usetransition/
- [x]  [useDeferredValue](https://react.dev/reference/react/useDeferredValue)
- [ ]  client side 如何取得 “metadata” 或取不到？
- [ ]  ~~Pages Router —- abort 用 app router 就夠了。這是向前相容用的。~~
- [ ]  Api Router
- [x]  Link "next/link"
- [x]  main layout \ [RootLayout](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required)
- [x]  app icon & page title
- [x]  SSR 如何 CRUD
- [x]  Recoil - state managerment, Recoil 只能在前端作用
- [x]  Recoil Toolkit 在 Release mode 也有效？YES
- [x]  Recoil atom 與 selector 都會進 DevTools 紀錄？YES
- [x]  用 Recoil 取代 Redux ? 可
- [x]  再用 jotai 取代 Recoi
- [x]  試用 Middleware
- [x]  部署到 IIS
- [x]  試完 Next.js 14 所有教學 https://www.youtube.com/playlist?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI
- [x]  用 node-mssql 存取 SQL Server https://github.com/tediousjs/node-mssql?tab=readme-ov-file#tedious 底層是 Tedious
- [ ]  ~~使用Tedious存取SQL Server — abort 指令太低階了 https://app.gitbook.com/o/V2QerPVDKA8Sepj61dOT/s/TcGSU3zrSsgSHyCjRHOM/next.js-shi-yong-tedious-cun-qu-sql-server~~
- [ ]  用 Todo 開發 CRUD — 建議用 SSR\SPA 模式處理。
- [x]  用 SSR\MPA 模式開發 CRUD — 不建議。除了像登入這種欄位極少的畫面外。
- [ ]  call gRPC https://docs.nestjs.com/microservices/grpc
- [x]  Authentication https://blog.logto.io/nextjs-server-actions-stateless-session/

# 主要特點
* CSR → SSR → Suspense for SSR   
rendering 演進
* Full Stack   
就是 CSR, SSR, SSG 三種 rendering 模式都支援。
* CSS, SSR and RSCs   
支援 CSS/CSS isloation,    
SSR,Server-side rending / MPA,muliti-page app,   
React Server Componnets 伺服器端元件
* GET cached & Streaming   
自後端 GET 的 page 會預設 cache 與面頁會 streaming 切割成數個小塊漸進傳送理想上畫面也會漸進呈現。
* Auto routes prefetching   
頁面相關資源會自動預載。
* Interactive   
前端元件才能（輸入）互動。需手動指定元件互動性 “use client”。
* File Conventions   
檔案約定。page.tsx, loading.tsx, layout.tsx 等等數個特殊檔名各有明確用途。

<br/>

# 字彙與縮寫
* RSC: React Server Component
* CSR: Client-side Rendering
* SSR: Server-side Rendering
* SSG: Static Site Generation
* SPA: Single Page Application
* MPA: Multiple Page Application
* SEO: Search Engine Optimization

# § 論 SSR 導入 Recoil 與否
若完全發揮 SSR\MPA 的優勢的話，應該是不需要 Redux | Recoil 等前端 state managerment 套件。   
若是 stateless 且是輕量的存取那很明確是不需要。比如登入畫面。   
若有厚重的前端狀態，如 formData 欄位多又分群，這可能性不小，那還是有導入的價值。  
不管前端狀態輕或厚，導入 Recoil 階有偶合效果，可明確指明某部份碼就是放置 FormData。   

> ※ 實務上在 MPA 多頁模式下無法共享狀態，即 Recoil 在 MPA 模式下效益很低；或說 Recoil 在 SPA 模式下才有效益。

# 安裝 next.js 14

```bash
√ What is your project named? ... next-js-14-lab
√ Would you like to use TypeScript? ... Yes
√ Would you like to use ESLint? ... Yes
√ Would you like to use Tailwind CSS? ... No
√ Would you like to use src/ directory? ... Yes
√ Would you like to use App Router? (recommended) ... Yes
√ Would you like to customize the default import alias (@/*)? ... No
```
建置指令
```bash
npm run dev   --- debug mode => Dev Server
npm run builg --- release build
npm run start --- 執行 release build 好的碼
```

# Project Organization and File Colocation 
最重要的是這些約定檔案目錄的嵌套關係。Page Nested 頁面嵌套結構。

參考官網：   
* [File Conventions](https://nextjs.org/docs/app/api-reference/file-conventions)
* [Project Organization and File Colocation](https://nextjs.org/docs/app/building-your-application/routing/colocation)   

## File Conventions 常用檔案

* page.tsx - 基本
* route.ts - 進階用途。與 page.tsx 二擇一。
* layout.tsx - 基本
* template.tsx - 進階用途。在 parallel routes 才有意義。
* default.tsx - 進階用途。用於 Parallel Routing。
* not-found.tsx - 基本
* loading.tsx - 基本
* error.tsx - 基本
* global-error.tsx - 最後當掉的防線。

## File Conventions → Componnet Hierarchy
這些 File Conventions 在組織成頁面時會依約定嵌套 Componnet Hierarchy。

![img](/doc/Component%20Hierarchy.png)

# force-dynamic 模式
因預設 GET-cached，頁面預設 cached 600秒。有些即時畫面不想被 cached 的話就可啟用 `force-dynamic` 模式。   

```typescript
export const dynamic = ‘force-dynamic’;
```
或當該頁面有使用 `cookies()`, `headers()`, `searchParams` 等則自動取消 cached。

參考:   
* [Route Segment Config](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config)
* [Next.js 14 Tutorial-43-Caching in Route Handlers](https://www.youtube.com/watch?v=5_cJFYZSiDM&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=43)
* [Data Fetching, Caching, and Revalidating](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating)

記不完...先這樣   
(EOF)
