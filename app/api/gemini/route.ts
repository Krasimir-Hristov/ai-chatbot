import { streamText, Message } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { initialMessage } from '@/lib/data';

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY || '',
});

export const runtime = 'edge';

const generateId = () => Math.random().toString(36).slice(2, 15);

const buildGoogleGenAIPromt = (messages: Message[]): Message[] => [
  {
    id: generateId(),
    role: 'user',
    content: initialMessage.content,
  },

  ...messages.map((message) => ({
    id: message.id || generateId(),
    role: message.role,
    content: message.content,
  })),
];

export async function POST(req: Request) {
  const { messages } = await req.json();
  const stream = await streamText({
    model: google('gemini-pro'),
    messages: buildGoogleGenAIPromt(messages),
    temperature: 0.7,
  });
  return stream?.toDataStreamResponse();
}
