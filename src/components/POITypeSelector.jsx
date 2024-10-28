import { useState } from 'react';
import POITypes from '../helpers/POITypes';

const POITypeSelector = ({
    onTypeChange,
    markers,
    selectedMainCategory,
    setSelectedMainCategory,
}) => {
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);

    const handleMainCategoryClick = (category) => {
        if (selectedMainCategory === category) {
            setSelectedMainCategory(null);
            setSelectedSubCategory(null);
            onTypeChange(null);
        } else {
            setSelectedMainCategory(category);
            setSelectedSubCategory(null);
            onTypeChange(null);
        }
    };

    const handleSubCategoryClick = (subCategory) => {
        if (selectedSubCategory === subCategory) {
            setSelectedSubCategory(null);
            onTypeChange(null);
        } else {
            setSelectedSubCategory(subCategory);
            onTypeChange(`${selectedMainCategory}=${subCategory}`);
        }
    };

    return (
        <div>
            <div className="flex flex-wrap justify-center space-x-2">
                {Object.keys(POITypes).map((category) => (
                    <button
                        key={category}
                        onClick={() => handleMainCategoryClick(category)}
                        className={`p-2 border rounded mb-2 text-white capitalize ${markers.length === 0
                            ? 'bg-gray-400 cursor-not-allowed'
                            : selectedMainCategory === category
                                ? 'bg-green-500' : selectedMainCategory
                                    ? 'bg-gray-400'
                                    : 'bg-blue-500'
                            }`}
                        disabled={markers.length === 0}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {selectedMainCategory && (
                <div className="flex flex-wrap justify-center space-x-2">
                    {POITypes[selectedMainCategory].map((subCategory) => (
                        <button
                            key={subCategory}
                            onClick={() => handleSubCategoryClick(subCategory)}
                            className={`p-2 border rounded mb-2 text-white capitalize ${selectedSubCategory === subCategory ? 'bg-green-500' : 'bg-blue-500'
                                }`}
                        >
                            {subCategory}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default POITypeSelector;
