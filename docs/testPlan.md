# Test Plan for Death Ants Validator

## Objective
To validate the functionality and reliability of the Death Ants Validator by testing it against various input scenarios, including both positive and negative cases.

## Test Scenarios

### Positive Scenarios
1. **Intact Ants Only**: Input string with intact ants only (e.g., "...ant...ant...ant...").
2. **Scattered Parts Only**: Input string with scattered ant parts only (e.g., "...a...n...t...a...n...t...").
3. **Mixed Scenario**: Input string with both intact ants and scattered parts (e.g., "...ant...a.n.t...ant...").

### Negative Scenarios
1. **Invalid Characters**: Input string contains characters other than 'a', 'n', 't', '.', or 'ant' (e.g., "...ant...x...ant...").
2. **Empty String**: Input string is empty ("").
3. **Non-string Input**: Attempting to run the script with non-string inputs (e.g., passing an array or object).

## Execution Procedure
1. Prepare the input based on the scenario.
2. Run the Dead Ants Calculator script with the prepared input.
3. Observe the output and compare it to the expected result.

## Expected Outcomes
- **Intact Ants Only**: Should return 0 dead ants.
- **Scattered Parts Only**: The output should match the highest count of any single part ('a', 'n', or 't').
- **Mixed Scenario**: The count should reflect the maximum number of individual parts after removing intact ants.
- **Invalid Characters**: Should be handled gracefully, either by ignoring them or by providing a meaningful error message.
- **Empty String**: Should return 0 dead ants.
- **Non-string Input**: Should provide a meaningful error message or handle the input type gracefully.

## Reporting
All test results will be documented, specifying the input, expected outcome, actual outcome, and whether the test passed or failed. Discrepancies will be further analyzed for bug tracking and future improvements.
