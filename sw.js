self.addEventListener('install', event => {
    console.log('Service Worker Installed');
});

self.addEventListener('activate', event => {
    console.log('Service Worker Activated');
});

self.addEventListener('fetch', event => {
    // Fetch handler can be left empty or customized
});

// Handle notification actions
self.addEventListener('notificationclick', event => {
    event.notification.close();
    // Handle clicks, e.g., focus on a specific tab or app
});
