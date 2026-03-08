/*Objective*/

This document lists the assumptions made while creating the test cases and test data for the authentication system.

/*Assumptions*/

1. The application runs in a **localhost environment** during testing.

2. After successful login, the system generates a **JWT (JSON Web Token)** and stores it in the **browser's local storage** for authentication.

3. The **JWT token expiration time** is assumed to be **1 hour**, after which the user must log in again.

4. The **backend validates all inputs**, even if the frontend already performs validation checks.

5. **Rate limiting is applied per IP address**, allowing a maximum of **10 registration attempts per hour**.
