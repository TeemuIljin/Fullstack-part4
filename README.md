# Bloglist Backend

Backend application for managing blog posts. Part 4 of Fullstack Open course.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

3. Update `.env` with your MongoDB connection strings:
   - `MONGODB_URI`: For development/production
   - `TEST_MONGODB_URI`: For running tests (should be a separate test database)

4. Run the application:
```bash
npm run dev
```

## Testing

Run tests with:
```bash
npm test
```
