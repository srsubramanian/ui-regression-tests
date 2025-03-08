# Playwright UI Test Suite

This project is a UI regression test suite built using Playwright. It is designed to automate the testing of UI components and pages in your application, ensuring that any changes do not introduce regressions.

## Project Structure

- **tests/**: Contains all the test specifications.
  - **visual/**: Contains visual regression tests.
    - **components/**: Tests for individual UI components.
      - `component-tests.spec.ts`: Test cases for validating component rendering and behavior.
    - **pages/**: Tests for entire pages of the UI application.
      - `page-tests.spec.ts`: Test cases for checking functionality and layout of different pages.
  - `helper.ts`: Utility functions for setting up tests.

- **fixtures/**: Contains test data.
  - `test-data.json`: JSON data used as test fixtures.

- **utils/**: Contains utility functions for testing tasks.
  - `test-utils.ts`: Functions for element selection, waiting for conditions, or logging.
  - `visual-comparison.ts`: Functions for visual comparisons of screenshots.

- `playwright.config.ts`: Configuration file for Playwright.

- `global-setup.ts`: Global setup logic that runs before all tests.

- **expected-screenshots/**: Directory for baseline screenshots for visual comparison.
  - `.gitkeep`: Placeholder to keep the directory in version control.

- **test-results/**: Directory for storing test run results.
  - `.gitkeep`: Placeholder to keep the directory in version control.

- `package.json`: Configuration file for npm, listing dependencies and scripts.

- `tsconfig.json`: Configuration file for TypeScript.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd playwright-ui-tests
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the tests**:
   ```
   npx playwright test
   ```

## Usage

- Add your test cases in the appropriate files under the `tests/` directory.
- Use the helper functions from `helper.ts` and utility functions from `utils/` as needed.
- Update the `test-data.json` file with any necessary test data.
- Ensure to keep your expected screenshots updated in the `expected-screenshots/` directory.

## Contributing

Feel free to submit issues or pull requests to improve the test suite. Make sure to follow the project's coding standards and guidelines.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.