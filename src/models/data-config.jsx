import Config from "../config";
import Utility from "../utility";
import api from 'zmp-sdk';

class DataConfig {
    plugin = {}

    //Rat nhieu du lieu tu server tra ve -> lien quan toi text
    //thanh toan, banner, sdt, ...

    async callApi() {
        if(!Utility.isEmpty(this.plugin)) return this.plugin;

        let data = await Config.getData(Config.API_DATA_CONFIG);
        
        if(data.banner != undefined) {
            data.banner = data.banner.split(';')
        }

        this.plugin = data;
        //console.log(this.plugin)

        return this.plugin;
    }

    updateTheme() {
        api.setNavigationBarTitle({
            title: this.plugin.title,
            success: (res) => {
              // xử lý khi gọi api thành công
              //console.log(res);
            },
            fail: (error) => {
              // xử lý khi gọi api thất bại
              //console.log(error);
            }
          });
        // api.setNavigationBarColor({
        //   color: this.plugin.appColor,
        //   statusBarColor: this.plugin.appColor,
        //   textColor: this.plugin.textColor != null?this.plugin.textColor:'white',
        //   success: (res) => {
        //     // xử lý khi gọi api thành công
        //   },
        //   fail: (error) => {
        //     // xử lý khi gọi api thất bại
        //     //console.log(error);
        //   }
        // });
    }
}

const dataConfig = new DataConfig();

export default dataConfig;