import { Mistral } from '@mistralai/mistralai';
import { data } from './data';

const apiKey = process.env.MISTRAL_API_KEY;

const client = new Mistral({apiKey: apiKey});

const chatResponse = await client.chat.stream({
  model: 'mistral-large-latest',
  messages: [
    {role: 'system', content: data},
    {role: 'user', content: 'Comment tu te nommes ?'}],
});

for await (const message of chatResponse) {
  const streamText = message.data.choices[0].delta.content;
  process.stdout.write(streamText as string);
}