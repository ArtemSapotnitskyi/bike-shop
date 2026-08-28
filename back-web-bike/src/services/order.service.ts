import { OrderStatus, PaymentStatus } from "../generated/prisma/client.js";
import prisma from "../lib/prisma.js";
import { z } from "zod";
import { createOrderSchema } from "../validators/order.schema.js";

type CreateOrderInput = z.infer<typeof createOrderSchema>;

//Public
export const getPublicOrders = async (userId: string) => {
  return await prisma.order.findMany({
    where: { idUser: userId },
    select: {
      id: true,
      totalAmount: true,
      status: true,
      createAt: true,

      orderItems: {
        select: {
          priceAtPurchase: true,
          quantity: true,

          bike: {
            select: {
              name: true,
              cover: {
                select: {
                  url: true,
                },
              },
            },
          },
        },
      },
    },
    orderBy: {
      createAt: "desc",
    },
  });
};

export const getPublicOrderById = async (orderId: string, userId: string) => {
  return await prisma.order.findFirst({
    where: { id: orderId, idUser: userId },

    select: {
      id: true,
      totalAmount: true,
      status: true,
      createAt: true,

      address: {
        select: {
          country: true,
          city: true,
          street: true,
          phone: true,
        },
      },

      orderItems: {
        select: {
          priceAtPurchase: true,
          quantity: true,

          bike: {
            select: {
              name: true,
              subtitle: true,
              cover: {
                select: {
                  url: true,
                },
              },
            },
          },
        },
      },
    },
  });
};

//Admin
export const getAdminAllOrders = async () => {
  return await prisma.order.findMany({
    select: {
      id: true,
      totalAmount: true,
      status: true,
      createAt: true,
      user: {
        select: {
          name: true,
          surname: true,
          email: true,
          _count: {
            select: {
              orders: true,
            },
          },
        },
      },

      address: {
        select: {
          country: true,
          city: true,
          street: true,
          phone: true,
        },
      },

      payment: {
        select: {
          idTransaction: true,
          status: true,
        },
      },

      orderItems: {
        select: {
          priceAtPurchase: true,
          quantity: true,

          bike: {
            select: {
              name: true,
              cover: {
                select: {
                  url: true,
                },
              },
            },
          },
        },
      },
    },
  });
};

export const getAdminOrderById = async (id: string) => {
  return await prisma.order.findUnique({
    where: { id },
    select: {
      id: true,
      totalAmount: true,
      status: true,
      createAt: true,

      user: {
        select: {
          name: true,
          surname: true,
          email: true,
        },
      },

      address: {
        select: {
          country: true,
          city: true,
          street: true,
          phone: true,
        },
      },

      orderItems: {
        select: {
          priceAtPurchase: true,
          quantity: true,

          bike: {
            select: {
              name: true,
              subtitle: true,
              cover: {
                select: {
                  url: true,
                },
              },
            },
          },
        },
      },

      payment: {
        select: {
          idTransaction: true,
          status: true,
        },
      },
    },
  });
};

//CRUD
export const create = async (idUser: string, data: CreateOrderInput) => {
  //Here we get the id of all the bikes in the order
  const bikesId = data.items.map((item) => item.idBike);
  //Let's go to the base and get these bikes (to get their real prices)
  const bikesIdDb = await prisma.bike.findMany({
    where: { id: { in: bikesId } },
    //Here we get price
    include: { bikeInfos: true },
  });

  let totalAmount = 0;

  //Bikes Data Array
  const orderItemsData = data.items.map((item) => {
    //Checking ID Bike in Order with ID Bike in DB
    const bike = bikesIdDb.find((b) => {
      b.id === item.idBike;
    });

    if (!bike) {
      throw new Error(`Bike with id ${item.idBike} not found`);
    }

    //Get Arr bikeInfos from the 0 element
    const realPrice = bike.bikeInfos[0]?.price || 0;

    totalAmount += realPrice * item.quantity;

    //Return object in the Prisma forma
    return {
      quantity: item.quantity,
      priceAtPurchase: realPrice,
      bike: {
        connect: { id: item.idBike }, //We connect the item to the bike
      },
    };
  });

  //Returned to Prisma the filtered data
  return await prisma.order.create({
    data: {
      totalAmount,
      user: {
        connect: {
          id: idUser,
        },
      },

      address: {
        create: {
          country: data.address.country,
          city: data.address.city,
          street: data.address.street,
          phone: data.address.phone,
          user: {
            connect: { id: idUser },
          },
        },
      },

      orderItems: {
        create: orderItemsData,
      },
    },
  });
};

export const updateStatus = async (id: string, status: OrderStatus) => {
  return await prisma.order.update({
    where: { id },
    data: {
      status,
    },
  });
};

export const updatePayment = async (id: string, status: PaymentStatus) => {
  return await prisma.order.update({
    where: { id },
    data: {
      payment: {
        update: {
          status,
        },
      },
    },

    select: {
      id: true,
      payment: true,
    },
  });
};
