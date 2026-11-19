# Backend (FastAPI)

Requires [uv](https://docs.astral.sh/uv/).

```sh
uv sync                                  # install deps (incl. dev)
cp .env.example .env                     # optional, defaults work locally
uv run uvicorn app.main:app --reload     # http://localhost:8000 (docs at /docs)
```

## Checks

```sh
uv run pytest
uv run ruff check .
uv run ruff format .
```
