```markdown
# smartedu Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches you the core development patterns and conventions used in the `smartedu` TypeScript codebase. You'll learn how to name files, structure imports and exports, write and locate tests, and follow commit message patterns. While no specific framework is detected, the repository follows clear TypeScript best practices and a consistent code style.

## Coding Conventions

### File Naming
- Use **camelCase** for all file names.
  - Example: `userProfile.ts`, `courseManager.ts`

### Import Style
- Use **relative imports** for referencing local files.
  - Example:
    ```typescript
    import { getUser } from './userService';
    ```

### Export Style
- Use **named exports** for all modules.
  - Example:
    ```typescript
    // In userService.ts
    export function getUser(id: string) { ... }
    export const USER_ROLE = 'student';
    ```

### Commit Messages
- Freeform messages, typically around 40 characters.
  - Example: `fix user role assignment bug`

## Workflows

### Adding a New Module
**Trigger:** When you need to add a new feature or domain logic.
**Command:** `/add-module`

1. Create a new file using camelCase (e.g., `lessonManager.ts`).
2. Use named exports for all functions and constants.
3. Use relative imports to bring in dependencies.
4. Write a corresponding test file named `lessonManager.test.ts`.
5. Commit changes with a concise, descriptive message.

### Writing and Running Tests
**Trigger:** When you add or update code that requires validation.
**Command:** `/run-tests`

1. Create or update a test file matching `*.test.ts` (e.g., `userService.test.ts`).
2. Write tests using your preferred testing framework (framework not specified).
3. Run tests using the project's test runner (see project docs or scripts).
4. Review test results and fix any failures.

### Refactoring Existing Code
**Trigger:** When improving or reorganizing code.
**Command:** `/refactor`

1. Rename files using camelCase if needed.
2. Update relative imports to match new file locations.
3. Ensure all exports remain named.
4. Update or add tests to cover refactored code.
5. Commit with a message describing the refactor.

## Testing Patterns

- Test files are named with the pattern `*.test.ts` (e.g., `courseManager.test.ts`).
- The specific testing framework is not detected; follow the project's existing test style.
- Place tests alongside or near the modules they cover.

**Example:**
```typescript
// courseManager.test.ts
import { createCourse } from './courseManager';

test('should create a course', () => {
  const course = createCourse('Math 101');
  expect(course.name).toBe('Math 101');
});
```

## Commands
| Command       | Purpose                                   |
|---------------|-------------------------------------------|
| /add-module   | Scaffold a new module with tests          |
| /run-tests    | Run all test files matching `*.test.ts`   |
| /refactor     | Guide refactoring and updating conventions|
```
