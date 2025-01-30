function fetachData(callback: (data: string) => void) {
  setTimeout(() => {
    callback("data");
  }, 3000);
}

fetachData((data) => {
  console.log(data);
});
