/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://ai-interview-mocker_owner:npg_knuE1Do8vAMK@ep-delicate-art-a4trfypp-pooler.us-east-1.aws.neon.tech/ai-interview-mocker?sslmode=require",
  },
};