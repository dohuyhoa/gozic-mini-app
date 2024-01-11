import Config from "../config";
import myUserInfo from "../models/user-info";

class TimesheetValidate {
    //request
    AccessToken = ""
    ZaloId = ""
    longitude = ""
    latitude = ""

    //response
    status = 0
    msg = ''

    cacheData = null
    checkin = false

    async callApi() {
        if(this.cacheData != null) return

        let formData = {
            "AccessToken": myUserInfo.accessToken,
            "ZaloId": myUserInfo.uId,
            "longitude": this.longitude,
            "latitude": this.latitude,
        }
        // //console.log(formData)

        this.cacheData = await Config.fetchData(Config.API_TIMESHEET_VALIDATE, formData);
        this.status = this.cacheData.status;
        this.msg = this.cacheData.msg;
    }

    async callApiCheckin() {
        let formData = {
            "AccessToken": myUserInfo.accessToken,
            "ZaloId": myUserInfo.uId,
            "longitude": this.longitude,
            "latitude": this.latitude,
        }

        await Config.postContent(Config.API_TIMESHEET_CHECKIN, formData);
    }

    async callApiList() {
        let formData = {
            "AccessToken": myUserInfo.accessToken,
            "ZaloId": myUserInfo.uId
        }

        let data = await Config.fetchData(Config.API_TIMESHEET_LIST, formData);
        return data
    }
}

const tsValidate = new TimesheetValidate();

export default tsValidate;