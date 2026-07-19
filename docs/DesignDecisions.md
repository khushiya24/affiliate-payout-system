SQLite: Chosen for simplicity and easy local setup for an assignment.
Service Layer: Business logic is kept in services rather than controllers to improve maintainability and testability.
Transaction History: Every payout is recorded in the Payout table to provide an audit trail.
Idempotency: The advancePaid flag ensures the advance payout job can run multiple times without duplicating payments.
Reconciliation Logic: Approved sales pay the remaining amount after subtracting the advance. Rejected sales create a negative adjustment equal to the advance already paid.
Recovery Strategy: Failed or cancelled payouts are not deleted; instead, their status is updated and the amount is credited back to the user's withdrawable balance, preserving history.