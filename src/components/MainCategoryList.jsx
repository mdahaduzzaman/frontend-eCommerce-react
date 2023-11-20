import { useState } from "react";
import { GiAmpleDress } from "react-icons/gi";
import './mainCategoryList.css'

function MainCategoryList() {
  const mainCategoryList = [
    {
      id: 1,
      url: "#",
      icon: <GiAmpleDress />,
      title: "Women's & Girl's Fashion "
    },
    {
      id: 2,
      url: "#",
      icon: <GiAmpleDress />,
      title: "Men's Fashion "
    },
    {
      id: 3,
      url: "#",
      icon: <GiAmpleDress />,
      title: "Computer Accessories"
    },
  ]


  const [activeItemId, setActiveItemId] = useState(null);
  const [subCategoryList, setSubCategoryList] = useState([]);

  const handleMouseOver = (id) => {
    setActiveItemId(id);
  };

  const handleMouseOut = () => {
    setActiveItemId(null);
  };

  
  return (
    <>
      <div className="text-sm p-3 border-1 border-[--dark-color] relative rounded-lg mt-3 bg-[--white-color] w-[18rem]">
        {mainCategoryList.map((curElem) => (
          <a
            key={curElem.id}
            href={curElem.url}
            onMouseOver={() => handleMouseOver(curElem.id)}
            onMouseOut={handleMouseOut}
            className={`flex items-center justify-between pb-[.35rem] hover:text-[--primary-color] ${activeItemId === curElem.id ? 'includeArrow' : ''}`}
          >
            <div className="flex items-center">
              <div className="bg-[--light-color] p-1 rounded-full mr-2">
                {curElem.icon}
              </div>
              <span>{curElem.title}</span>
            </div>
          </a>
        ))}


        {/* sub category section start from here */}

        <div className={`p-2 absolute w-[16rem] h-[103.5%] bg-[--white-color] right-[-17rem] z-10 rounded-lg top-0 ${subCategoryList.length ? 'block' : 'hidden'}`}>
          <ul>
            {
              subCategoryList.map((curElem)=>(
                <li onMouseOver={() => handleMouseOver(curElem.id)}
                onMouseOut={handleMouseOut} className={`flex py-1 justify-between hover:text-[--primary-color] ${activeItemId === curElem.id ? 'includeArrow' : ''}`}>
                  <a href="" className="">Traditional Wear</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default MainCategoryList