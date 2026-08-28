import { Router } from "express";
import userRouters from "./users.routers.js";
import { routerPublicBike, routerAdminBike } from "./bike.routers.js";
import { routerPublicBrand, routerAdminBrand } from "./brand.router.js";
import { routerPublicType, routerAdminType } from "./type.router.js";
import {
  routerPublicReaction,
  routerAdminReaction,
} from "./reaction.router.js";

const rootRouter = Router();

// Public
rootRouter.use("/v1/users", userRouters);
rootRouter.use("/v1/bikes", routerPublicBike);
rootRouter.use("/v1/brands", routerPublicBrand);
rootRouter.use("/v1/types", routerPublicType);
rootRouter.use("/v1/comments", routerPublicReaction);

// Admin
rootRouter.use("/v1/admin/bikes", routerAdminBike);
rootRouter.use("/v1/admin/brands", routerAdminBrand);
rootRouter.use("/v1/admin/types", routerAdminType);
rootRouter.use("/v1/admin/comments", routerAdminReaction);

export default rootRouter;
