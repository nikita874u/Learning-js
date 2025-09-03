// Object and this keyword

const animal = {
  name: "Sheru",
  haiKon: "Dog",
  kartaKyaHai: "Bhonkta hai",
  intro: function () {
    return this.name + " Ek " + this.haiKon + " hai. Wo " + this.kartaKyaHai;
  },
};

// Here name, haiKon, kartaKyaHai are properties and intro is a method
console.log("Animal ke bare me batao? ", animal.intro());
