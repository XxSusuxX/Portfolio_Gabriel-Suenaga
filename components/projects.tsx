"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useSectioninView } from '@/lib/hooks'

export default function Projects() {
  const { ref } = useSectioninView('Projetos', 0.3)
  return (
    <section ref={ref} id='projetos' className='scroll-mt-28 mb-28'>
        <SectionHeading>Meus Projetos</SectionHeading>
        <div>
            {
                projectsData.map((project, index)=> (
                    <React.Fragment key={index}>
                        <Project {...project}/>
                    </React.Fragment>
                ))
            }
        </div>
    </section>
  )
}
