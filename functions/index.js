const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore()

// Set admin privilege on the user corresponding to uid.
admin.auth().setCustomUserClaims(uid, {admin: true}).then(() => {
  // The new custom claims will propagate to the user's ID token the
  // next time a new one is issued.
});
// Verify the ID token first.
admin.auth().verifyIdToken(idToken).then((claims) => {
  if (claims.admin === true) {
    // Allow access to requested admin resource.
  }
});

exports.addUserRole = functions.auth.user().onCreate(async (authUser) => {
  const customClaims = { employee: true };
  try {
    var _ = await employee.auth().setCustomUserClaims(authUser.uid, customClaims)

    return db.collection("roles").doc(authUser.uid).set({
      email: authUser.email,
      role: customClaims
    })

  } catch (error) {
    console.log(error)
  }
}

