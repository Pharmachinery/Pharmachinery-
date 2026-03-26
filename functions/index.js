const functions = require("firebase-functions");

exports.createUser = functions.https.onCall(async (data, context) => {
  try {
    return {
      success: true,
      message: "Function works",
      received: data || null,
    };
  } catch (error) {
    throw new functions.https.HttpsError(
      "internal",
      error.message || "Unknown error"
    );
  }
});