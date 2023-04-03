import dynamic from 'next/dynamic'
const WorkExperience = dynamic(() => import('./WorkExperience'))
const SchoolDetails = dynamic(() => import('./SchoolDetails'))
const Parallax = dynamic(() => import('./Parallax'), { ssr: false })


export default function Experience() {
  return (
    <div className="bg-[#ff5500] pt-8 pb-36 z-30 dark:bg-blue-800 min-h-[800px] flex flex-col items-center" id="content-home">
      <div className="w-full lg:w-[1024px] flex-grow py-16">
        <Parallax offset={75}>
          <WorkExperience /> 
          <div className="h-44"/>
          <SchoolDetails />
        </Parallax>
      </div>
    </div>
  )
}
