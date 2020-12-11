
HTTPS works over TLS protocol.
3 components of TLS:
> Encryption
> Authentication
> Integrity




## Phishing
Phishing is the fraudulent attempt to obtain sensitive information such as usernames, passwords and credit card details by disguising oneself as a trustworthy entity in an electronic communication


Popular Security Vulnerability 

> SQL Injection
> Encoding Vulnurability
> XSS 
> CSRF


> Cookie Security



Restrict the use of your cookies to secure web pages only. This means the cookie will not be sent if the page is not using SSL/HTTPS. To specify a cookie as “Secure,” or only sent over HTTPS, you can use the following syntax:

document.cookie = "tagname = test;secure";

For reference, the following attributes can be used when setting a cookie:

Secure – The Cookie will be sent in secure channel–HTTPS
HttpOnly– Don’t allow local scripts read cookies.
Domain– Double-check the domain settings.
Path – Double-check the path settings.
Expires – Determine the user agent how to parse or how to choose the expiry-time.



