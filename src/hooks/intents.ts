import { intents } from "@/lib/utils";

export function matchIntent(message: string): string | null {
  const lower = message.toLowerCase();

  let bestMatch: { response: string; score: number } | null = null;

  for (const intent of intents) {
    const score = intent.keywords.filter(k => lower.includes(k)).length;
    if (score > 0 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = { response: intent.response, score };
    }
  }

  return bestMatch?.response ?? null;
}

