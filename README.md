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

![3.png](attachment:ec15939b-5432-42fa-bc78-2b4af4d0f783:3.png)

![4.png](attachment:3bff5547-5bc9-4c38-9dfb-10803f8b4c12:4.png)

![6.png](attachment:51f24a08-271e-4ab6-b0cd-2f6624b94947:6.png)

---

## **2️⃣ Folder Structure**

![7.png](attachment:6b1860f5-26fa-4fb9-bb6a-4bf2f8db1687:7.png)

**Objective:** Organize files for clarity.

**Steps:**

- `src/` → main backend code (`server.ts`)
- `src/controllers/` → business logic
- `src/models/` → MongoDB schemas
- `src/routes/` → API endpoints
- `src/validators/` → input validation
- `src/tests/` → Jest tests (optional)

![16.png](attachment:684ae190-83c7-4aa8-be06-31de895f47d5:16.png)

![17.png](attachment:f481f581-ae90-4963-bf0d-87fbd4330d73:17.png)

---

## **3️⃣ MongoDB Connection**

**Objective:** Connect backend to MongoDB Atlas.

**Steps:**

- Create MongoDB cluster.
- Add database user and whitelist IP.
- Copy connection string to `.env`.
- Verify MongoDB connection in terminal.

---

## **4️⃣ Models**

**Objective:** Define Client, Policy, and Claim schemas.

**Steps:**

- Create models with unique IDs and required fields.
- Include enums for policy type and status.

![17.png](attachment:bc9dd97a-3f7c-43e3-ac81-1758c0108c29:17.png)

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

![17.png](attachment:42a5bf06-a0cf-423b-9268-ef2bda1762b9:17.png)

---

## **6️⃣ Routes**

**Objective:** Map endpoints to controllers.

**Steps:**

- `/api/clients` → client operations
- `/api/policies` → policy operations
- `/api/claims` → claim operations

![18.png](attachment:c7fa1a10-aa9b-4212-b117-d268a6bcbd9e:18.png)

---

## **7️⃣ Server Initialization**

**Objective:** Run Express server and test endpoints.

**Steps:**

- Start server with middleware.
- Verify root endpoint `/`.
- Confirm “Server running” and “MongoDB connected” messages.

![19.png](attachment:3c5370be-3251-48f5-ba1d-f5aeedb03acd:19.png)

---

## **8️⃣ Postman Testing**

**Objective:** Test API functionality.

**Endpoints to test in order:**

1. Create Client → `POST /api/clients`

![9.png](attachment:2970ff00-956b-4530-a5d4-406fcdcc7e76:9.png)

1. Create Policy → `POST /api/policies`

![10.png](attachment:af2f9e97-672a-4e89-93b8-4dfb0584dc58:10.png)

1. Submit Claim → `POST /api/claims`

![11.png](attachment:30ea9894-a6fe-40fe-9d0d-fec36836e1b2:11.png)

1. Process Claim → `POST /api/claims/process`

![12.png](attachment:3a66ff33-1e4f-4181-af61-d35ef902a93f:12.png)

1. Retrieve Client Claims → `GET /api/claims/client/:clientId`

![13.png](attachment:9a65a59b-e163-4f95-bc15-8d6a22b73ae9:13.png)

1. Total Premium by Client → `GET /api/policies/premium/:clientId`

![14.png](attachment:89b8a046-2adb-4bff-b020-483d2fade5f1:14.png)

1. Total Claims by Policy Type → `GET /api/claims/claims-by-policy-type`

![15.png](attachment:23e01e9f-fe7e-4a39-b1b3-43c38a22b570:15.png)

---

## **9️⃣ Git Ignore**

**Objective:** Keep sensitive files out of Git.

**Steps:**

- Add to `.gitignore`:
    - `node_modules/`
    - `.env`
    - `dist/`

![gitignore.png](attachment:b8b8ee02-681f-4187-b40f-1b96470933ee:gitignore.png)

---

## **🔟 Unit Testing**

**Objective:** Verify backend using Jest.

**Steps:**

- Create test files for Client, Policy, Claim.
- Run `npm test`.
- Verify passing tests.

![18.png](attachment:ce106165-ac47-44a5-a5cf-cc8ae378f7f7:18.png)

---

---
