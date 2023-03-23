import Background from './components/Background';
import Experience from './components/Experience';

export async function generateMetadata({ params, searchParams }: any) {
  return { title: 'Home | sliger.dev', meta: 'sliger.dev' };
}

export default function Home() {
  return (
    <main className='min-h-[800px] '> 
      <Background />
      <Experience />
    </main>
  )
}
