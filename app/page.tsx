'use client';

import Hero from "@/src/Components/Hero";
import Footer from "@/src/Components/Footer";
import WhatIsIsOKai from "@/src/Components/WhatIsIsOKai";
import HowIUseIt from "@/src/Components/HowIUseIt";
import WhoThisIsFor from "@/src/Components/WhoThisIsFor";

export default function Home() {
  return (
    <div className="py-0"> 
      <Hero />
      <WhatIsIsOKai />
      <HowIUseIt />
      <WhoThisIsFor/>
      <Footer/>
    </div>
  );

}
