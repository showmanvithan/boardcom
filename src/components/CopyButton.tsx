"use client";

interface CopyButtonProps {
  code: string;
}

export function CopyButton({ code }: CopyButtonProps) {
  return (
    <button
      onClick={() => navigator.clipboard.writeText(code)}
      className="text-xs text-zinc-400 hover:text-zinc-100 transition-colors px-2 py-0.5 rounded border border-zinc-600 hover:border-zinc-400"
    >
      copy
    </button>
  );
}