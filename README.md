# Affiliate Payout Management System

A Node.js and Express.js based backend system that manages affiliate sales, advance payouts, final payouts, reconciliation, withdrawals, and payout recovery.

---

## Features

- Create and manage affiliate users
- Record affiliate sales
- Process 10% advance payout for pending sales
- Reconcile sales (Approved / Rejected)
- Generate final payouts after approval
- Handle rejected sales with payout adjustments
- Maintain withdrawable balance for each user
- Restrict withdrawals to once every 24 hours
- Recover failed or cancelled payouts
- RESTful API design
- SQLite database using Sequelize ORM

---

## Tech Stack

- Node.js
- Express.js
- Sequelize ORM
- SQLite
- JavaScript

---

## Project Structure

```
affiliate-payout-system/
│
├── config/
│   └── database.js
│
├── controllers/
│   ├── payoutController.js
│   ├── saleController.js
│   ├── userController.js
│   └── withdrawalController.js
│
├── database/
│   └── database.sqlite
│
├── docs/
│   ├── API.md
│   ├── LLD.md
│   ├── DatabaseSchema.md
│   ├── ClassDesign.md
│   ├── EdgeCases.md
│   └── DesignDecisions.md
│
├── models/
│   ├── index.js
│   ├── User.js
│   ├── Sale.js
│   ├── Payout.js
│   └── Withdrawal.js
│
├── routes/
│   ├── payoutRoutes.js
│   ├── saleRoutes.js
│   ├── userRoutes.js
│   └── withdrawalRoutes.js
│
├── services/
│   ├── AdvancePayoutService.js
│   ├── ReconciliationService.js
│   ├── WithdrawalService.js
│   └── FailedPayoutRecoveryService.js
│
├── server.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/khushiya24/affiliate-payout-system.git
```

Move into the project

```bash
cd affiliate-payout-system
```

Install dependencies

```bash
npm install
```

Run the server

```bash
npm run dev
```

Server starts at

```
http://localhost:3000
```

---

## Database

Database used:

- SQLite

ORM:

- Sequelize

The database file is automatically created inside:

```
database/database.sqlite
```

---

## API Endpoints

### User APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/users | Create User |
| GET | /api/users | Get All Users |

---

### Sales APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/sales | Create Sale |
| GET | /api/sales | Get All Sales |
| DELETE | /api/sales/:id | Delete Sale |
| PATCH | /api/sales/:id/reconcile | Approve or Reject Sale |

---

### Payout APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/advance/run | Run Advance Payout |
| GET | /api/payouts | Get All Payouts |
| PATCH | /api/payouts/:id/recover | Recover Failed Payout |

---

### Withdrawal APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/withdraw | Withdraw Balance |

---

## Business Rules

### Advance Payout

- Pending sales receive a 10% advance payout.
- Advance payout is processed only once.

### Reconciliation

Approved Sale

- Remaining payout is credited to the user.

Rejected Sale

- Previously paid advance is adjusted.

### Withdrawals

- Users can withdraw only once every 24 hours.
- Withdrawal amount cannot exceed the available balance.

### Failed Payout Recovery

- Failed or cancelled payouts are restored to the user's withdrawable balance.

---

## Sample Workflow

1. Create a User.
2. Create Affiliate Sales.
3. Run Advance Payout Service.
4. Approve or Reject Sales.
5. Generate Final Payout.
6. Withdraw Available Balance.
7. Recover Failed Payouts if required.


GitHub: https://github.com/khushiya24

---
