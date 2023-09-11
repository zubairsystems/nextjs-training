export default function PropertyCard({property}: any){
    return (
        <div className="flex flex-col">
            <div>
                <img className="rounded-lg" src={property.image} alt="" />
            </div>
            <h1 className="mt-4 text-2xl font-bold hover:text-myblue cursor-pointer">{property.name}</h1>
            <div className="flex items-end">
                <svg className="stroke-current w-6 h-6 text-myblue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p className="mt-2 text-slate-400 hover:text-myblue cursor-pointer">{property?.address}</p>
            </div>
            <p className="mt-2 text-xl hover:text-myblue cursor-pointer">{property.type.name}</p>
            <div className="mt-2 flex justify-between items-center">
                <p className="text-2xl">$<span>540,000</span></p>
                <div className="flex">
                    <svg className="stroke-current w-6 h-6 text-myblue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    <span className="mx-2">{property.number_of_bedrooms}</span>
                    <svg className="stroke-current w-6 h-6 text-myblue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                    <span className="mx-2">{property.number_of_bathrooms}</span>
                    <svg className="stroke-current w-6 h-6 text-myblue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                    <span className="mx-2">{property.area} sq ft</span>
                </div>
            </div>
        </div>
    );
}