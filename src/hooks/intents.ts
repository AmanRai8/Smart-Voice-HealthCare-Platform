import { intents } from "@/lib/utils";

export function matchIntent(message: string) {
  const lower = message.toLowerCase();

  for (const intent of intents) {
    if (intent.keywords.some(k => lower.includes(k))) {
      return intent.response;
    }
  }

  return null;
}
