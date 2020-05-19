This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

## Upgrade to latest Next.js
npm i next@latest react@latest react-dom@latest


## Install
Install SASS : npm install sass


## To start

Run to start : npm run dev | npm run dev -- -p <your port here>, npm run dev -- -p 3004

Open [http://localhost:3010](http://localhost:3010) with your browser to see the result.


## Static build

Update scripts:

"scripts": {
  "build": "next build && next export"
}

Then run:

npm run build


## Vercel
Install Vercel CLI, run : npm i -g now

Add domain, run: now domains add webspun.io

Deploy to webspun.io, run: now domains add webspun.io

In order to deploy something, run `now`.
Connect your Git Repositories to deploy every branch push automatically (https://zeit.ink/1X).


Deploy to production (webspun.io), run `now --prod`


Get name servers, run: now domains inspect webspun.io

Verify domain, run: now domains verify webspun.io
