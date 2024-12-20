const prisma = require("../prisma");

const seed = async () => {
  // TODO: Create Customers, Restaurants and Reservations

  const createCustomers = async () => {
    const customers = [
      { name: "Dakota" },
      { name: "Chris" },
      { name: "Gus" },
      { name: "Justin" },
    ];
    await prisma.customer.createMany({ data: customers });
  };

  const createRestaurants = async () => {
    const restaurants = [
      { name: "The Garage" },
      { name: "Sunrise" },
      { name: "Shed" },
    ];
    await prisma.restaurant.createMany({ data: restaurants });
  };

  const createReservations = async () => {
    const reservations = [
      {
        customerId: 1,
        restaurantId: 1,
        date: new Date("2024-12-18"),
        partyCount: 3,
      },
      {
        customerId: 2,
        restaurantId: 2,
        date: new Date("2024-12-18"),
        partyCount: 2,
      },
      {
        customerId: 3,
        restaurantId: 3,
        date: new Date("2024-12-18"),
        partyCount: 1,
      },
    ];
    await prisma.reservation.createMany({ data: reservations });
  };

  await createCustomers();
  await createRestaurants();
  await createReservations();
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
