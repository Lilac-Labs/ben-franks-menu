import Image from 'next/image';

export default function Home() {
	return (
		<main className="flex min-h-screen items-center justify-center">
			<Image src="/1.jpg" alt="Image 1" width={500} height={300} priority />
		</main>
	);
}
