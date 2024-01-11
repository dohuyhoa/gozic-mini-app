import Config from "../config";

class Feedback {
    //data hien thi du lieu
    //  -> Phan feedback thiet ke
    //  -> de tu chen SDT trong Zalo
    firstname = ""
    lastname = ""
    phone_number = ""
    email = ""
    subject = ""
    message = ""

    //Tu dong goi trang tiep theo -> add du lieu vao
    callApi() {
        let formData = {
            "firstname": this.firstname,
            "lastname": this.lastname,
            "phone_number": this.phone_number,
            "email": this.email,
            "subject": this.subject,
            "message": this.message
        }
        // //console.log(formData)

        Config.postContent(Config.API_FEEDBACK, formData);
    }
}

const feedback = new Feedback();

export default feedback;