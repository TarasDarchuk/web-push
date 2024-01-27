

// self.addEventListener('push', (event) => {
//   console.log("🚀 ~ self.addEventListener ~ event:", event)
//   self.registration.showNotification('Hello world!', options);
// });

self.addEventListener("push", async (event) => {
  const { title, body } = await event.data.json();
  self.registration.showNotification(title, {
    body,
  });
});