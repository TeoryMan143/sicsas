import { messageSquema } from '@/core/message-squema';
import { sendMessage } from '@/core/send-message';
import { defineAction } from 'astro:actions';

export const server = {
  sendMessage: defineAction({
    input: messageSquema,
    handler: sendMessage,
  }),
};
