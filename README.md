# VulnMart Pentesting Guide

Welcome to VulnMart, a purposely vulnerable eCommerce playground for web application security testing and learning. This guide will walk you through a typical pentesting workflow, providing tips and suggested steps for discovering vulnerabilities and hidden flags.

---

## Table of Contents
1. Introduction
2. Reconnaissance & Application Walkthrough
3. User Registration & Authentication Testing
4. Browsing & Product Discovery
5. Client-Side Attacks
6. Server-Side Attacks
7. Business Logic & Access Control
8. Advanced Exploitation
9. Reporting & Flag Submission

---

## 1. Introduction
- Read the project background and rules (if provided).
- Understand the scope: VulnMart is intentionally insecure and designed for safe, legal testing only.

## 2. Reconnaissance & Application Walkthrough
- Explore the site as a normal user: Home, Product, Cart, Login, Create Account, Profile, etc.
- Map out all visible and hidden pages (try common admin/order/checkout/flag/hidden URLs).
- Use tools like ffuf, gobuster, or Burp Suite for directory and file discovery.

**Possible Flags:**
- FLAG{hidden-in-dom}
- FLAG{comment-flag}
- FLAG{localstorage-flag}
- FLAG{js-var-exposed}
- FLAG{robots-flag}
- FLAG{header-flag}
- FLAG{dir-listing-flag}
- FLAG{backup-file-flag}
- FLAG{error-message-flag}
- FLAG{http-method-flag}
- FLAG{vhost-flag}

## 3. User Registration & Authentication Testing
- Register a new user and log in.
- Test for weak authentication, JWT handling, and session management flaws.
- Try bypassing login, manipulating cookies, or reusing tokens.

**Possible Flags:**
- FLAG{admin-panel-flag} (if you discover/admin access via weak auth)

## 4. Browsing & Product Discovery
- Browse products, add to cart, and view product details.
- Look for hidden content in product descriptions, images, and metadata.
- Check for flags in the DOM, comments, localStorage, and JS variables.

**Possible Flags:**
- FLAG{product-description-flag}
- FLAG{image-stego-flag}

## 5. Client-Side Attacks
- Attempt to manipulate cart totals or product prices via DevTools.
- Test for XSS in product reviews/comments (try injecting scripts).
- Look for exposed sensitive data in Redux state or client storage.

**Possible Flags:**
- FLAG{redux-state-flag}
- FLAG{cart-manipulation-flag}
- FLAG{xss-review-flag}
- FLAG{xss-success}

## 6. Server-Side Attacks
- Test API endpoints for IDOR (accessing other users' orders, profiles, etc).
- Attempt CSRF attacks on checkout or other sensitive actions.
- Try to access the admin panel or hidden routes without proper authorization.

**Possible Flags:**
- FLAG{idor-order-flag}
- FLAG{csrf-checkout-flag}
- FLAG{admin-panel-flag}

## 7. Business Logic & Access Control
- Check for logic flaws in checkout, order history, and admin features.
- Attempt privilege escalation or horizontal/vertical access control bypasses.

**Possible Flags:**
- FLAG{admin-panel-flag}
- FLAG{idor-order-flag}

## 8. Advanced Exploitation
- Analyze source maps, minified files, and image metadata for hidden flags.
- Chain vulnerabilities for deeper access or more flags.

**Possible Flags:**
- FLAG{source-map-flag}
- FLAG{image-stego-flag}

## 9. Reporting & Flag Submission
- Document each flag found, the vulnerability exploited, and the steps taken.
- Submit your findings as instructed (if part of a CTF or training event).

---

**Happy hacking! Remember: All vulnerabilities are intentional and for educational use only.**
