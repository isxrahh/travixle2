// app/api/chat/route.ts

import { streamText } from 'ai';
import { google } from '@ai-sdk/google'; 
import { convertToModelMessages } from 'ai'; 

export const maxDuration = 60;
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const modelMessages = await convertToModelMessages(messages); 

    const result = await streamText({
      model: google('gemini-2.5-flash'),
      messages: modelMessages,
      system: 'You are a helpful concierge assistant.', 
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('Chat API error:', error);

    return new Response(
      JSON.stringify({
        error: 'Something went wrong. Please try again.',
        details: error instanceof Error ? error.message : String(error),
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}