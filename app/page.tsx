import Image from 'next/image'
import styles from './page.module.css'
import Background from './components/Background';

export async function generateMetadata({ params, searchParams }: any) {
  return { title: 'sliger.io' };
}

export default function Home() {
  return (
    <main className='min-h-screen'> 
      <Background />
      <div className="bg-[#ff5500] min-h-screen">

      </div>
    </main>
  )
}
