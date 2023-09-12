'use client'
import styles from '../styles/experience.module.css'
import Section from '../components/section.js'

export default function Experience() {
  const resume = [
    {
      label: 'Experience',
      content: '-blah -blah'
    },
    {
      label: 'Projects',
      content: '-blah -blah'
    },
    {
      label: 'Skills',
      content: '-blah -blah'
    }
  ] 


    

  return (
    <main>
      {resume.map((resumeSection, index) => {
        <Section 
          key={index}
          section={resumeSection.label}
          content={resumeSection.content}
        />
      })}
      <div>work experience</div>
    </main>
  );
}
