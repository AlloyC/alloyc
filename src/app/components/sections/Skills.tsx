import React from 'react';
import JavaScript from "../../../../public/assets/icons/javascript.svg"
import Reactjs from "../../../../public/assets/icons/reactjs.svg"
import Nextjs from "../../../../public/assets/icons/nextjs.svg"
import Typescript from "../../../../public/assets/icons/typescript.svg"
import Firebase from "../../../../public/assets/icons/firebase.svg"
import HTML5 from "../../../../public/assets/icons/html5.svg"
import GitGithub from "../../../../public/assets/icons/git-github.svg"
import TailwindCSS from "../../../../public/assets/icons/tailwind.svg"
import CSS from "../../../../public/assets/icons/css.svg"
import SectionHeader from '../utils/SectionHeader';
import Skill from '../utils/Skill';

function Skills() {
  return (
      <div className='flex flex-col gap-3 items-center'>
          <SectionHeader text='My Skills' />
          <div className='-mt-12 md:mt-4 scale-50 md:scale-90 lg:scale-100 space-y-6'>
              <div className='flex gap-8'>
                  <Skill skillName='JavaScript' source={JavaScript} />
                  <Skill skillName='ReactJs' source={Reactjs} />
                  <Skill skillName='NextJs' source={Nextjs} />
                  <Skill skillName='TypeScript' source={Typescript} />
              </div>
              <div className='flex justify-center gap-8'>
                  <Skill skillName='Firebase' source={Firebase} />
                  <Skill skillName='HTML 5' source={HTML5} />
                  <Skill skillName='Git & GitHub' source={GitGithub} />
              </div>
              <div className='flex justify-center gap-8'>
                  <Skill skillName='Tailwind CSS' source={TailwindCSS} />
                  <Skill skillName='CSS' source={CSS} />
              </div>
      </div>
    </div>
  )
}

export default Skills
