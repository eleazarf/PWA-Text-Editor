// Import necessary Workbox modules for service worker strategies and caching
const {
  offlineFallback,
  warmStrategyCache,
} = require("workbox-recipes");
const { CacheFirst, StaleWhileRevalidate } = require("workbox-strategies");
const { registerRoute } = require("workbox-routing");
const { CacheableResponsePlugin } = require("workbox-cacheable-response");
const { ExpirationPlugin } = require("workbox-expiration");
const { precacheAndRoute } = require("workbox-precaching/precacheAndRoute");

// Precache resources specified in the '__WB_MANIFEST' array
precacheAndRoute(self.__WB_MANIFEST);

// Define a cache strategy for pages
const pageCache = new CacheFirst({
  cacheName: "page-cache",
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60, // Cache pages for 30 days
    }),
  ],
});

// Warm the cache for specific URLs using the 'pageCache' strategy
warmStrategyCache({
  urls: ["/index.html", "/"],
  strategy: pageCache,
});

// Register a route for page navigation requests using the 'pageCache' strategy
registerRoute(({ request }) => request.mode === "navigate", pageCache);

// Implement asset caching strategy
registerRoute(
  ({ request }) =>
    ["style", "script", "worker"].includes(request.destination), // Filter asset requests
  new StaleWhileRevalidate({
    cacheName: "asset-cache", // Define the name of the asset cache
    plugins: [
      // Cache responses with these statuses up to a maximum of 30 days
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);
