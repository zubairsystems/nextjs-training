// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { STATUS, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  await prisma.type.deleteMany();
  await prisma.location.deleteMany();
  await prisma.agent.deleteMany();
  await prisma.property.deleteMany();

  await prisma.location.createMany({
    data: [{ name: "ottawa" }, { name: "toronto" }, { name: "niagara" }],
  });

  await prisma.type.createMany({
    data: [{ name: "Apartment" }, { name: "Office" }, { name: "Shop" }, { name: "Single Family" }, { name: "Villa" }],
  });

  const locations = await prisma.location.findMany();
  const types = await prisma.type.findMany();

  const ottawaLocationId =
    locations.find((location) => location.name === "ottawa")?.id || 1;
  const torontoLocationId =
    locations.find((location) => location.name === "toronto")?.id || 1;
  const niagaraLocationId =
    locations.find((location) => location.name === "niagara")?.id || 1;

  const apartmentTypeId =
    types.find((type) => type.name === "Apartment")?.id || 1;
  const officeTypeId =
    types.find((type) => type.name === "Office")?.id || 1;
  const shopTypeId =
    types.find((type) => type.name === "Shop")?.id || 1;
  const singleFamilyTypeId =
    types.find((type) => type.name === "Single Family")?.id || 1;
  const VillaTypeId =
    types.find((type) => type.name === "Villa")?.id || 1;

  await prisma.agent.createMany({
      data: [
        {
            name: "Melissa William",
            email: "meli@example.com",
            image: "https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/Melissa-William-300x300.jpg",
            phone: "1-222-333-4444",
            about: "Melissa William is an accomplished and dedicated real estate professional known for her exceptional service and unwavering commitment to her clients. With a passion for helping individuals and families find their dream homes, Melissa brings a wealth of experience and expertise to every transaction.",
        },
        {
            name: "Melissa William 2",
            email: "meli2@example.com",
            image: "https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/Melissa-William-300x300.jpg",
            phone: "2-222-333-4444",
            about: "Melissa William 2 is an accomplished and dedicated real estate professional known for her exceptional service and unwavering commitment to her clients. With a passion for helping individuals and families find their dream homes, Melissa brings a wealth of experience and expertise to every transaction.",
        }
      ]
  });

  await prisma.property.createMany({
    data: [
      {
        name: "Vivaan - fine Indian",
        price: 5400,
        number_of_bedrooms: 3,
        number_of_bathrooms: 4,
        area: 3800,
        is_featured: true,
        address: "random address",
        status: STATUS.RENT,
        image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/1/32109459.jpg",
        desc:
          "Vivaan is Modern Indian Cuisine serving dishes from different regions of India. We carefully select our ingredients and use them to make authentic Indian recipes and our chef puts his modern flair and twists to the dishes.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/32109461.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32459786.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32484701.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32484708.jpg",
        ],
        location_id: ottawaLocationId,
        type_id: shopTypeId,
        agent_id: 1,
      },

      {
        name: "Vivaan - fine Indian -2",
        price: 2400,
        number_of_bedrooms: 5,
        number_of_bathrooms: 4,
        area: 2800,
        is_featured: false,
        address: "random address - 2",
        status: STATUS.SALE,
        image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/1/32109459.jpg",
        desc:
          "Vivaan is Modern Indian Cuisine serving dishes from different regions of India. We carefully select our ingredients and use them to make authentic Indian recipes and our chef puts his modern flair and twists to the dishes.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/32109461.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32459786.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32484701.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32484708.jpg",
        ],
        location_id: ottawaLocationId,
        type_id: shopTypeId,
        agent_id: 2,
      },
      
    ],
  });
  res.status(200).json({ name: "hello" });
}
