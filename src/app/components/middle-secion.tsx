import { CheckIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { cormorant_garamond } from '../fonts';

export default function MiddleSection() {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'>
			<div className='container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12'>
				<div className='space-y-4 lg:order-last'>
					<h2
						className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl  ${cormorant_garamond.className}`}>
						Unlock the Full Potential of Your Conversations
					</h2>
					<p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
						Our AI chatbot offers a wide range of features to enhance your communication experience. From personalized
						responses to seamless integration, we have got you covered.
					</p>
					<ul className='grid gap-4'>
						<li className='flex items-start gap-2'>
							<CheckIcon className='mt-1 h-5 w-5 flex-shrink-0 text-gray-900 dark:text-gray-50' />
							<div>
								<h3 className='text-lg font-medium'>Personalized Responses</h3>
								<p className='text-gray-500 dark:text-gray-400'>
									Our AI-powered chatbot adapts to your unique communication style, providing personalized responses
									tailored to your needs.
								</p>
							</div>
						</li>
						<li className='flex items-start gap-2'>
							<CheckIcon className='mt-1 h-5 w-5 flex-shrink-0 text-gray-900 dark:text-gray-50' />
							<div>
								<h3 className='text-lg font-medium'>Seamless Integration</h3>
								<p className='text-gray-500 dark:text-gray-400'>
									Easily integrate our chatbot into your existing platforms and workflows, ensuring a seamless user
									experience.
								</p>
							</div>
						</li>
						<li className='flex items-start gap-2'>
							<CheckIcon className='mt-1 h-5 w-5 flex-shrink-0 text-gray-900 dark:text-gray-50' />
							<div>
								<h3 className={`text-lg font-medium  ${cormorant_garamond.className}`}>Multilingual Support</h3>
								<p className='text-gray-500 dark:text-gray-400'>
									Our chatbot understands and communicates in multiple languages, breaking down language barriers and
									reaching a global audience.
								</p>
							</div>
						</li>
					</ul>
				</div>
				<Image
					alt='AI Chatbot'
					className='mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full'
					height='2000'
					src='/placeholder.jpg'
					width='2000'
				/>
			</div>
		</section>
	);
}
