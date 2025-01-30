const object = {
  value: 42,
  getValue: function () {
    return this.value;
  },
  //   getValueArrow: () => {
  //     return this.value;
  //   },
};

console.log(object.getValue()); // 42
