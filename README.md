# beacon.js

[![npm version](https://badge.fury.io/js/@athoscommerce%2Fbeacon.svg?icon=si%3Anpm&icon_color=%2300aeef)](https://badge.fury.io/js/@athoscommerce%2Fbeacon)

A TypeScript library for tracking user interactions and analytics events to Athos Commerce's Beacon API. This library enables real-time tracking of user behavior across search, recommendations, autocomplete, and e-commerce interactions.

This package can be used by both Athos Commerce and Searchspring accounts.

## Features

- 🎯 **Multi-Channel Tracking**: Track events from search, autocomplete, recommendations, bundles, chat, category pages, and product pages
- 📦 **Smart Batching**: Automatically batches requests for optimal performance
- 💾 **Local Storage Management**: Manages user IDs, session IDs, cart state, and viewed products
- 🔍 **Attribution Tracking**: Built-in support for tracking attribution and campaign sources
- 🎨 **Flexible Configuration**: Support for custom headers, custom fetch implementations, and multiple environments
- 🌍 **Multi-Currency**: Support for tracking transactions in different currencies
- ⚡ **Production Ready**: Optimized for performance with features like keepalive requests and efficient batching

## Usage Paths

Beacon has two integration paths with the same tracking capabilities:

- CDN path: include the CDN script and call methods on the auto-created global `window.athos.tracker`.
- NPM path: instantiate `Beacon` in your own application/runtime and call methods on your instance.

### Quick Start: CDN

```html
<script siteId="abc123" src="https://cdn.athoscommerce.net/analytics/beacon.js"></script>
<script>
  window.athos.tracker.setCurrency({ code: 'USD' });
  window.athos.tracker.events.autocomplete.render({
    data: {
      responseId: '35e5ea31-a537-471b-ba2b-6eea9caebe62'
    }
  });
</script>
```

### Quick Start: NPM

```typescript
import { Beacon } from '@athoscommerce/beacon';

// Initialize Beacon with required siteId
const beacon = new Beacon({ siteId: 'abc123' });

// Optionally set currency for transaction tracking
beacon.setCurrency({ code: 'USD' });

// Track an autocomplete render event
beacon.events.autocomplete.render({
  data: {
    // ... render data
  }
});

// Track a product page view
beacon.events.product.pageView({
  data: {
    result: {
      uid: 'variant-123',
      sku: 'SKU-123',
      parentId: 'product-123'
    }
  }
});
```

Product events require `uid` and `parentId`; include `sku` when available from your API response. For parent/variant catalogs, use `parentId` as the parent product ID and `uid` as the variant ID. For simple products with no variants, set `uid` and `parentId` to the same value.

## Installation

### CDN

To use the beacon via our CDN build, place the following script before the page's closing `</head>` tag:

```html
<script siteId="[REPLACE WITH ATHOS OR SEARCHSPRING SITEID]" src="https://cdn.athoscommerce.net/analytics/beacon.js"></script>
```

After this script executes successfully, `window.athos.tracker` is available for events and method calls.

```html
<script>
  window.athos.tracker.events.search.render({ data: { responseId: '35e5ea31-a537-471b-ba2b-6eea9caebe62' } });
</script>
```

The CDN install path is designed for platform template integrations (for example BigCommerce, Magento, or Shopify), where you add the script in storefront template/theme files.

### NPM

If you are integrating Athos or Searchspring via API, the `@athoscommerce/beacon` package is available to use for your convenience.

```bash
npm install --save @athoscommerce/beacon
```

## Initialization

### CDN Initialization

When using the CDN script (`https://cdn.athoscommerce.net/analytics/beacon.js`), Beacon initializes automatically and assigns `window.athos.tracker`.

Expected behavior:

- Missing or unreadable `siteId` prevents initialization and logs an error.
- If Snap tracking is already on the page, the script logs a warning and skips initialization.
- If Beacon is included multiple times, the second initialization is ignored with a warning.

Once initialized, use `window.athos.tracker` for all events and public methods.

### NPM Initialization

Use the `Beacon` constructor when integrating through the NPM package.

#### Beacon Globals

The first parameter to the `Beacon` constructor contains required global configuration that applies to all tracking events.

```typescript
import { Beacon } from '@athoscommerce/beacon';

const beacon = new Beacon({ siteId: 'abc123' });
```

| Option | Type | Description | Required |
|--------|------|-------------|----------|
| `siteId` | `string` | Your Athos site ID | ✔️ |

#### Beacon Config

The second parameter to the `Beacon` constructor provides _optional_ configuration for API behavior and request handling.

```typescript
const beacon = new Beacon(
  { siteId: 'abc123' },
  {
    mode: 'development',
    initiator: 'my-app/1.0.0',
    requesters: {
      beacon: {
        origin: 'https://custom-beacon.example.com/beacon/v2',
        headers: { 'Authorization': 'Bearer token' }
      },
      personalization: {
        origin: 'https://custom-personalization.example.com',
        headers: { 'X-Custom-Header': 'value' }
      }
    },
    apis: {
      fetch: customFetchImplementation
    },
    href: 'https://example.com/page',
    userAgent: 'Custom User Agent'
  }
);
```

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| `mode` | `'production' \| 'development'` | Application mode. In development mode, errors are logged to console | `'production'` |
| `initiator` | `string` | Identifier for the beacon instance | `{athos\|searchspring}/beaconjs/{version}` |
| `apis.fetch` | `FetchAPI` | Custom fetch implementation | Global `fetch` (if available) |
| `requesters.beacon.origin` | `string` | Custom beacon API endpoint | Athos: `https://analytics.athoscommerce.net/beacon/v2`, Searchspring: `https://analytics.searchspring.net/beacon/v2` |
| `requesters.beacon.headers` | `HTTPHeaders` | Custom headers for beacon API requests | `{ 'Content-Type': 'text/plain' }` |
| `requesters.personalization.origin` | `string` | Custom personalization preflight origin (the SDK appends `/v1/preflight`) | `https://{siteId}.a.{athoscommerce.net\|searchspring.io}` |
| `requesters.personalization.headers` | `HTTPHeaders` | Custom headers for personalization requests | |
| `href` | `string` | Override page URL for tracking | `window.location.href` |
| `userAgent` | `string` | Override user agent string | `navigator.userAgent` |


## Common properties

### responseId

The Athos Search, Autocomplete, and Recommendations APIs will return a `responseId` property that is required on most beacon event's payload. It will only be returned if the `beacon=true` parameter is provided to each API. 

```typescript
// Search API Example Response
const response = {
  "breadcrumbs": [...],
  "merchandising": {...},
  "pagination": {...},
  "query": {...},
  "responseId": "f70594d2-c360-4292-8711-b256567099d3",
  "results": [...],
  "sorting": {...},
}

beacon.events.search.render({ 
  data: {
    responseId: response.responseId,
  }
});
```

### Merchandising Banner uid (Banner ID)

When building the data payload for `banners`, the `uid` property is the banner identifier from merchandising content (not a product `uid`). Here is an example of how you may choose to extract it.

```typescript
// Search API Example Response
const response = {
  "merchandising": {
    "content": {
      "header": [
            "<script data-banner-id=\"440998\" data-banner-type=\"html\" data-banner-html=\"<div style=&quot;width: 100%; background: #ADD8E6; text-align: center; padding: 20px;&quot;>On Sale</div>\" type=\"text/widget\"></script><div style=\"width: 100%; background: #ADD8E6; text-align: center; padding: 20px;\">On Sale</div>"
      ],
      "banner": [],
      "footer": [],
      "left": [],
      "inline": []
    }
  }
}
function getMerchandisingBannerUid(response, type) {
  // Extract data-banner-id from the HTML string
  const htmlString = response.merchandising?.content?.[type]?.[0] || '';
  const match = typeof htmlString === 'string' && htmlString.match(/data-banner-id="(\d+)"/);
  const uid = match ? match[1] : '';
  return uid;
}
beacon.events.search.impression({ 
  data: {
    responseId: response.responseId,
    results: [],
    banners: [
      { uid: getMerchandisingBannerUid(response, 'header') } // { uid: '440998' }
    ]
  }
});
```


## Tracking Events

Each event method accepts a payload object. An optional `siteId` can be provided to override the global siteId for a specific event.

For product payloads, use `uid` as the variant/item identifier and `parentId` as the parent product identifier. For simple products with no variants, set `uid` and `parentId` to the same value. For banner payloads, `uid` refers to the banner identifier.

Code samples below use a `beacon` variable — substitute the appropriate entrypoint:

| Path | Entrypoint |
|------|------------|
| CDN | `const beacon = window.athos.tracker;` |
| NPM | `const beacon = new Beacon({ siteId: 'abc123' });` |

### Shopper Events

#### Login

Track when a user logs into their shopper account.

```typescript
beacon.events.shopper.login({ 
  data: { id: 'shopper-12345' }
});
```

### Autocomplete Events

Autocomplete events track user interactions within the autocomplete/search suggestions interface.

#### Render

Track when autocomplete suggestions are rendered to the user.

```typescript
beacon.events.autocomplete.render({ 
  data: {
    responseId: response.responseId
  }
});
```

#### Impression

Track impressions (visibility) of autocomplete suggestions.

```typescript
beacon.events.autocomplete.impression({ 
  data: {
    responseId: response.responseId,
    results: [
      { type: 'product', uid: 'variant-1', parentId: 'product-1', sku: 'SKU-1' },
      { type: 'banner', uid: 'banner-1' }
    ],
    banners: [
      { uid: 'banner-1' }
    ]
  }
});
```

#### Add to Cart

Track when a user adds a product to cart from autocomplete results.

```typescript
beacon.events.autocomplete.addToCart({ 
  data: {
    responseId: response.responseId,
    results: [
      { 
        uid: 'variant-1', 
        parentId: 'product-1',
        sku: 'SKU-1', 
        qty: 1, 
        price: 29.99 
      }
    ]
  }
});
```

This method automatically manages the stored cart state.

#### Click Through

Track when a user clicks on an autocomplete suggestion.

```typescript
beacon.events.autocomplete.clickThrough({ 
  data: {
    responseId: response.responseId,
    results: [
      { 
        type: 'product', 
        uid: 'variant-1', 
        parentId: 'product-1',
        sku: 'SKU-1'
      }
    ]
  }
});
```

#### Redirect

Track when an autocomplete suggestion causes a page redirect.

```typescript
const redirectUrl = response.merchandising?.redirect; // 'https://example.com/sale-page'
beacon.events.autocomplete.redirect({ 
  data: {
    redirect: redirectUrl,
    responseId: response.responseId
  }
});
```

### Search Events

Search events track user interactions within search results pages.

#### Render

```typescript
beacon.events.search.render({ 
  data: {
    responseId: response.responseId
  }
});
```

#### Impression

```typescript
beacon.events.search.impression({ 
  data: {
    responseId: response.responseId,
    results: [
      { type: 'product', uid: 'variant-1', parentId: 'product-1', sku: 'SKU-1' },
      { type: 'product', uid: 'variant-2', parentId: 'product-2', sku: 'SKU-2' }
    ],
    banners: [{ uid: 'banner-1' }]
  }
});
```

#### Add to Cart

```typescript
beacon.events.search.addToCart({ 
  data: {
    responseId: response.responseId,
    results: [
      { 
        uid: 'variant-1', 
        parentId: 'product-1',
        sku: 'SKU-1', 
        qty: 1, 
        price: 29.99 
      }
    ]
  }
});
```

#### Click Through

```typescript
beacon.events.search.clickThrough({ 
  data: {
    responseId: response.responseId,
    results: [
      {
        type: 'product',
        uid: 'variant-1',
        parentId: 'product-1',
        sku: 'SKU-1'
      }
    ]
  }
});
```

#### Redirect

```typescript
beacon.events.search.redirect({ 
  data: {
    redirect: 'https://example.com/promo',
    responseId: response.responseId
  }
});
```

### Category Events

Category events track user interactions on category/listing pages.

#### Render

```typescript
beacon.events.category.render({ 
  data: {
    responseId: response.responseId
  }
});
```

#### Impression

```typescript
beacon.events.category.impression({ 
  data: {
    responseId: response.responseId,
    results: [
      { type: 'product', uid: 'variant-1', parentId: 'product-1', sku: 'SKU-1' }
    ],
    banners: []
  }
});
```

#### Add to Cart

```typescript
beacon.events.category.addToCart({ 
  data: {
    responseId: response.responseId,
    results: [
      {
        uid: 'variant-1',
        parentId: 'product-1',
        sku: 'SKU-1',
        qty: 1,
        price: 49.99
      }
    ]
  }
});
```

#### Click Through

```typescript
beacon.events.category.clickThrough({ 
  data: {
    responseId: response.responseId,
    results: [
      {
        type: 'product',
        uid: 'variant-1',
        parentId: 'product-1',
        sku: 'SKU-1'
      }
    ]
  }
});
```

### Recommendations Events

Recommendations events track interactions with personalized product recommendations.

#### Render

Track when a recommendation set is rendered to the user.

```typescript
beacon.events.recommendations.render({ 
  data: {
    tag: 'homepage-recommendations',
    responseId: response.responseId
  }
});
```

#### Impression

Track impressions of recommended products.

```typescript
beacon.events.recommendations.impression({ 
  data: {
    tag: 'homepage-recommendations',
    responseId: response.responseId,
    results: [
      { type: 'product', uid: 'variant-1', parentId: 'product-1', sku: 'SKU-1' },
      { type: 'product', uid: 'variant-2', parentId: 'product-2', sku: 'SKU-2' }
    ],
    banners: []
  }
});
```

#### Add to Cart

Track when a user adds a recommended product to cart.

```typescript
beacon.events.recommendations.addToCart({ 
  data: {
    tag: 'homepage-recommendations',
    responseId: response.responseId,
    results: [
      {
        uid: 'variant-1',
        parentId: 'product-1',
        sku: 'SKU-1',
        qty: 1,
        price: 39.99
      }
    ]
  }
});
```

#### Click Through

Track clicks on recommended products.

```typescript
beacon.events.recommendations.clickThrough({ 
  data: {
    tag: 'homepage-recommendations',
    responseId: response.responseId,
    results: [
      {
        type: 'product',
        uid: 'variant-1',
        parentId: 'product-1',
        sku: 'SKU-1'
      }
    ]
  }
});
```

### Bundles Events

Bundles events track interactions with personalized product bundles.

#### Render

Track when a bundle set is rendered to the user.

```typescript
beacon.events.bundles.render({ 
  data: {
    tag: 'pdp-bundles',
    responseId: response.responseId
  }
});
```

#### Impression

Track impressions of bundled products.

```typescript
beacon.events.bundles.impression({ 
  data: {
    tag: 'pdp-bundles',
    responseId: response.responseId,
    results: [
      { type: 'product', uid: 'variant-1', parentId: 'product-1', sku: 'SKU-1' },
      { type: 'product', uid: 'variant-2', parentId: 'product-2', sku: 'SKU-2' }
    ],
    banners: []
  }
});
```

#### Add to Cart

Track when a user adds a bundled product to cart.

```typescript
beacon.events.bundles.addToCart({ 
  data: {
    tag: 'pdp-bundles',
    responseId: response.responseId,
    results: [
      {
        uid: 'variant-1',
        parentId: 'product-1',
        sku: 'SKU-1',
        qty: 1,
        price: 39.99
      }
    ]
  }
});
```

#### Click Through

Track clicks on bundled products.

```typescript
beacon.events.bundles.clickThrough({ 
  data: {
    tag: 'pdp-bundles',
    responseId: response.responseId,
    results: [
      {
        type: 'product',
        uid: 'variant-1',
        parentId: 'product-1',
        sku: 'SKU-1'
      }
    ]
  }
});
```

### Chat Events

Chat events track interactions with products surfaced in a chat session. Each chat event requires a `chatSessionId` to associate the event with a specific shopper conversation.

#### Impression

Track impressions of products surfaced in chat results.

```typescript
beacon.events.chat.impression({ 
  data: {
    chatSessionId: 'chat-session-12345',
    responseId: response.responseId,
    results: [
      { type: 'product', uid: 'variant-1', parentId: 'product-1', sku: 'SKU-1' },
      { type: 'product', uid: 'variant-2', parentId: 'product-2', sku: 'SKU-2' }
    ]
  }
});
```

#### Add to Cart

Track when a user adds a product to cart from chat results.

```typescript
beacon.events.chat.addToCart({ 
  data: {
    chatSessionId: 'chat-session-12345',
    responseId: response.responseId,
    results: [
      {
        uid: 'variant-1',
        parentId: 'product-1',
        sku: 'SKU-1',
        qty: 1,
        price: 29.99
      }
    ]
  }
});
```

#### Click Through

Track clicks on products surfaced in chat results.

```typescript
beacon.events.chat.clickThrough({ 
  data: {
    chatSessionId: 'chat-session-12345',
    responseId: response.responseId,
    results: [
      {
        type: 'product',
        uid: 'variant-1',
        parentId: 'product-1',
        sku: 'SKU-1'
      }
    ]
  }
});
```

#### Feedback

Track 'positive' or 'negative' shopper feedback on a chat session. 

```typescript
beacon.events.chat.feedback({ 
  data: {
    chatSessionId: 'chat-session-12345',
    feedback: 'positive' // or ChatFeedbackSchemaDataFeedbackEnum.Positive for TypeScript
  }
});
```

### Product Events

#### Page View

Track product page views. This automatically updates the viewed products history.

```typescript
beacon.events.product.pageView({ 
  data: {
    result: {
      uid: 'variant-123',
      parentId: 'product-123',
      sku: 'SKU-123'
    }
  }
});
```

### Cart Events

#### Add

Track when products are added to the cart.

```typescript
beacon.events.cart.add({ 
  data: {
    results: [
      { 
        uid: 'variant-1', 
        parentId: 'product-1',
        sku: 'SKU-1', 
        qty: 1, 
        price: 29.99 
      }
    ],
    cart: [
      { 
        uid: 'variant-1', 
        parentId: 'product-1',
        sku: 'SKU-1', 
        qty: 1, 
        price: 29.99 
      },
      { 
        uid: 'variant-2', 
        parentId: 'product-2',
        sku: 'SKU-2', 
        qty: 2, 
        price: 19.99 
      }
    ]
  }
});
```

The cart state is automatically managed and synchronized with storage.

#### Remove

Track when products are removed from the cart.

```typescript
beacon.events.cart.remove({ 
  data: {
    results: [
      { uid: 'variant-1', parentId: 'product-1', sku: 'SKU-1', qty: 1, price: 29.99 }
    ],
    cart: [
      { 
        uid: 'variant-2', 
        parentId: 'product-2',
        sku: 'SKU-2', 
        qty: 2, 
        price: 19.99 
      }
    ]
  }
});
```

### Order Events

#### Transaction

Track completed transactions/orders.

```typescript
beacon.events.order.transaction({ 
  data: {
    orderId: 'order-12345',
    transactionTotal: 119.97,
    total: 129.97,
    vat: 0.20,
    city: 'New York',
    state: 'NY',
    country: 'US',
    results: [
      { 
        uid: 'variant-1', 
        parentId: 'product-1',
        sku: 'SKU-1', 
        qty: 2, 
        price: 29.99 
      },
      { 
        uid: 'variant-2', 
        parentId: 'product-2',
        sku: 'SKU-2', 
        qty: 1, 
        price: 60.00 
      }
    ]
  }
});
```

This method automatically clears the stored cart after tracking the transaction.

### Error Tracking Events

#### Shopify Pixel Errors

Track errors from Shopify pixel implementations.

```typescript
beacon.events.error.shopifypixel({ 
  data: {
    message: 'Product not found',
    stack: 'Error: Product not found\n  at fetchProduct (app.js:45)',
    details: { 
      productId: 'abc-123',
      endpoint: '/api/products/abc-123'
    }
  }
});
```

#### SNAP Errors

Track errors from SNAP implementations.

```typescript
beacon.events.error.snap({ 
  data: {
    message: 'Failed to load recommendations',
    stack: 'Error: Network timeout\n  at loadRecs (snap.js:120)',
    details: { 
      tag: 'homepage-recs',
      timeout: 5000
    }
  }
});
```


## Storage Management

Beacon automatically manages local storage and cookies to maintain user state across sessions. The storage API is the same for both integration paths — `beacon` from your NPM instance or `window.athos.tracker` from CDN.

- **User IDs**: Persisted for 18 months
- **Session IDs**: Persisted for 30 minutes
- **Cart**: Current items in the user's cart
- **Viewed Products**: Recently viewed products (up to 20 items)
- **Attribution**: Campaign/attribution source tracking

### Cart Storage API

Access and manipulate the stored cart through the `storage.cart` API:

```typescript
// Get current cart
const cartItems = beacon.storage.cart.get();

// Set cart to specific items
beacon.storage.cart.set([
  { uid: 'variant-1-blue-m', parentId: 'product-1', sku: 'SKU-1', qty: 2, price: 29.99 }
]);

// Add items to cart
beacon.storage.cart.add([
  { uid: 'variant-2-red-l', parentId: 'product-2', sku: 'SKU-2', qty: 1, price: 19.99 }
]);

// Remove items from cart
beacon.storage.cart.remove([
  { uid: 'variant-1-blue-m', parentId: 'product-1', sku: 'SKU-1', qty: 1, price: 29.99 }
]);

// Clear cart
beacon.storage.cart.clear();
```

### Viewed Products Storage API

Access and manipulate the viewed products history:

```typescript
// Get viewed products
const viewedItems = beacon.storage.viewed.get();

// Set viewed products
beacon.storage.viewed.set([
  { uid: 'variant-1-blue-m', parentId: 'product-1', sku: 'SKU-1' }
]);

// Add to viewed products
beacon.storage.viewed.add([
  { uid: 'variant-2-red-l', parentId: 'product-2', sku: 'SKU-2' }
]);
```

## Public API Methods

The methods below are available on both integration paths. In these examples, `beacon` can be either your NPM instance or `window.athos.tracker` when using CDN.

### `setCurrency(currency: Currency)`

Set or change the currency for tracking transactions.

```typescript
beacon.setCurrency({ code: 'EUR' });
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `currency.code` | `string` | ISO 4217 currency code |

### `getContext(): Context`

Get the current tracking context including user, session, and page information.

```typescript
const context = beacon.getContext();
// Returns: {
//   userId: 'uuid-...',
//   sessionId: 'uuid-...',
//   pageLoadId: 'uuid-...',
//   pageUrl: 'https://...',
//   userAgent: '...',
//   timestamp: '2024-01-01T...',
//   ...
// }
```

### `updateContext(key: keyof Context, value: any)`

Update specific context properties.

```typescript
beacon.updateContext('userId', 'custom-user-id');
beacon.updateContext('dev', 'development');
beacon.updateContext('pageUrl', 'https://example.com/new-page');
```

### User ID Management

#### `getUserId(): string`

Get or generate the current user ID.

```typescript
const userId = beacon.getUserId();
```

#### `getSessionId(): string`

Get or generate the current session ID (expires after 30 minutes of inactivity).

```typescript
const sessionId = beacon.getSessionId();
```

#### `getShopperId(): string`

Get the current shopper ID if set.

```typescript
const shopperId = beacon.getShopperId();
```

#### `setShopperId(shopperId: string): string | void`

Sets the shopper ID, triggers a login event to the beacon, and sends a preflight request for personalization.

```typescript
const result = beacon.setShopperId('shopper-12345');
```

### `getPageLoadId(): string`

Get the current page load ID. Generate a new one with `pageLoad()`.

```typescript
const pageLoadId = beacon.getPageLoadId();
```

### `pageLoad(): string`

Generate a new page load ID. Call this method when tracking page transitions or navigation within a single-page application.

```typescript
const newPageLoadId = beacon.pageLoad();
```

### `getTimestamp(): string`

Get the current timestamp in ISO 8601 format.

```typescript
const timestamp = beacon.getTimestamp();
```

### `sendPreflight(overrides?: PreflightRequestModel): void`

Send preflight data to the personalization API. This is automatically called when cart or shopper state changes, but can be manually triggered if needed.

```typescript
beacon.sendPreflight();

// With overrides
beacon.sendPreflight({
  userId: 'custom-user-id',
  siteId: 'custom-site-id',
  shopper: 'shopper-123',
  cart: [/* products */],
  lastViewed: [/* products */]
});
```

### `generateId(): string`

Generates and returns a new UUID.

```typescript
const id = beacon.generateId();
```

## Advanced Usage

### Custom API Endpoints

Override default API endpoints for internal proxying or custom infrastructure:

```typescript
const beacon = new Beacon(
  { siteId: 'abc123' },
  {
    requesters: {
      beacon: {
        origin: 'https://internal-api.example.com/beacon/v2',
        headers: { 'X-Internal-Key': 'secret' }
      },
      personalization: {
        origin: 'https://internal-api.example.com/personalization',
        headers: { 'X-Internal-Key': 'secret' }
      }
    }
  }
);
```

### Single Page Application (SPA) Support

For single-page applications, generate a new page load ID when the page/view changes:

```typescript
// On navigation
beacon.pageLoad();

// Track that we're now viewing a new product
beacon.events.product.pageView({ 
  data: { 
    result: { uid: 'variant-123', sku: 'SKU-123', parentId: 'product-123' }
  }
});
```

### Context Updates

Update tracking context dynamically as user behavior or application state changes:

```typescript
// Update page URL for client-side routing
beacon.updateContext('pageUrl', window.location.href);
```

### Attribution Tracking

Attribution data is automatically captured from the `athos_attribution` URL parameter and included in every tracking event's context. No manual configuration is required.

```
https://example.com/products?athos_attribution=email:campaign-123
```

The value format is `channel:campaign-id`. Use `beacon.getContext()` to inspect the current attribution state.

## Development Mode

Enabling development mode prevents beacon events from appearing in reports in the Athos console.

```typescript
const beacon = new Beacon(
  { siteId: 'abc123' },
  { mode: 'development' }
);
```

## License

MIT - See LICENSE file for details


