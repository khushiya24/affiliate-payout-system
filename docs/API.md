Method	Full Endpoint	Description
GET	http://localhost:3000/	Health Check API
POST	http://localhost:3000/api/users	Create a new user
GET	http://localhost:3000/api/users	Get all users
POST	http://localhost:3000/api/sales	Create a new affiliate sale
GET	http://localhost:3000/api/sales	Get all sales
DELETE	http://localhost:3000/api/sales/:id	Delete a sale by ID
POST	http://localhost:3000/api/advance/run	Process advance payouts (10% of eligible pending sales)
PATCH	http://localhost:3000/api/sales/:id/reconcile	Reconcile a sale as approved or rejected
POST	http://localhost:3000/api/withdraw	Withdraw available balance (once every 24 hours)
GET	http://localhost:3000/api/payouts	Get all payout records
PATCH	http://localhost:3000/api/payouts/:id/recover	Recover a failed/cancelled/rejected payout