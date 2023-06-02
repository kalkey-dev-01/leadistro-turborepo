import { authRouter } from "./router/auth";
import { MobileAuthRouter } from "./router/mobileAuth";
import { postRouter } from "./router/post";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  post: postRouter,
  auth: authRouter,
  mobileAuth: MobileAuthRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
