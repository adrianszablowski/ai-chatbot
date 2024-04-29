import { BotMessageSquareIcon } from 'lucide-react';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';

export default function Header() {
	return (
		<header className='flex h-[6dvh] w-full shrink-0 items-center border-b border-border'>
			<div className='container flex justify-between'>
				<Link className='flex items-center justify-center gap-2' href='/'>
					<BotMessageSquareIcon />
					<span className='text-xl hidden lg:block'>AI Chatbot</span>
				</Link>
				<nav className='ml-auto flex gap-4 sm:gap-6'>
					<ModeToggle />
				</nav>
			</div>
		</header>
	);
}
