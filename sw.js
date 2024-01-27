self.addEventListener('push', (event) => {
  console.log("🚀 ~ self.addEventListener ~ event:", event)
  self.registration.showNotification('Hello world!', options);
});
