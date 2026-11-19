# Sooner Swoop

| Directory   | Stack                                      | Dev URL               |
| ----------- | ------------------------------------------ | --------------------- |
| `backend/`  | Python 3.11, FastAPI, uv, Ruff, pytest     | http://localhost:8000 |
| `frontend/` | Next.js 16, TypeScript, Tailwind, ESLint, Prettier | http://localhost:3000 |

## Running locally

Run each in its own terminal:

```sh
# backend
cd backend
uv sync
uv run uvicorn app.main:app --reload

# frontend
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

The home page shows whether the frontend can reach the backend's `GET /api/health`.
API docs: http://localhost:8000/docs

## Checks

```sh
# backend
uv run pytest && uv run ruff check . && uv run ruff format --check .

# frontend
npm run lint && npm run typecheck && npm run format:check
```
