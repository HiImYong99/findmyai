export interface Scores {
  chatgpt: number;
  claude: number;
  perplexity: number;
  midjourney: number;
  notebookLM: number;
  gemini: number;
  clovaX: number;
}

export type PricePlan = 'free' | 'standard' | 'pro' | 'max';

export interface Answer {
  scores?: Partial<Scores>;
  pricePlan?: PricePlan;
}

export function calculateResult(answers: Answer[]) {
  const totals: Scores = {
    chatgpt: 0,
    claude: 0,
    perplexity: 0,
    midjourney: 0,
    notebookLM: 0,
    gemini: 0,
    clovaX: 0
  };
  let finalPlan: PricePlan = 'free';

  answers.forEach((ans) => {
    if (ans.scores) {
      if (ans.scores.chatgpt) totals.chatgpt += ans.scores.chatgpt;
      if (ans.scores.claude) totals.claude += ans.scores.claude;
      if (ans.scores.perplexity) totals.perplexity += ans.scores.perplexity;
      if (ans.scores.midjourney) totals.midjourney += ans.scores.midjourney;
      if (ans.scores.notebookLM) totals.notebookLM += ans.scores.notebookLM;
      if (ans.scores.gemini) totals.gemini += ans.scores.gemini;
      if (ans.scores.clovaX) totals.clovaX += ans.scores.clovaX;
    }
    if (ans.pricePlan) {
      finalPlan = ans.pricePlan;
    }
  });

  const sortedServices = Object.entries(totals)
    .sort(([, a], [, b]) => b - a)
    .map(([key]) => key as keyof Scores);

  return {
    primary: sortedServices[0],
    secondary: sortedServices[1],
    plan: finalPlan,
  };
}
