// "use client";
// import { useState } from "react";
// import ComponentOne from "./helpers/section3/Component1";
// import ComponentTwo from "./helpers/section3/Component2";
// import ComponentThree from "./helpers/section3/Component3";
// import { Bus, BusFront, Crown } from "lucide-react";

// const ShowComponent = () => {
//   const [activeComponent, setActiveComponent] = useState<number>(1);

//   const renderComponent = () => {
//     switch (activeComponent) {
//       case 1:
//         return <ComponentOne />;
//       case 2:
//         return <ComponentTwo />;
//       case 3:
//         return <ComponentThree />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="p-4">
//       <div className="flex flex-row sm:space-x-4 lg:p-6 p-6 mb-4 justify-center items-center">
//         <button
//           className={`flex flex-col items-center mb-4 sm:mb-0 w-[200px] ${
//             activeComponent === 1 ? "text-yellow-500" : "text-gray-500"
//           }`}
//           onClick={() => setActiveComponent(1)}
//         >
//           <Bus className="w-20 h-20" />
//           <span className="text-lg">Oz Van</span>
//         </button>
//         <button
//           className={`flex flex-col items-center mb-4 lg:mb-0  w-[200px] ${
//             activeComponent === 2 ? "text-yellow-500" : "text-gray-500"
//           }`}
//           onClick={() => setActiveComponent(2)}
//         >
//           <BusFront className="w-20 h-20" />
//           <span className={`text-lg `}>Oz Bus</span>
//         </button>
//         <button
//           className={`flex flex-col items-center w-[200px] ${
//             activeComponent === 3 ? "text-yellow-500" : "text-gray-500"
//           }`}
//           // onClick={() => setActiveComponent(3)}
//         >
//           <Crown className="w-20 h-20" />
//           <span className="text-lg">Oz Premium</span>
//         </button>
//       </div>
//       <div>{renderComponent()}</div>
//     </div>
//   );
// };

// export default ShowComponent;

"use client";
import { useState } from "react";
import ComponentOne from "./helpers/section3/Component1";
import ComponentTwo from "./helpers/section3/Component2";
import ComponentThree from "./helpers/section3/Component3";
import { Bus, BusFront, Crown } from "lucide-react";

const ShowComponent = () => {
  const [activeComponent, setActiveComponent] = useState<number>(1);

  const renderComponent = () => {
    switch (activeComponent) {
      case 1:
        return <ComponentOne />;
      case 2:
        return <ComponentTwo />;
      case 3:
        return <ComponentThree />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      <div className="flex lg:lex-row sm:space-x-4 lg:p-6 p-6 mb-4 lg:justify-center">
        <button
          className={`flex flex-col items-center mb-4 sm:mb-0 w-[200px] ${
            activeComponent === 1 ? "text-yellow-500" : "text-gray-500"
          }`}
          onClick={() => setActiveComponent(1)}
        >
          <Bus className="w-20 h-20" />
          <span className="text-lg">Zify Van</span>
        </button>
        <button
          className={`flex flex-col items-center mb-4 lg:mb-0  w-[200px] ${
            activeComponent === 2 ? "text-yellow-500" : "text-gray-500"
          }`}
          onClick={() => setActiveComponent(2)}
        >
          <BusFront className="w-20 h-20" />
          <span className={`text-lg `}>Zify Bus</span>
        </button>
        <button
          className={`flex flex-col items-center w-[200px] ${
            activeComponent === 3 ? "text-yellow-500" : "text-gray-500"
          }`}
          onClick={() => setActiveComponent(activeComponent)} // Uncommented the onClick handler
        >
          <Crown className="w-20 h-20" />
          <span className="text-lg">Zify Premium</span>
        </button>
      </div>
      <div>{renderComponent()}</div>
    </div>
  );
};

export default ShowComponent;
