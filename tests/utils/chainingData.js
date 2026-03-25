export default class chainingData{

constructor(page) {
    this.page = page;
    this.patientData = {
      firstName  : '',
      lastName   : '',
      email      : '',
      contactNo  : '',
    };
  }


    set patientFirstName(value) {
    this.patientData.firstName = value;
  }

  set patientLastName(value) {
    this.patientData.lastName = value;
  }

  set patientEmail(value) {
    this.patientData.email = value;
  }

  set patientContactNo(value) {
    this.patientData.contactNo = value;
  }

  get patientFirstName() {
    return this.patientData.firstName;
  }

  get patientLastName() {
    return this.patientData.lastName;
  }

  get patientEmail() {
    return this.patientData.email;
  }

  get patientContactNo() {
    return this.patientData.contactNo;
  }

  // get patientData() {
  //   return this.patientData;
  // }



}