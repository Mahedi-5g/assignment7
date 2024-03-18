const Banner = () => {
    return (
        <div className="mt-7 mb-12">
            <div className="hero min-h-screen rounded-3xl" style={{  backgroundImage: 'url(https://i.ibb.co/mTVp82m/Rectangle-1.jpg)' }}>
                <div className=" "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-slate-50">Welcome to Flavor Delight!</h1>
                        <p className="mb-5 text-slate-50">Discover a world of culinary delights with our exquisite recipes.</p>
                        <button className="btn btn-success mr-3 text-white">Explore Now</button>
                        <button className="btn glass text-white">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;