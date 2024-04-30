'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { useChat } from 'ai/react';
import { map } from 'lodash';
import BotMessage from './bot-message';
import UserMessage from './user-message';

export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit } = useChat();

	console.log('mess', messages);

	return (
		<>
			<ScrollArea className='w-full px-4 py-6 h-full flex flex-col gap-5'>
				{map(messages, message => {
					return (
						<>
							{message.role === 'user' ? (
								<UserMessage key={message.id}>{message.content}</UserMessage>
							) : (
								<BotMessage key={message.id}>{message.content}</BotMessage>
							)}
						</>
					);
				})}
			</ScrollArea>
			<div className='border-t px-4 py-3 bottom-0'>
				<form className='flex items-center space-x-2' onSubmit={handleSubmit}>
					<Input placeholder='Type your message...' type='text' value={input} onChange={handleInputChange} />
					<Button>Send</Button>
				</form>
			</div>
		</>
	);
}
