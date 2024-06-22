export default function Categories() {
    const categories = [
        { name: 'Smartphones', imagePath: '/images/iphones_category.png', imageUtilities: 'translate-y-5' },
        { name: 'Laptops', imagePath: '/images/laptops_category.png', imageUtilities: 'translate-y-4 scale-150 object-contain' },
        { name: 'Tablets', imagePath: '/images/tablets_category.png', imageUtilities: 'translate-y-5' },
        { name: 'TV & Home', imagePath: '/images/tv_category.png', imageUtilities: 'scale-75 translate-y-0' },
    ];
    return (
        <section
            id="categories"
            className="relative z-20 w-full px-4 py-12 bg-backgroundColor text-slate-100"
        >
            <div className="container mx-auto">
                <h2 className="text-5xl font-extrabold font-montserrat leading-[72px] text-center mb-5">
                    Categories
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-2 justify-items-center px-2">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="relative text-center min-w-[300px] sm:w-[16rem] hover:scale-105 transition duration-300 cursor-pointer"
                        >
                            <div className="absolute bottom-0 rounded-lg shadow-md bg-backgroundColor2 h-3/5 w-full transition duration-300"></div>
                            <div className="z-10 relative w-full h-60 overflow-hidden">
                                <img
                                    src={category.imagePath}
                                    alt={category.name + ' category'}
                                    className={`w-full h-full ${category.imageUtilities}`}
                                />
                            </div>
                            <div className="z-10 relative -mt-4 px-5 pb-4 transition duration-300 hover:text-primary">
                                <h3 className="w-full text-3xl font-semibold leading-[48px]">
                                    {category.name}
                                </h3>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
}