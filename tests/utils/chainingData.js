export default class chainingData {

  static patientFirstName = '';
  static patientLastName = '';
  static patientEmail = '';
  static patientContactNo = '';

  static setPatientFirstName(fName) {
    this.patientFirstName = fName;
  }

  static setPatientLastName(lName) {
    this.patientLastName = lName;
  }

  static setPatientEmail(email) {
    this.patientEmail = email;
   }

  static setPatientContactNo(num) {
    this.patientContactNo = num;
   }

  static getPatientFirstName() {
    return this.patientFirstName;
  }

  static getPatientLastName() {
    return this.patientLastName;
  }

  static getPatientEmail() {
    return this.patientEmail;
  }

  static getPatientContactNo() {
    return this.patientContactNo;
  }

}


