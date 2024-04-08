# 專案組態定義範例

```bash
src\
    app\                      # app router
        _lib\                 # 較高階的共用計算函式。比如：加解密計算。
            utils.ts          # 工具函式組
        _serverComponents     # 共用的 RSC,取得登入資訊等？用 async Componnet 隱藏資訊
        (main)\               # Group Routes
            main\
                page.tsx      # 登入後主頁
            dashboard\
                layout.tsx    # ParallelLayout
                page.tsx
                @subpageA\
                    page.tsx
                @subpageB\
                    page.tsx
                @subpageC
                    page.tsx
            formMPA\          ## 用 SSR\MPA 模式。
                create\
                    page.tsx  # 新增畫面
                [formNo]\
                    page.tsx  # 編輯畫面
                page.tsx      # 清單畫面。Form 進入點。state-less
                serverApi.tx  # 伺服器端服務 API
                widgets\
                    Foo.tsx
            formSPA\          ## 用 SSR\SPA 模式 
                page.tsx      # Form 進入點。"use client"，導入Recoil
                DataList.tsx  # 清單畫面
                AddView.tsx   # 新增畫面
                EditView.tsx  # 編輯畫面
                atoms.ts      # form state with Recoil
                serverApi.tx  # 伺服器端服務 API
                widgets\
                    Foo.tsx
            demo01\
                page.tsx      # 某功能頁面
                SubComp.tsx   # 某功能子元件
            layout.tsx        # MainLayout
        (blog)\
            blog\
                page.tsx      # 部落格,公開頁面
            about\
                page.tsx      # 關於我們
            layout.tsx        # NoLayout
        (auth)\
            login\
                page.tsx      # 登入畫面
            register\
                page.tsx      # 使用者註冊畫面
            forget\
                page.tsx      # 忘記密碼
            layout.tsx        # AuthLayout
        
        layout.tsx            # RootLayout
        error.tsx             # ErrorBoundary
        loading.tsx           # Suspense
        not-found.tsx         # NotFound
        page.tsx              # Home
     
    components\               ## 客制共用元件
        highorder\            # 客制高階元件
            ATextField.tsx    # 
            FlexBox.tsx       # FlexBox, FlexItem
            all.tsx
        Overlay.tsx           # Overlay
        Panel.tsx
        Alert.tsx
    middleware.tx             ## middleware function		
```
