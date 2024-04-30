import React, { ReactNode } from 'react';

export default function BotMessage({ children }: { children: ReactNode }) {
	return (
		<div className='bg-foreground text-background border border-border p-3 rounded-md max-w-[70%]'>{children}</div>
	);
}
