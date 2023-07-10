import { authRouter } from "./router/auth";
import { CampaignRouter } from "./router/campaign";
import { LeadsContactRouter } from "./router/contacts";
import { MobileAuthRouter } from "./router/mobileAuth";
import { postRouter } from "./router/post";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  post: postRouter,
  auth: authRouter,
  mobileAuth: MobileAuthRouter,
  leadRouter: LeadsContactRouter,
  campaignRouter: CampaignRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
