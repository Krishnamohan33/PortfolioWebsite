import React from 'react'
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      {/* <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi"> Page</li>
        <li className="sidenavLi">Portfolio Page</li>
      </ul> */}
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
      <li className="sidenavLi"><a href="https://devfolio.co/projects/bodhi-plus-25f8" target="_blank  rel=noopener noreferrer" >Bodhi Plus</a></li>
      <li className="sidenavLi"><a href="https://devfolio.co/projects/meta-banking-310e" target="_blank  rel=noopener noreferrer">Meta Banking</a></li>
      <li className="sidenavLi"><a href="https://devfolio.co/projects/flowcoincollector-47be" target="_blank rel=noopener noreferrer">Flow Coin Collector</a></li>
      <li className="sidenavLi"><a href="https://www.youtube.com/watch?v=GQ-BmTAtBUA" target="_blank rel=noopener noreferrer">Chase Your Dream - Jobs and Internships app Built using React</a></li>
      <li className="sidenavLi"><a href="https://www.youtube.com/watch?v=GQ-BmTAtBUA" target="_blank rel=noopener noreferrer">Crime Hut</a></li>
      <li className="sidenavLi"><a href="https://www.youtube.com/watch?v=GQ-BmTAtBUA" target="_blank rel=noopener noreferrer">Event Planner Using React</a></li>


      </ul>
      <SidenavTitle title="V" subTitle="ideo Games Published" />
      <ul>
      <li className="sidenavLi"><a href="https://krishnamohan-yagneswaran.itch.io/obstacle-obliterator-march-of-progress" target="_blank rel=noopener noreferrer">Obstacle Obliterator: March of Progress</a></li>
      <li className="sidenavLi"><a href="https://krishnamohan-yagneswaran.itch.io/hearts-of-the-digital-seas" target="_blank rel=noopener noreferrer">Hearts of the Digital Seas</a></li>
      <li className="sidenavLi"><a href="https://krishnamohan-yagneswaran.itch.io/spirite-run" target="_blank rel=noopener noreferrer">Spirite Run!!</a></li>
      <li className="sidenavLi"><a href="https://krishnamohan-yagneswaran.itch.io/echoes-of-solitude" target="_blank rel=noopener noreferrer">Echoes of Solitude</a></li>
      </ul>
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        
        <li className="sidenavLi">krishna.mohan.y003@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav