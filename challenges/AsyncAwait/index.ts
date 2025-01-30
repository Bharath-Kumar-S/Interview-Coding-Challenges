function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "bharath" });
    }, 1000);
  });
}

(async () => {
  const data = await fetchData();
  console.log(data);
})();
