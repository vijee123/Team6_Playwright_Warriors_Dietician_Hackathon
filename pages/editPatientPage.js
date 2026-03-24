export default class EditPatientPage{

   constructor(page){
    if(!page) throw new error ('Page undefined..');
    this.page = page;
    this.pageTitle = page.getByText('Edit Patient Details');
   }


}