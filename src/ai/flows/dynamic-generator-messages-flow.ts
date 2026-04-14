'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating dynamic loading messages
 * during a simulated Free Fire resource generation process.
 *
 * - dynamicGeneratorMessages - A function that generates a sequence of loading messages.
 * - DynamicGeneratorMessagesInput - The input type for the dynamicGeneratorMessages function.
 * - DynamicGeneratorMessagesOutput - The return type for the dynamicGeneratorMessages function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DynamicGeneratorMessagesInputSchema = z.object({
  freeFireUid: z.string().describe('The user\'s Free Fire UID or Username.'),
  platform: z.enum(['android', 'ios']).describe('The target device platform.'),
  coins: z.number().describe('The selected amount of Free Fire coins.'),
  diamonds: z.number().describe('The selected amount of Free Fire diamonds.'),
});
export type DynamicGeneratorMessagesInput = z.infer<
  typeof DynamicGeneratorMessagesInputSchema
>;

const DynamicGeneratorMessagesOutputSchema = z.object({
  messages: z
    .array(z.string())
    .describe('An ordered list of realistic loading messages.'),
});
export type DynamicGeneratorMessagesOutput = z.infer<
  typeof DynamicGeneratorMessagesOutputSchema
>;

export async function dynamicGeneratorMessages(
  input: DynamicGeneratorMessagesInput
): Promise<DynamicGeneratorMessagesOutput> {
  return dynamicGeneratorMessagesFlow(input);
}

const dynamicGeneratorMessagesPrompt = ai.definePrompt({
  name: 'dynamicGeneratorMessagesPrompt',
  input: {schema: DynamicGeneratorMessagesInputSchema},
  output: {schema: DynamicGeneratorMessagesOutputSchema},
  prompt: `You are a sophisticated server message generator for a Free Fire resource generator.
Your task is to create a sequence of highly realistic and convincing loading messages for a user who is generating Free Fire resources.
The messages should simulate the process of connecting to a server, verifying the user, processing and adding resources, and finalizing the transaction.
Crucially, incorporate the user's specific selections for coins and diamonds into the messages to make them feel dynamic and personalized.

Generate the messages as a JSON array of strings, where each string is a short, distinct step in the process. Ensure the language is professional and legitimate, avoiding any terms like "hack" or "fake."

User Selections:
- UID/Username: {{{freeFireUid}}}
- Platform: {{{platform}}}
- Coins: {{{coins}}}
- Diamonds: {{{diamonds}}}`,
});

const dynamicGeneratorMessagesFlow = ai.defineFlow(
  {
    name: 'dynamicGeneratorMessagesFlow',
    inputSchema: DynamicGeneratorMessagesInputSchema,
    outputSchema: DynamicGeneratorMessagesOutputSchema,
  },
  async input => {
    try {
      const {output} = await dynamicGeneratorMessagesPrompt(input);
      return output!;
    } catch (error) {
      // Return a set of realistic fallback messages if the AI service fails (e.g. API not enabled)
      return {
        messages: [
          "Establishing secure handshake with Garena servers...",
          "Bypassing firewall protocols...",
          `Player ${input.freeFireUid} identified on ${input.platform.toUpperCase()} cluster...`,
          "Validating resource request authorization...",
          `Batching ${input.coins.toLocaleString()} Coins for delivery...`,
          `Batching ${input.diamonds.toLocaleString()} Diamonds for delivery...`,
          "Injecting resource packets into game database...",
          "Finalizing transaction sequence..."
        ]
      };
    }
  }
);
