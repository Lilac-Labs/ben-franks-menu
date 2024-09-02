import Image from 'next/image';

export default function Home() {
	return (
		<main className="flex min-h-screen items-center justify-center">
			<Image
				src="/side.png"
				alt="side"
				width={0}
				height={0}
				sizes="100vw"
				style={{ width: 'auto', height: 'auto' }}
				priority
			/>
		</main>
	);
}
