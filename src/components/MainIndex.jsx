import React from "react";
import IndexHome from "./mainIndex/IndexHome";
import IndexProjects from "./mainIndex/IndexProjects";
import IndexSolutions from "./mainIndex/IndexSolutions";
import IndexTech from "./mainIndex/IndexTech";
import Indexservice from "./mainIndex/Indexservice";
import WhyChooseus from "./mainIndex/WhyChooseus";
import Counter from "./mainIndex/Counter";
import WhyChooseUs2 from "./mainIndex/WhyChooseUs2";
import Whychooseus3 from "./mainIndex/Whychooseus3";
import Acheivements from "./mainIndex/Acheivements";
import Counter2 from "./mainIndex/Counter2";
import Quotes from './mainIndex/Quotes';
import ContactForm from './contact/ContactForm';
import NewContactForm from './contact/NewContactForm';

const MainIndex = () => {
  return (
       <>
      <IndexHome />
 <Counter2/>

      <Indexservice />
      <IndexTech />
      <IndexSolutions />
      {/* <IndexProjects /> */}
      <WhyChooseus />
      {/* <Counter /> */}
      {/* <WhyChooseUs2 /> */}
      <Quotes/>
      <Whychooseus3 />
      {/* <Acheivements /> */}
      {/* <ContactForm/> */}
      <NewContactForm/>
      </>
  );
};

export default MainIndex;
