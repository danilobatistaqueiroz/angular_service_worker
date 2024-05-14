# Workers

Some environments or platforms, such as @angular/platform-server used in Server-side Rendering, don't support web workers.

SSR don't support Web Workers  





#### PWA

PWA has implicit support for incremental version upgrades - if for example, we change only the CSS, then only the new CSS needs to be reinstalled, instead of having to install the whole application again!  

#### Service Worker

SwUpdate for managing application version updates

SwPush for doing server Web Push notifications

>>> If you are not using HTTPS, the service worker will only be registered when accessing the application on localhost.


#### Cache

Resources, especially those loaded from CDNs, have content that is unknown at build time or are updated more frequently than the application is deployed.  
If the Angular service worker does not have a hash to verify a resource is valid, it still caches its contents.  
At the same time, it honors the HTTP caching headers by using a policy of stale while revalidate.  
The Angular service worker continues to serve a resource even after its HTTP caching headers indicate that it is no longer valid.  
At the same time, it attempts to refresh the expired resource in the background.  
This way, broken unhashed resources do not remain in the cache beyond their configured lifetimes.  

#### Home Screen button
When will the Install to Home Screen button be shown to the user?  
There are a couple of conditions for this to work, one of them being that the application needs to run over HTTPS and have a Service Worker.

#### Bypassing the service worker

To bypass the service worker, set ngsw-bypass as a request header, or as a query parameter. The value of the header or query parameter is ignored and can be empty or omitted.





#### Steps for Service Worker

Creating the project:  
`ng new workers --routing --standalone --strict --style scss`  

Adding a service worker:  
`ng add @angular/pwa`  

Adding tailwind:  
`pnpm install -D tailwindcss postcss autoprefixer`  
`npx tailwindcss init`  


#### How it works

Running your application you will receive a popup asking to install your application.  

You can activate a timer to check if there is a new app version published on the server.  

If a new version of your angular application was published in your server, a red button will be shown to update your app.  

Open the inspector, go to Application tab, in Service Workers you can see your application, in cache storage are all files cached.  

Go to Network tab, change throlling to offline and refresh the browser.  

The advantage of Service Workers is that the startup is fast, your site is cached, and can be installed, receive push notifications