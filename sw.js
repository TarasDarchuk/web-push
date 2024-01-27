

// self.addEventListener('push', (event) => {
//   console.log("🚀 ~ self.addEventListener ~ event:", event)
//   self.registration.showNotification('Hello world!', options);
// });

self.addEventListener("push", async (event) => {
  console.log("🚀 ~ self.addEventListener ~ event:", event)
  // const { title, body } = await event.data;
  // console.log("🚀 ~ self.addEventListener ~ body:", body)
  // console.log("🚀 ~ self.addEventListener ~ title:", title)
  self.registration.showNotification('Hello 4el', {
  // self.registration.showNotification(event.data.text(), {
  });
});