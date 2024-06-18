"use server";

import { db } from "@/db";
import { OrderStatus } from "@prisma/client";

export const changeOrderStatus = async ({
  id,
  status,
}: {
  id: string;
  status: OrderStatus;
}) => {
  await db.order.update({
    where: { id },
    data: {
      status,
    },
  });
};
