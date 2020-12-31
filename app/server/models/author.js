class Author {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }

  get info() {
    return {
      name: this.name,
      lastname: this.lastname,
    };
  }
}

module.exports = { Author };
