
import { PrismaClient } from '.prisma/client'

const prisma = new PrismaClient();

const fetchProperty = async (id: string) => {
    const property = await prisma.property.findUnique({
        where: {
            id: parseInt(id)
        }
    });
    return property;
  }

export default async function PropertySingle({ params }: { params: { propertyId: string } }){
    const property = await fetchProperty(params.propertyId);
    console.log(property);
    return (
        <div className="m-8">
            <div className="relative mx-32">
                <img className="w-full rounded-xl" src={property?.image} alt="" />
                <div className="absolute bottom-32 left-8 flex items-center gap-4">
                    <span className="text-lg bg-white px-4 py-2 rounded-full">{property?.status == 'RENT' ? 'For Rent':'For Sale'}</span>
                    {property?.is_featured && <span className="text-lg bg-myblue text-white px-4 py-2 rounded-full">Featured</span>}
                </div>
                <div className="absolute bottom-20 left-8 flex items-center gap-4">
                    <span className="text-2xl text-white font-bold">{property?.name}</span>
                    <p className="text-xl bg-myblue text-white px-4 py-2 rounded-full">$ {property?.price}</p>
                </div>
                <div className="absolute bottom-8 left-8 flex items-end">
                    <svg className="stroke-current w-6 h-6 text-myblue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <p className="mt-2 text-white hover:text-myblue cursor-pointer">{property?.address}</p>
                </div>
            </div>
            <div className="mx-32 my-8 grid grid-cols-7 gap-4">
                {property?.images?.map(image => (
                        <img className="rounded-xl" src={image} alt="image" />
                ))}
            </div>
            <h1 className="mx-32 text-2xl font-bold">Overview</h1>
            <div className="mx-32 my-8 flex gap-4">
                <div className="bg-lightblue px-4 py-2 rounded-md">
                    <p>Bedrooms</p>
                    <div className="flex items-end">
                        <svg className="stroke-current w-6 h-6 text-myblue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        <p className="ml-2">{property?.number_of_bedrooms}</p>
                    </div>
                </div>
                <div className="bg-lightblue px-4 py-2 rounded-md">
                    <p>Bathrooms</p>
                    <div className="flex items-end">
                        <svg className="stroke-current w-6 h-6 text-myblue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        </svg>
                        <p className="ml-2">{property?.number_of_bedrooms}</p>
                    </div>
                </div>
                <div className="bg-lightblue px-4 py-2 rounded-md">
                    <p>Area</p>
                    <div className="flex items-end">
                        <svg className="stroke-current w-6 h-6 text-myblue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                        <p className="ml-2">{property?.number_of_bedrooms}</p>
                    </div>
                </div>
            </div>

            <h1 className="mx-32 text-2xl font-bold">Description</h1>
            <p className="mx-32 my-4">
                {property?.desc}
            </p>
            
        </div>
    );
}