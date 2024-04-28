import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';
import BotMessage from './bot-message';
import UserMessage from './user-message';

export default function Chat() {
	return (
		<div className='flex h-full w-full'>
			<div className='hidden w-72 flex-col border-r md:flex'>
				<div className='border-b p-4'>
					<h2 className='text-lg font-semibold'>Chats</h2>
				</div>
				<div className='flex-1 overflow-y-auto' />
			</div>
			<div className='flex flex-1 flex-col'>
				<div className='border-b p-4'>
					<div className='flex items-center space-x-4'>
						<h2 className='text-lg font-semibold'>John Doe</h2>
					</div>
				</div>
				<ScrollArea className='w-full px-4 py-6 h-full [&>div>div]:!flex [&>div>div]:!flex-col [&>div>div]:gap-5'>
					<UserMessage />
					<BotMessage />
					<UserMessage />
					<BotMessage />
				</ScrollArea>
				<div className='border-t px-4 py-3 bottom-0'>
					<div className='flex items-center space-x-2'>
						<Input placeholder='Type your message...' type='text' />
						<Button>Send</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
