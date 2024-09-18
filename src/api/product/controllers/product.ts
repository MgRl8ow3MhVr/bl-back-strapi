/**
 * product controller
 */

import { factories } from "@strapi/strapi";
import { generateRandomString, generateNumber } from "./product-utils";

export default factories.createCoreController(
  "api::product.product",
  ({ strapi }) => ({
    async find(ctx) {
      console.log("in custom");
      const result = await super.find(ctx);

      return result;
    },
    async addrandom(ctx) {
      await this.validateQuery(ctx);
      const { num_to_add } = ctx.request.body;
      console.log("to add");
      console.log(num_to_add);

      // now update

      try {
        if (
          typeof num_to_add !== "number" ||
          (num_to_add as number) > Number(process.env.MAX_RANDOM_PROD)
        ) {
          throw new Error("to high num");
        }
        for (let i = 0; i < num_to_add; i++) {
          const result = await strapi.entityService.create(
            "api::product.product",
            {
              data: {
                title: generateRandomString(5, 5),
                description: generateRandomString(5, 10),
                state: "good", // randomize this
                price: generateNumber(),
                // missing the photo url
              },
            }
          );
        }
        return ctx.send({
          message: `ok ${num_to_add} product have been created`,
        });
      } catch (e) {
        return ctx.throw(500, e.message);
      }
    },
    async deleteAll(ctx) {
      try {
        // Use Strapi's entity service to delete all entries
        await strapi.entityService.deleteMany("api::product.product", {});
        ctx.send({ message: "All articles have been deleted successfully" });
      } catch (error) {
        ctx.throw(500, "Failed to delete all articles");
      }
    },
  })
);
