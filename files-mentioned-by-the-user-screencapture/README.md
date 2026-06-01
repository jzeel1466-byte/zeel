# Zeel Jain Portfolio

Next.js portfolio site prepared for deployment on Vercel.

## Deploy Through GitHub And Vercel

1. Open [github.com/new](https://github.com/new).
2. Set the repository name to `zeel-jain-portfolio`.
3. Choose **Public** or **Private**, then select **Create repository**.
4. On the empty repository page, select **uploading an existing file**.
5. Upload these items from the project folder:
   - `app`
   - `public`
   - `.gitignore`
   - `.vercelignore`
   - `next-env.d.ts`
   - `next.config.mjs`
   - `package.json`
   - `postcss.config.mjs`
   - `README.md`
   - `tailwind.config.ts`
   - `tsconfig.json`
6. Enter `Initial portfolio deployment` as the commit message and select
   **Commit changes**.
7. Open the [Vercel dashboard](https://vercel.com/dashboard).
8. Select **Add New...** > **Project**.
9. Find `zeel-jain-portfolio` under **Import Git Repository**, then select
   **Import**.
10. Keep the detected **Next.js** framework settings. The root directory is
    `./`, and no environment variables are required.
11. Select **Deploy**.

No environment variables are required.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```
