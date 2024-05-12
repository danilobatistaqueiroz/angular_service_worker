# Workers

Some environments or platforms, such as @angular/platform-server used in Server-side Rendering, don't support web workers.

SSR don't support Web Workers  





#### PWA

PWA has implicit support for incremental version upgrades - if for example, we change only the CSS, then only the new CSS needs to be reinstalled, instead of having to install the whole application again!  



#### Steps for Service Worker

Creating the project:  
ng new workers --routing --standalone --strict --style scss

Adding a service worker:  
ng add @angular/pwa

