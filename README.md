# Workers

Some environments or platforms, such as @angular/platform-server used in Server-side Rendering, don't support web workers.

SSR don't support Web Workers  





#### PWA

PWA has implicit support for incremental version upgrades - if for example, we change only the CSS, then only the new CSS needs to be reinstalled, instead of having to install the whole application again!  

#### Service Worker

SwUpdate for managing application version updates

SwPush for doing server Web Push notifications

>>> If you are not using HTTPS, the service worker will only be registered when accessing the application on localhost.

#### Home Screen button
When will the Install to Home Screen button be shown to the user?  
There are a couple of conditions for this to work, one of them being that the application needs to run over HTTPS and have a Service Worker.



#### Steps for Service Worker

Creating the project:  
ng new workers --routing --standalone --strict --style scss

Adding a service worker:  
ng add @angular/pwa

Adding tailwind:  
`pnpm install -D tailwindcss postcss autoprefixer`  
`npx tailwindcss init`  

