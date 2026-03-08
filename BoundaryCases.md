Objective

To verify system behavior at minimum, maximum, and edge values for user registration inputs.

---

/*Name Length Validation*/

| Test Case ID | Input         | Description            | Expected Result                                      |
| ------------ | ------------- | ---------------------- | ---------------------------------------------------- |
| BC01         | 4 characters  | Below minimum length   | Registration should fail because minimum length is 5 |
| BC02         | 5 characters  | Minimum allowed length | Registration should pass                             |
| BC03         | 24 characters | Maximum allowed length | Registration should pass                             |
| BC04         | 25 characters | Above maximum limit    | Registration should fail                             |

---

/*Password Length Validation*/

| Test Case ID | Input         | Description                     | Expected Result          |
| ------------ | ------------- | ------------------------------- | ------------------------ |
| BC05         | 11 characters | Below minimum password length   | Registration should fail |
| BC06         | 12 characters | Minimum allowed password length | Registration should pass |

---

/*Email Edge Cases*/

| Test Case ID | Input                                     | Description                        | Expected Result                          |
| ------------ | ----------------------------------------- | ---------------------------------- | ---------------------------------------- |
| BC07         | [TEST@MAIL.COM](mailto:TEST@MAIL.COM)     | Email in uppercase                 | System converts to lowercase and accepts |
| BC08         | user@mail                                 | Invalid email format               | System shows validation error            |
| BC09         | " [user@mail.com](mailto:user@mail.com) " | Email with leading/trailing spaces | Spaces are trimmed and email accepted    |

---

/*Rate Limit Testing*/

| Test Case ID | Input                        | Description          | Expected Result                          |
| ------------ | ---------------------------- | -------------------- | ---------------------------------------- |
| BC10         | 10 attempts within one hour  | Within allowed limit | All requests allowed                     |
| BC11         | 11th attempt within one hour | Exceeds rate limit   | System returns 429 Too Many Requests |
