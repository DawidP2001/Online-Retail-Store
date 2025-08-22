const MegaMenu = () => {
    return (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg p-6 grid grid-cols-4 gap-6">
        <div>
            <h3 className="text-lg font-semibold mb-2">Category 1</h3>
            <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Subcategory 1</a></li>
            <li><a href="#" className="hover:underline">Subcategory 2</a></li>
            <li><a href="#" className="hover:underline">Subcategory 3</a></li>
            </ul>
        </div>
        <div>
            <h3 className="text-lg font-semibold mb-2">Category 2</h3>
            <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Subcategory 1</a></li>
            <li><a href="#" className="hover:underline">Subcategory 2</a></li>
            <li><a href="#" className="hover:underline">Subcategory 3</a></li>
            </ul>
        </div>
        <div>
            <h3 className="text-lg font-semibold mb-2">Category 3</h3>
            <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Subcategory 1</a></li>
            <li><a href="#" className="hover:underline">Subcategory 2</a></li>
            <li><a href="#" className="hover:underline">Subcategory 3</a></li>
            </ul>
        </div>
        <div>
            <h3 className="text-lg font-semibold mb-2">Category 4</h3>
            <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Subcategory 1</a></li>
            <li><a href="#" className="hover:underline">Subcategory 2</a></li>
            <li><a href="#" className="hover:underline">Subcategory 3</a></li>
            </ul>
        </div>
        </div>
    )
};

export default MegaMenu;