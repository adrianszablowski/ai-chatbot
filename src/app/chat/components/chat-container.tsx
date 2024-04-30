import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';
import BotMessage from './bot-message';
import UserMessage from './user-message';
import Chat from './chat';

export default function ChatContainer() {
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
				<Chat />
			</div>
		</div>
	);
}
