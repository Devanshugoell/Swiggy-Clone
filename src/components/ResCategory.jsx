// single accordion item to map over the categories
import { ChevronUp, ChevronDown } from "lucide-react";
import CategoryItems from "./CategoryItems";
import { useState } from "react";

const ResCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(true);
  function handleClick() {
    setShowItems(!showItems);
  }
  return (
    <div className="mx-0 sm:mx-4 md:mx-7">
      {/* Accordion Header */}
      <div className="mt-3 sm:mt-4 mb-3 sm:mb-4 w-full bg-none shadow-xl p-4 sm:p-6 rounded-md">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-extrabold text-base sm:text-lg">
            {data?.title} &nbsp;({data?.itemCards?.length})
          </span>
          <span>
            {showItems ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </span>
        </div>

        {showItems && <CategoryItems items={data?.itemCards} />}
      </div>
    </div>
  );
};
export default ResCategory;
