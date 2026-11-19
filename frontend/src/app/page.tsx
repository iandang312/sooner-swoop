import { Suspense } from "react";

import { apiFetch } from "@/lib/api";

async function BackendStatus() {
  let status: string;
  try {
    const data = await apiFetch<{ status: string }>("/health");
    status = data.status;
  } catch {
    status = "unreachable";
  }

  const ok = status === "ok";
  return (
    <span className={ok ? "text-green-600" : "text-red-600"}>
      {ok ? "connected" : "unreachable"}
    </span>
  );
}

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-4 px-6">
      <h1 className="text-3xl font-semibold tracking-tight">Sooner Swoop</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        Backend:{" "}
        <Suspense fallback={<span>checking…</span>}>
          <BackendStatus />
        </Suspense>
      </p>
    </main>
  );
}
