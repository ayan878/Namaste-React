## Namaste React Course by Akshay Saini

# _Episode 01 - Inception_

## Q: What is `Emmet`?
A: Emmet is tool that helps web developers write HTML and CSS code more quickly ad effieciently. it allows to use shorthand abbreviations, called "emmet abbreviations" or "emmmet shortcuts," to generate HTML and CSS code snippets with just a few keystokes. This can save a lot of time and reduce the amount of manual typing required when creating web pages.Esssentially, Emmet helps streamline the coding process by providing shortcuts for common HTML and CSS patterns

## Q: What is `CDN`? Why do we `use` it?
A: A Content Delivery Network (CDN) is a network of servers distributed geographically to deliver web content more efficiently to users. CDNs host copies of website assets, such as JavaScript libraries, CSS files, images, and videos, and serve them to users from the server that is closest to their location.

We use CDNs for several reasons:

Faster Content Delivery: CDNs reduce the physical distance between the server and the user, which decreases latency and improves the loading speed of web pages.

Scalability: CDNs can handle large amounts of traffic and distribute it across multiple servers, ensuring that websites remain responsive even during periods of high demand.

Reliability: CDNs offer redundancy and failover mechanisms, ensuring that content remains available even if one server fails.

Global Reach: CDNs have servers located in multiple regions around the world, allowing websites to reach a global audience more effectively.

Offloading Origin Servers: By caching content on CDN servers, the load on the origin server is reduced, resulting in improved performance and scalability.

## Q: Why is `React known as React`?
A: React, the javascripts library for building user interface , is named "React" because of its core concepts is "reactive" updates to the user interface. when the underlying data is changes.React effiencintly updates only the parts of the user interface that need to change, rather than re-rendering is what distinguished the entire page.
        Additioanally, the name "react" signifies  the idea of components reacting to change in state or props where the chansges triggered updates to the UI.So while the term "React" itself doesn't explicitly mention data changes , it embodies the concepts of reactive programming in the context of user interfaces.
"Reactive" generally refers to a programming paradigm that focuses on asynchronous data streams and the propagation of changes. In the context of web development, reactive programming often involves reacting to changes in data or user input and automatically updating the user interface accordingly. 

## Q: What is `crossorigin in script tag`?
A: The `crossorigin` attribute in a `<script>` tag is used to specify how the browser should handle requests made to fetch the script file from a different origin (i.e., a different domain, protocol, or port). 

When you include a script file from a different origin using a `<script>` tag, the browser typically enforces a "same-origin policy" for security reasons. This policy restricts scripts from accessing resources (like data or cookies) from a different origin. However, you can relax this restriction by specifying the `crossorigin` attribute.

The `crossorigin` attribute can have one of the following values:

1. anonymous: This value indicates that the script is fetched without sending any credentials (such as cookies or HTTP authentication) along with the request. This is useful for loading resources that are intended to be publicly accessible.

2. use-credentials: This value indicates that the script should be fetched with credentials (such as cookies or HTTP authentication) included in the request. This is useful when you need to access protected resources on a different origin.

Here's how you can use the `crossorigin` attribute in a `<script>` tag:

```html
<script src="https://example.com/script.js" crossorigin="anonymous"></script>
```

or

```html
<script src="https://example.com/script.js" crossorigin="use-credentials"></script>
```

It's important to note that the server hosting the script file must also be configured to allow cross-origin requests by including the appropriate CORS (Cross-Origin Resource Sharing) headers in the response. Otherwise, the browser may block the request.