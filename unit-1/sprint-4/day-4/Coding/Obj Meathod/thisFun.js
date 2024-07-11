let rectangle = {
  l: 10,
  w: 20,
  area: function () {
    console.log(2 * (this.l + this.w));
  },
  perameter: function () {
    console.log(this.l * this.w);
  },
};
rectangle.area(5, 5);
rectangle.perameter(5, 5);
