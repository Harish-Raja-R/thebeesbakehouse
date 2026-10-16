import { PrismaClient } from '@prisma/client'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'

const connectionString = `${process.env.DATABASE_URL}`

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('Start seeding...')

  // Upsert Category
  const categoryCakes = await prisma.category.upsert({
    where: { slug: 'signature-cakes' },
    update: {},
    create: {
      name: 'Signature Cakes',
      slug: 'signature-cakes',
      description: 'Our most loved classic creations.',
    },
  })

  // Products
  const products = [
    {
      name: 'Classic Vanilla Berry Bento',
      slug: 'classic-vanilla-berry-bento',
      description: 'A delicate 4-inch vanilla sponge layered with fresh mixed berry compote and light vanilla buttercream.',
      basePrice: 650,
      categoryId: categoryCakes.id,
      images: ['https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=600&auto=format&fit=crop'],
      isEggless: true,
      isAvailable: true,
      isFeatured: true,
    },
    {
      name: 'Rich Chocolate Truffle',
      slug: 'rich-chocolate-truffle',
      description: 'Decadent, dark, and intensely chocolatey. Layers of moist chocolate sponge with ganache.',
      basePrice: 1200,
      categoryId: categoryCakes.id,
      images: ['https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop'],
      isEggless: true,
      isAvailable: true,
      isFeatured: true,
    },
    {
      name: 'Signature Macaron Box',
      slug: 'signature-macaron-box',
      description: 'Assorted box of 6 delicate French macarons with our signature fillings.',
      basePrice: 850,
      categoryId: categoryCakes.id,
      images: ['https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=600&auto=format&fit=crop'],
      isEggless: false,
      isAvailable: true,
      isFeatured: true,
    }
  ]

  for (const p of products) {
    const product = await prisma.product.upsert({
      where: { slug: p.slug },
      update: {},
      create: p,
    })
    console.log(`Created product with id: ${product.id}`)
  }

  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
