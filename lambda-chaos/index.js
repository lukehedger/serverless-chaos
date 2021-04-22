const failureLambda = require("failure-lambda");

exports.handler = failureLambda(async () => {
  return {
    body: JSON.stringify({
      config: process.env.FAILURE_APPCONFIG_CONFIGURATION,
      message: "Hello from Lambda Chaos!",
    }),
    statusCode: 200,
  };
});
