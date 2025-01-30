function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "bharath" });
    }, 1000);
  });
}

fetchData().then((value) => {
  console.log(value);
});
