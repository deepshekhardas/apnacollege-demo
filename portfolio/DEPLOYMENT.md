# Deployment Instructions

Here's how to deploy your portfolio website on Vercel, Render, or Netlify.

## Vercel (Recommended)

Vercel is the easiest way to deploy a Next.js application.

1. **Push to GitHub:** Make sure your project is pushed to a GitHub repository.
2. **Import Project:** Go to your Vercel dashboard and click "Import Project."
3. **Select Git Repository:** Select your GitHub repository and import it.
4. **Configure Project:** Vercel will automatically detect that you're using Next.js and configure the project for you.
5. **Deploy:** Click "Deploy" to deploy your website.

## Render

Render is another great option for deploying your portfolio.

1. **Push to GitHub:** Make sure your project is pushed to a GitHub repository.
2. **Create a New Web Service:** Go to your Render dashboard and create a new "Web Service."
3. **Connect Your Repository:** Connect your GitHub repository and select your project.
4. **Configure Settings:**
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
5. **Deploy:** Click "Create Web Service" to deploy your website.

## Netlify

Netlify is also a popular choice for deploying Next.js applications.

1. **Push to GitHub:** Make sure your project is pushed to a GitHub repository.
2. **Add a New Site:** Go to your Netlify dashboard and click "Add new site" > "Import an existing project."
3. **Connect Your Repository:** Connect your GitHub repository and select your project.
4. **Configure Settings:**
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `.next`
5. **Deploy:** Click "Deploy site" to deploy your website.
