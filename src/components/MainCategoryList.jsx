import { useState } from "react";
import { GiAmpleDress } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";

function MainCategoryList() {
  const [arrowVisible, setArrowVisible] = useState(false);
  return (
    <>
      <div className="text-sm p-3 border-1 border-[--dark-color] rounded-lg mt-3 bg-[--white-color] w-[18rem]">
          <a href="" onMouseOver={()=> setArrowVisible(true)} onMouseOut={()=> setArrowVisible(false)} className="flex items-center justify-between pb-[.35rem] hover:text-[--primary-color]">
              <div className=" flex items-center" >
                  <div className="bg-[--light-color] p-1 rounded-full mr-2">
                      <GiAmpleDress/>
                  </div>
                  <span>Women's & Girl's Fashion </span>
              </div>
              <IoIosArrowForward className={arrowVisible ? 'text-[--primary-color] font-semibold' : 'text-[--white-color]'} />
          </a>
      </div>
    </>
  )
}

export default MainCategoryList