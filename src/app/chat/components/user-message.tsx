import React, { ReactNode } from 'react';

export default function UserMessage({ children }: { children: ReactNode }) {
	return (
		<div className='text-foreground bg-background border border-border p-2 rounded-md max-w-[70%] self-end'>
			{children}
		</div>
	);
}
