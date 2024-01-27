const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BBZY7Q3KEtZArAAWMLi_qzWHbH4vAoqPpIXnRhmlUaw0PVs1Kt_2fgLhuaVI5i8MWASBKx3d6W6UoH2U3qChw9U',
  privateKey: 'CZtf_JUxmXkCKbzwaKedPPO9BFC99U2rk-GUYDbYAa8'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
// const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/chY3dk5JrBg:APA91bEezHkLOagchBgh3tJLIVaf6cD_JUFcPWRc5_fMfvZSJy0lqptZbnTS_qTeNcd-o5W7An6g4yedogtrkpp2z4amYIlXXPnJNjIPy7ZLAMq6onfeCTJmgXlcYzK_gksRys_e-UUX","expirationTime":null,"keys":{"p256dh":"BIX_xTmYI34L9881uQd0vmtblck6dKwWiOs7oOP9e76_230OHoLTfhCG-_-TKM911E18CVlojW_mvXMIvKqOPBY","auth":"ZhldZIzW_Fnqew7km_8HWQ"}}

// const pushSubscription = {"endpoint":"https://web.push.apple.com/QHtDPuahlkoEQXaTaDcMMxIumD2SpcOTPphqGbaBUhsbcNKfwr3qrwcE_iCy1oW0OCjiwx4TfTetqxgGHzrzpVtc6TseleqLFKuij-fUORE8YBLRZvdJ-_gm-q2agYqyqa9ev7vzjNvlJu3HGLX0bBxtGYCQsxgOzFd34D8Rz9M","keys":{"p256dh":"BCl3vq5srbWTSxDEYCWz3LcCSY2RzMnkWV61mO3zWPaxwNgm9GsRZeP3hT1p_kwm1-x7NYkPvv6CZacIG-F9MHM","auth":"33c0JzpOjlJ2z3_BmCWaZA"}}
// webpush.sendNotification(pushSubscription, 'Your Push Payload Text');

const pushSubscription = {"endpoint":"https://web.push.apple.com/QHtDPuahlkoEQXaTaDcMMxIumD2SpcOTPphqGbaBUhsbcNKfwr3qrwcE_iCy1oW0OCjiwx4TfTetqxgGHzrzpVtc6TseleqLFKuij-fUORE8YBLRZvdJ-_gm-q2agYqyqa9ev7vzjNvlJu3HGLX0bBxtGYCQsxgOzFd34D8Rz9M","keys":{"p256dh":"BCl3vq5srbWTSxDEYCWz3LcCSY2RzMnkWV61mO3zWPaxwNgm9GsRZeP3hT1p_kwm1-x7NYkPvv6CZacIG-F9MHM","auth":"33c0JzpOjlJ2z3_BmCWaZA"}}
webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
