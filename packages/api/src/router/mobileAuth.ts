// import { MobileUser } from './../../../../node_modules/.prisma/client/index.d';
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const MobileAuthRouter = createTRPCRouter({
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.mobileUser.findFirst({ where: { id: input.id } });
    }),
  create: publicProcedure
    .input(
      z.object({
        id: z.string(),
        userName: z.string(),
        email: z.string().email(),
        emailVerified: z.boolean(),
        providerId: z.string(),
        photoUrl: z.string().url(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.mobileUser.create({
        data: {
          id: input.id,
          userName: input.userName,
          email: input.email,
          emailVerified: input.emailVerified,
          providerId: input.providerId,
          photoUrl: input.photoUrl,
        },
      });
    }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.post.delete({ where: { id: input } });
  }),
});
