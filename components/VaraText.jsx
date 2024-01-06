import { useEffect } from "react";
import Vara from "vara";

export default function VaraText() {
    useEffect(() => {
      var vara = new Vara(
        "#vara-container",
        "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
        [
          {
            text: "Lawe Sosah",
            fontSize: 60,
            strokeWidth: 0.7,
            color:"white",
          
            // textAlign:center
          },
        ]
      );
    }, []);
  
    return <div id="vara-container" className="z-[20] w-[450px] whitespace-nowrap"></div>;
  }