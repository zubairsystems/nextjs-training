import { PrismaClient } from '.prisma/client'
import Link from 'next/link';
import PropertyCard from '../components/PropertyCard';

const prisma = new PrismaClient();

const fetchProperties = async () => {
  const properties = await prisma.property.findMany({
    include: {
        type: true,
    },
  });
  return properties;
}

export default async function Properties(){
    const properties = await fetchProperties();
    console.log(properties);
    return (
        <main>
        <div className="m-8">
            <h1 className="text-3xl font-bold">
            All Properties
            </h1>
            <p>All Properties Around You</p>
        </div>
        <div className="m-8 grid grid-cols-3 gap-4">
            {
            properties && properties.map(property => (
                <Link href={`properties/${property.id}`}>
                    <PropertyCard property={property}/>
                </Link>
            ))
            }
            
        </div>
        </main>
        
    )
}