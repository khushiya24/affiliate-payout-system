Models
User

Responsibilities

Maintain withdrawable balance
Store last withdrawal timestamp
Sale

Responsibilities

Store affiliate sale
Track reconciliation status
Prevent duplicate advance payouts
Payout

Responsibilities

Store every payout transaction
Track payout status
Withdrawal

Responsibilities

Store withdrawal history
Services
AdvancePayoutService

Functions

Process pending sales
Calculate 10% advance
Prevent duplicate payouts
ReconciliationService

Functions

Approve sale
Reject sale
Calculate final payout
Create adjustment
WithdrawalService

Functions

Validate balance
Enforce 24-hour restriction
FailedPayoutRecoveryService

Functions

Recover failed payouts
Restore withdrawable balance