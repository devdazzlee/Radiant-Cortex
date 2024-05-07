import React from 'react'
import MegaMenu from '../../Components/Navbar/Navbar'
import CareerBanner from '../../Components/Banner/CarrerBanner'
import OurClient_ino from '../../Components/OurClient_ino/OurClient_ino'
import Carrers from '../Carrers/Carrers'
import Footer from '../../Components/Footer/Footer'
import CaseStudyBanner from '../../Components/Banner/Case_studyBanner'
import WorkBanner from '../../Components/Banner/WorkBanner'
import CaseStudyBanner2 from '../../Components/Banner/CaseStudyBanner2'
import One_Text_Image from '../../Components/One_Side_Image_Text/One_Side_Image_Text2'
import RevertText_Image from '../../Components/One_Side_Image_Text/Revert'
import img1 from '../../Images/case-study-img-1.jpg'
import img2 from '../../Images/case-study-img-2.jpg'
import img3 from '../../Images/case-study-img-3.jpg'
import img4 from '../../Images/case-study-img-4.jpg'




const Case_study = () => {
  return (
<>
<div  className='bg-img-dv-3'    >
<MegaMenu/>
<CaseStudyBanner/>
</div>
<CaseStudyBanner2/>
<One_Text_Image 
        title="First Step: Brief"
        subtitle="Inform us about your requirements."
        paragraph="At Radiant Cortex, we believe good communication is essential. Therefore we allocate the necessary time it takes to fully understand your needs. Although, we strive to ensure that you leave everything to us. But taking this time to understand the specifications will eliminate the need for avoidable revisions in the future."
        imageSource={img1}
      />
<RevertText_Image

title="Second Step: Brainstorming"
subtitle="It's imperative for us to think before we act."
paragraph="In this phase, we take special consideration at always being innovative. We find ways to approach every task with creativity that surpasses the traditional methodology. This free exchange of ideas generates many different solutions for the same problem. Later on, it allows us to select the best ones via elimination and refining them to perfection."
        imageSource={img2}
/>
<One_Text_Image 
        title="Third Step: Sketching"
        subtitle="Inform us about your requirements."
        paragraph="We develop some design processes to move forward before finalizing anything. In this phase, we appreciate some feedback from you to ensure we adhere to your vision. Our team will use their expertise to suggest some inventive procedures, and you may pick or suggest changes in anyone of them."
        imageSource={img3}
      />
<RevertText_Image

title="Fourth Step: Finalizing"
subtitle="We Provide The Polished Finished Product"
paragraph="Our team will proceed with finalizing the product in light of your suggestions. In this step, we will polish the product, bringing it up to the industry standards. We ensure perfecting all the technical aspects by running the products through our testing checklists."
        imageSource={img4}
/>



<OurClient_ino/>

<Footer/>
</>
  )
}

export default Case_study