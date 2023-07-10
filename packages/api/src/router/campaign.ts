import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const CampaignRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.campaign.findMany({ orderBy: { id: "desc" } });
  }),
  byID: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.campaign.findFirst({ where: { id: input.id } });
    }),
  create: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        url: z.string(),
        subject: z.string(),
        previewText: z.string(),
        senderName: z.string(),
        senderEmail: z.string(),
        createdAt: z.date().optional(),
        updatedAt: z.date().optional(),
        leads: z.any().optional(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.campaign.create({ data: input });
    }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.campaign.delete({ where: { id: input } });
  }),
});
