import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET,
      cookieSecret: process.env.COOKIE_SECRET,
    }
  },
  modules: [
    {
      resolve: "@medusajs/medusa/fulfillment",
      options: {
        providers: [
          {
            resolve: "@medusajs/medusa/fulfillment-manual",
            id: "manual",
          },
          {
            resolve: "./src/modules/courier-fulfillment",
            id: "courier",
            options: {
              provider: process.env.COURIER_PROVIDER || "furgonetka",
              defaultService: process.env.COURIER_DEFAULT_SERVICE || "standard",
              defaultPackageWeightKg: Number(process.env.COURIER_DEFAULT_WEIGHT_KG || 1),
              defaultPackageLengthCm: Number(process.env.COURIER_DEFAULT_LENGTH_CM || 30),
              defaultPackageWidthCm: Number(process.env.COURIER_DEFAULT_WIDTH_CM || 25),
              defaultPackageHeightCm: Number(process.env.COURIER_DEFAULT_HEIGHT_CM || 5),
              senderName: process.env.COURIER_SENDER_NAME,
              senderEmail: process.env.COURIER_SENDER_EMAIL,
              senderPhone: process.env.COURIER_SENDER_PHONE,
              senderStreet: process.env.COURIER_SENDER_STREET,
              senderPostalCode: process.env.COURIER_SENDER_POSTAL_CODE,
              senderCity: process.env.COURIER_SENDER_CITY,
              senderCountry: process.env.COURIER_SENDER_COUNTRY || "pl",
            },
          },
        ],
      },
    },
  ],
})
