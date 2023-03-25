import dynamic from 'next/dynamic'
const WorkExperience = dynamic(() => import('./WorkExperience'))
const Parallax = dynamic(() => import('./Parallax'), { ssr: false })


export default function Experience() {
  return (
    <div className="bg-[#ff5500] z-30 dark:bg-blue-800 min-h-screen flex flex-col items-center" id="content-home">
      <div className="w-full lg:w-[1024px] flex-grow py-16">
        <Parallax offset={60}>
          <WorkExperience />
        </Parallax>
      </div>
    </div>
  )
}
