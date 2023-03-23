import Image from 'next/image'
import styles from './page.module.css'
import Background from './components/Background';

export async function generateMetadata({ params, searchParams }: any) {
  return { title: 'Home | sliger.dev' };
}

export default function Home() {
  return (
    <main className='min-h-screen'> 
      <Background />
      <div className="bg-[#ff5500] dark:bg-blue-800 min-h-screen" id="content-home">
      </div>
    </main>
  )
}
