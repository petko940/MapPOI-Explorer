import { useState } from 'react';
import POITypes from '../helpers/POITypes';

const POITypeSelector = ({
    onTypeChange,
    markers,
    selectedMainCategory,
    setSelectedMainCategory,
}) => {
    // const [selectedMainCategory, setSelectedMainCategory] = useState(null);
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
            {!selectedMainCategory && (
                <div className="flex flex-wrap space-x-2 mb-4">
                    {Object.keys(POITypes).map((category) => (
                        <button
                            key={category}
                            onClick={() => handleMainCategoryClick(category)}
                            className={`p-2 border rounded mb-2 text-white capitalize ${selectedMainCategory === category
                                ? 'bg-green-500'
                                : 'bg-blue-500'
                                }`}
                            disabled={markers.length === 0}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            )}

            {selectedMainCategory && (
                <div>
                    <div className="mb-4">
                        <button
                            onClick={() => handleMainCategoryClick(selectedMainCategory)}
                            className="p-2 border rounded bg-green-500 text-white mb-2 capitalize"
                        >
                            {selectedMainCategory}
                        </button>
                    </div>

                    <div className="flex flex-wrap space-x-2">
                        {POITypes[selectedMainCategory].map((subCategory) => (
                            <button
                                key={subCategory}
                                onClick={() => handleSubCategoryClick(subCategory)}
                                className={`p-2 border rounded mb-2 text-white capitalize ${selectedSubCategory === subCategory
                                    ? 'bg-green-500'
                                    : 'bg-blue-500'
                                    }`}
                                disabled={markers.length === 0}
                            >
                                {subCategory}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default POITypeSelector;

