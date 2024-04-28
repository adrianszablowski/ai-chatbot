import { MountainIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Header() {
	return (
		<header className='flex h-16 w-full shrink-0 items-center border-b border-border'>
			<div className='container flex justify-between'>
				<Link className='flex items-center justify-center gap-2' href='/'>
					<MountainIcon />
					<span className='text-xl'>AI Chatbot</span>
				</Link>
				<nav className='ml-auto flex gap-4 sm:gap-6'>ss</nav>
			</div>
		</header>
	);
}
