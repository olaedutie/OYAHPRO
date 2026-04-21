# OYAH Pro Security Specification

## Data Invariants
- Each business owner owns their own `customers`, `payments`, and `settings`.
- In a single-user demo setup, we assume the user owns all collections.
- Customers can only read and write their own messages if their UID matches the customerId (or if using public access for demo).
- Admin/Business Owner has full access to all records.

## Dirty Dozen Payloads (Rejection Tests)
1. **Identity Spoofing**: Attempt to create a payment for another customer.
2. **State Shortcutting**: Attempt to update a payment status from 'Pending' to 'Paid' without Paystack verification.
3. **Resource Poisoning**: Use 1MB string as customerId.
4. **Unauthenticated Read**: Attempt to list all customers without being signed in.
5. **Malicious Settings**: Attempt to update AI tone to include offensive instructions.
6. **Orphaned Message**: Create a message for a customer that does not exist.
7. **Negative Payment**: Create a payment with amount < 0.
8. **Shadow Field update**: Update a customer and include a `premium: true` field.
9. **Role Escalation**: Attempt to set `isAdmin: true` on a user object.
10. **Timestamp Deception**: Provide a fake `createdAt` timestamp from the future.
11. **ID Injection**: Use `/` in a document ID.
12. **PII Blanket Read**: Attempt to read all users' full profiles.

## Primitive Definition logic
- `isValidId(id)`: Checks string size and regex.
- `isSignedIn()`: Basic auth check.
- `isOwner(userId)`: Checks if `request.auth.uid == userId`.
