module.exports = function (firstName, lastName, emailAddress) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.nameAndEmail = function () {
        return this.firstName + ' ' + this.lastName + ' ' + this.emailAddress;
    }
}