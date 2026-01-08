# Next.js + Sanity.io Project

This is a [Next.js](https://nextjs.org) project integrated with [Sanity.io](https://www.sanity.io) as a headless CMS, bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm, yarn, pnpm, or bun package manager
- A Sanity.io account (free tier available at [sanity.io](https://www.sanity.io))

## Getting Started

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Set Up Sanity.io

#### Create a Sanity Project

If you don't have a Sanity project yet:

1. Go to [sanity.io](https://www.sanity.io) and sign up/login
2. Create a new project from the Sanity dashboard
3. Note down your **Project ID** and **Dataset name** (usually `production`)

#### Generate API Token

1. Go to your Sanity project settings: `https://www.sanity.io/manage/project/<your-project-id>`
2. Navigate to **API** → **Tokens**
3. Click **Add API token**
4. Give it a name (e.g., "Next.js Frontend")
5. Set permissions to **Viewer** (or **Editor** if you need write access)
6. Copy the generated token

### 3. Configure Environment Variables

Create a `.env` file in the root of your project:

```bash
cp .env
```

Add the following environment variables to `.env`:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
```

**Important:** Update the dataset name if different:
- `NEXT_PUBLIC_SANITY_DATASET`: Your dataset name (default: `production`)

### 4. Run the Development Server

Start the Next.js development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 5. Access Sanity Studio (if applicable)

If your project includes Sanity Studio:

```bash
npm run sanity
# or visit http://localhost:3000/studio if embedded
```


## Key Features

- **Next.js 14+** with App Router
- **Sanity.io** for content management
- **TypeScript** for type safety
- **Optimized fonts** with [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

## Learn More

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Next.js GitHub repository](https://github.com/vercel/next.js)

### Sanity.io Resources
- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Schema Types](https://www.sanity.io/docs/schema-types)
- [GROQ Query Language](https://www.sanity.io/docs/groq)

## Deployment

### Deploy on Vercel

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository on [Vercel](https://vercel.com/new)
3. Add your environment variables in the Vercel dashboard
4. Deploy!

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Deploy Sanity Studio

If using Sanity Studio:

```bash
cd sanity
npm run deploy
```

## Troubleshooting

### Common Issues

**Issue:** "Invalid projectId" error
- **Solution:** Verify your `NEXT_PUBLIC_SANITY_PROJECT_ID` in `.env.local`

**Issue:** "Unauthorized" or 403 errors
- **Solution:** Check your Sanity project permissions and dataset configuration

**Issue:** Data not updating
- **Solution:** Clear your browser cache or check the Sanity dataset for recent changes

## Support

For issues related to:
- **Next.js**: Visit [Next.js GitHub Discussions](https://github.com/vercel/next.js/discussions)
- **Sanity.io**: Visit [Sanity Community Slack](https://slack.sanity.io)

