# Insurance Claims API

Backend system for managing insurance policies, clients, and claims using Node.js, TypeScript, and MongoDB.

## Features

- Create and manage clients
- Create and manage policies
- Submit and process claims
- Aggregations:
  - Total claims by policy type
  - Total client premiums
- Input validation with Joi
- Business logic for claim processing
- MongoDB aggregations for reports

## Tech Stack

- Node.js + TypeScript
- Express.js
- MongoDB (Atlas or local)
- Joi for validation
- Jest for unit testing
- Notion for documentation - https://resisted-cod-e57.notion.site/Insurance-Claims-API-Backend-Setup-Testing-324f8865bed08002a2faf12958521d22

  
## Project Structure

---

## **1️⃣ Project Setup**

**Objective:** Initialize Node.js with TypeScript and MongoDB.

**Steps:**

- Create a project folder and open in VS Code.
- Initialize Node.js and TypeScript.
- Install dependencies for backend development.

![2.png](/images/2.png)

![3.png](/images/3.png)

![4.png](/images/4.png)

![6.png](/images/6.png)

---

## **2️⃣ Folder Structure**

![7.png](/images/7.png)

**Objective:** Organize files for clarity.

**Steps:**

- `src/` → main backend code (`server.ts`)
- `src/controllers/` → business logic
- `src/models/` → MongoDB schemas
- `src/routes/` → API endpoints
- `src/validators/` → input validation
- `src/tests/` → Jest tests (optional)

![16.png](/images/16.png)

![17.png](/images/17.png)

---

## **3️⃣ MongoDB Connection**

**Objective:** Connect backend to MongoDB Atlas.

**Steps:**

- Create MongoDB cluster.
- Add database user and whitelist IP.
- Copy connection string to `.env`.
- Verify MongoDB connection in terminal.

![17.png](/images/db.png)

![17.png](/images/host.png)
---

## **4️⃣ Models**

**Objective:** Define Client, Policy, and Claim schemas.

**Steps:**

- Create models with unique IDs and required fields.
- Include enums for policy type and status.

![17.png](/images/17.png)

---

## **5️⃣ Controllers**

**Objective:** Implement business logic.

**Steps:**

- Create functions for:
    - Adding clients
    - Adding policies
    - Submitting claims
    - Processing claims
    - Retrieving client claims
- Add validation and error handling.

![17.png](/images/17.png)

---

## **6️⃣ Routes**

**Objective:** Map endpoints to controllers.

**Steps:**

- `/api/clients` → client operations
- `/api/policies` → policy operations
- `/api/claims` → claim operations

![18.png](/images/18.png)

---

## **7️⃣ Server Initialization**

**Objective:** Run Express server and test endpoints.

**Steps:**

- Start server with middleware.
- Verify root endpoint `/`.
- Confirm “Server running” and “MongoDB connected” messages.

![19.png](/images/19.png)

---

## **8️⃣ Postman Testing**

**Objective:** Test API functionality.

**Endpoints to test in order:**

1. Create Client → `POST /api/clients`

![9.png](/images/9.png)

1. Create Policy → `POST /api/policies`

![10.png](/images/10.png)

1. Submit Claim → `POST /api/claims`

![11.png](/images/11.png)

1. Process Claim → `POST /api/claims/process`

![12.png](/images/12.png)

1. Retrieve Client Claims → `GET /api/claims/client/:clientId`

![13.png](/images/13.png)

1. Total Premium by Client → `GET /api/policies/premium/:clientId`

![14.png](/images/14.png)

1. Total Claims by Policy Type → `GET /api/claims/claims-by-policy-type`

![15.png](/images/15.png)

---

## **9️⃣ Git Ignore**

**Objective:** Keep sensitive files out of Git.

**Steps:**

- Add to `.gitignore`:
    - `node_modules/`
    - `.env`
    - `dist/`

![gitignore.png](/images/gitignore.png)

---

## **🔟 Unit Testing**

**Objective:** Verify backend using Jest.

**Steps:**

- Create test files for Client, Policy, Claim.
- Run `npm test`.
- Verify passing tests.

![18.png](/images/18.png)

---

---
