User
Column	Type
id	Integer
username	String
withdrawableBalance	Float
lastWithdrawalAt	DateTime


Sale
Column	Type
id	Integer
userId	Integer (FK)
brand	String
earning	Float
status	Pending / Approved / Rejected
advancePaid	Boolean
advanceAmount	Float
reconciled	Boolean

Payout
Column	Type
id	Integer
userId	Integer (FK)
saleId	Integer (FK)
amount	Float
type	ADVANCE / FINAL / ADJUSTMENT
status	SUCCESS / FAILED / PENDING / CANCELLED


Withdrawal
Column	Type
id	Integer
userId	Integer (FK)
amount	Float
status	SUCCESS / FAILED

Relationships
User
 │
 ├────< Sales
 │
 ├────< Payouts
 │
 └────< Withdrawals