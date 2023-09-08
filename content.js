// content.js

if (window.location.href.startsWith("https://www.youtube.com/watch?v=")) {
    const newURL = window.location.href.replace("/watch?v=", "/embed/");
    window.location.href = newURL;
}