# Wee-See

## Overview

Wee-See is a web app designed to facilitate collaboration between brands/companies and content creators. It maintains a dynamic feed where companies can announce marketing campaign plans, such as posts and short videos, for their products. Content creators have the option to accept campaigns, follow the necessary steps, and submit their work for review. Once approved, their content is posted along with the product details (product ID, product link).

## Vision

Imagine a feed where people share messages and repost content, similar to platforms like Threads or Twitter/X, but focused on partnerships between content creators and companies through TikTok Shop products.

Wee-See connects content creators with TikTok Shop products, providing a platform where creators can:

- Submit test videos or advertisements.
- Await company approval.
- Upon approval, the payment is deposited in the creator's wallet, and the content is posted or scheduled by the company.

## Workflow

The user flow is similar to a pull request on GitHub, where a company evaluates the content proposed by a creator. The company can approve or deny the submission:

1. A company posts a campaign request for a quick and dynamic advertisement on a product in TikTok Shop.
2. The content creator accepts the campaign but isn't immediately approved.
3. The creator completes the required steps (e.g., two engaging texts and a video) and submits the content.
4. The company evaluates the submission and can download the content or automatically post it via the TikTok API.
5. The agreed payment is transferred to the content creator’s wallet upon approval.

## Market Need

Many content creators have expressed frustration in managing communication with sellers. Creators noted the difficulty in searching messages on TikTok Shop and stressed the importance of discovering products that align with their specific audience demographics. Some creators have even shifted their focus entirely to product discovery.

Opportunities exist for developers to create solutions that streamline communication between sellers and creators, helping both sides find relevant products and manage long-term partnerships. These tools are seen as essential for sustainable success on platforms like TikTok Shop.

Read more on this opportunity: [TikTok Shop Affiliate APIs Launch Developer Opportunity](https://developers.tiktok.com/blog/2024-tiktok-shop-affiliate-apis-launch-developer-opportunity)

---

## Tech Stack

### High Importance
- **Zod**
- **Auth.js/NextAuth v5**
- **TikTok API** (Login Kit & Display)
- **Prisma**
- **Stripe**
- **JWT**

### Mid Importance
- **SWR**
- **Nemo**

### Less Importance
- **Zigma** (extreme potential)
- **v0.dev**
- **shadcn-ui**
- **magic-ui**
- **framer-motion**

---

## Roadmap

- [x] Application setup
- [] Middleware implementation (Sign up/Login)
- [] OAuth with Auth.js (TikTok provider)
- [] Sandbox tests
- [] API production deployment
