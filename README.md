This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Create a new file named `.env.local` under your root project directory, this file will be used to store environment variables that will be used, configuration options:
```
# The AppUrl you set during integration - this is to tell Frontegg your application hostname
FRONTEGG_APP_URL='http://localhost:3000'

# The Frontegg domain is your unique URL to connect to the Frontegg gateway
FRONTEGG_BASE_URL='https://[YOUR_SUBDOMAIN].frontegg.com'

# Your Frontegg application's Client ID
FRONTEGG_CLIENT_ID='[YOUR_CLIENT_ID]'

# The statless session encruption password, used to encrypt
# jwt before sending it to the client side.
#
# For quick password generation use the following command:
#    node -e "console.log(crypto.randomBytes(32).toString('hex'))"
FRONTEGG_ENCRYPTION_PASSWORD='[64_CHAR_SESSION_ENCRYPTION_PASSWORD]'

# The statless session cookie name - you should not change this
FRONTEGG_COOKIE_NAME='fe_session'
```


Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
