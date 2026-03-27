class AddPatientPage {
  constructor(page) {
    this.page = page;

    // ===== Dialog =====
    this.dialog = page.locator('[role="dialog"]');
    this.newPatientBtn = page.getByRole("button", { name: "New Patient" });
    this.dialogTitle = page.getByText("Add Patient Details");
    this.submitBtn = page.getByRole("button", { name: "Submit" });
    this.closeBtn = page.getByRole("button", { name: /close/i });

    // ===== Mandatory Fields =====
    this.firstName = page.getByPlaceholder("first name");
    this.lastName = page.getByPlaceholder("last name");
    this.email = page.getByPlaceholder("email");
    this.contact = page.getByPlaceholder("Contact number");
    this.dob = page.locator("input[type='date']");
    this.weight = page.getByPlaceholder("Weight");

    // ===== Non-Mandatory Fields =====
    this.height = page.getByPlaceholder("Height");
    this.bmi = page.getByPlaceholder("BMI");
    this.temperature = page.getByPlaceholder("Temperature");
    this.sp = page.getByPlaceholder("SP");
    this.dp = page.getByPlaceholder("DP");

    // ===== Dropdowns =====
    this.allergyDropdown = page.locator('select[name="allergy"]');
    this.foodPreferenceDropdown = page.locator('select[name="foodPreference"]');
    this.cuisineDropdown = page.locator('select[name="cuisine"]');

    // ===== File Upload =====
    this.fileUpload = page.locator("input[type='file']");
    this.fileUploadText = page.locator('text=No file chosen');

    // ===== Date Picker =====
    this.dobField = page.getByPlaceholder("DOB");
    this.calendarPicker = page.locator('.react-datepicker');
    this.monthDropdown = page.locator('.react-datepicker__month-select');
    this.yearDropdown = page.locator('.react-datepicker__year-select');
    this.pageBody = page.locator('body');
  }

  dayCell(day) {
    return this.calendarPicker.locator(`.react-datepicker__day:text("${day}")`);
  }

  // =============================
  // ACTION METHODS
  // =============================

  async openDialog() {
    await this.newPatientBtn.click();
  }

  async submit() {
    await this.submitBtn.click();
  }

  async uploadFile(filePath) {
    if (filePath) {
      await this.fileUpload.setInputFiles(`test-data/${filePath}`);
    }
  }

  async clickDOB() {
    await this.dobField.click();
  }

  async selectDate(day, month, year) {
    await this.dobField.click();
    await this.monthDropdown.selectOption({ label: month });
    await this.yearDropdown.selectOption({ label: year.toString() });
    await this.dayCell(day).click();
  }

  async getDOBValue() {
    return await this.dobField.inputValue();
  }

  async clickOutsideCalendar() {
    await this.pageBody.click({ position: { x: 0, y: 0 } });
  }

  // =============================
  // FILL METHODS
  // =============================

  async fillMandatory(data) {
    if (data.firstName) await this.firstName.fill(data.firstName);
    if (data.lastName) await this.lastName.fill(data.lastName);
    if (data.email) await this.email.fill(data.email);
    if (data.contact) await this.contact.fill(data.contact);
    if (data.dob) await this.dob.fill(data.dob);
    if (data.weight) await this.weight.fill(data.weight);
  }

  async fillNonMandatory(data) {
    if (data.height) await this.height.fill(data.height);
    if (data.bmi) await this.bmi.fill(data.bmi);
    if (data.temperature) await this.temperature.fill(data.temperature);
    if (data.sp) await this.sp.fill(data.sp);
    if (data.dp) await this.dp.fill(data.dp);
  }

  async fillForm(data) {
    await this.fillMandatory(data);
    await this.fillNonMandatory(data);
  }

  // =============================
  // VISIBILITY CHECK METHODS
  // =============================

  async isDialogVisible() {
    return await this.dialog.isVisible();
  }

  async isSubmitButtonVisible() {
    return await this.submitBtn.isVisible();
  }

  async isSubmitButtonEnabled() {
    return await this.submitBtn.isEnabled();
  }

  async isMandatoryIndicatorPresent(field) {
    let placeholder;
    switch (field.toLowerCase()) {
      case 'firstname':
        placeholder = await this.firstName.getAttribute('placeholder');
        break;
      case 'lastname':
        placeholder = await this.lastName.getAttribute('placeholder');
        break;
      case 'email':
        placeholder = await this.email.getAttribute('placeholder');
        break;
      case 'contact number':
        placeholder = await this.contact.getAttribute('placeholder');
        break;
      case 'date of birth':
        placeholder = await this.dob.getAttribute('placeholder');
        break;
      case 'weight':
        placeholder = await this.weight.getAttribute('placeholder');
        break;
      default:
        throw new Error(`Unknown field: ${field}`);
    }
    return placeholder.includes('*');
  }

  async isNonMandatoryIndicatorPresent(field) {
    let placeholder;
    switch (field.toLowerCase()) {
      case 'height':
        placeholder = await this.height.getAttribute('placeholder');
        break;
      case 'bmi':
        placeholder = await this.bmi.getAttribute('placeholder');
        break;
      case 'temperature':
        placeholder = await this.temperature.getAttribute('placeholder');
        break;
      case 'sp':
        placeholder = await this.sp.getAttribute('placeholder');
        break;
      case 'dp':
        placeholder = await this.dp.getAttribute('placeholder');
        break;
      default:
        throw new Error(`Unknown field: ${field}`);
    }
    return !placeholder.includes('*');
  }

  async isFileUploadVisible() {
    return await this.fileUpload.isVisible();
  }

  async isCloseButtonVisible() {
    return await this.closeBtn.isVisible();
  }

  async isCloseButtonEnabled() {
    return await this.closeBtn.isEnabled();
  }

  async isCalendarVisible() {
    return await this.calendarPicker.isVisible();
  }

  async getUploadedFileName() {
    return await this.fileUploadText.textContent();
  }

  async navigateToAddPatientPage() {
    await this.openDialog();
  }
}

export default AddPatientPage;
