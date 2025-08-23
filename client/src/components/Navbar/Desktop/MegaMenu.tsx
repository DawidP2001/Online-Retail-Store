type MegaMenuProps = {
    section: 'mens' | 'womens' | 'kids' | 'sale';
    className?: string;
};

// This contains the data for each section of the mega menu
const menuData = {
    mens: { 
        column1: {Title: "Edits", items: ["Nike", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes"] },
        column2: {Title: "Edits", items: ["Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes"] }, 
        column3: {Title: "Edits", items: ["Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes"] }, 
        column4: {Title: "Edits", items: ["Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes"] },
        column5: {Title: "Edits", items: ["Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes"] },
        column6: {Title: "Edits", items: ["Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes"] }
    },

    womens: { 
        column1: {Title: "Edits", items: ["Adidas", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes"] },
        column2: {Title: "Edits", items: ["Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes"] }, 
        column3: {Title: "Edits", items: ["Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes"] }, 
        column4: {Title: "Edits", items: ["Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes"] },
        column5: {Title: "Edits", items: ["Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes"] },
        column6: {Title: "Edits", items: ["Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes"] }
    },
    kids: { 
        column1: {Title: "Edits", items: ["Zeus", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes"] },
        column2: {Title: "Edits", items: ["Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes"] }, 
        column3: {Title: "Edits", items: ["Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes"] }, 
        column4: {Title: "Edits", items: ["Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes"] },
        column5: {Title: "Edits", items: ["Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes"] },
        column6: {Title: "Edits", items: ["Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes"] }
     },
    sale: { 
        column1: {Title: "Edits", items: ["Appolo", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes"] },
        column2: {Title: "Edits", items: ["Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes"] }, 
        column3: {Title: "Edits", items: ["Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes"] }, 
        column4: {Title: "Edits", items: ["Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes"] },
        column5: {Title: "Edits", items: ["Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes"] },
        column6: {Title: "Edits", items: ["Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes", "Shirts", "Pants", "Shoes"] }
     },
}

const MegaMenu: React.FC<MegaMenuProps> = ({ section, className }) => {
    console.log("MegaMenu section:", section); // Debugging line to check the section prop
    return (
        <div className={`mega-menu fixed top-15 left-0 w-full bg-white shadow-lg z-50${className ? ` ${className}` : ''}`}>
            <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-6 gap-4">
                {Object.entries(menuData[section]).map(([columnKey, columnData]) => (
                    <div key={columnKey}>
                        <h3 className="text-lg font-semibold mb-2">{columnData.Title}</h3>
                        <ul>
                            {columnData.items.map((item, index) => (
                                <li key={index} className="mb-1 hover:underline cursor-pointer">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MegaMenu;