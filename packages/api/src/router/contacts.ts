import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const LeadsContactRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.lead.findMany({ orderBy: { id: "desc" } });
  }),
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.lead.findFirst({ where: { id: input.id } });
    }),
  create: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().min(1),
        emailAddress: z.string().email(),
        vip: z.boolean(),
        subscribed: z.boolean(),
        Campaign: z.any().optional(),
        campaignId: z.string().optional(),
        createdAt: z.date(),
        updatedAt: z.date(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.lead.create({ data: input });
    }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.lead.delete({ where: { id: input } });
  }),
});
