import Config from "../config";

class News {
    id = 0
    title = ""
    thumbnail = ""
    updated_at = ""
    updated_at2 = ""
    views = 0
    href = ""
    cat_name = ""
    fullname = ""
    category_href = ""
    content = ""

    //Tim kiem
    s = ""
    page = 0

    //cache
    cacheData = []
    isStop = false
    isLoading = false

    init(s, page) {
        this.s = s
        this.page = page
        this.isStop = false
        this.isLoading = false
    }

    reset() {
        this.s = ""
        this.page = 0
        this.isStop = false
        this.isLoading = false
    }

    async callApi() {
        if(this.isLoading) return this.cacheData;
        if(this.isStop) {
            return this.cacheData;
        }
        
        this.isLoading = true
        this.page++
        //console.log(Config.API_NEWS_LIST+"?ziczacapp=true&s="+this.s+"&page="+this.page)
        let data = await Config.getData(Config.API_NEWS_LIST+"?ziczacapp=true&s="+this.s+"&page="+this.page);
        
        //console.log("before check")
        if(data == null || data.length == 0) {
            this.isStop = true
            return this.cacheData;
        }

        for(let item of data) {
            this.cacheData.push(item)
        }
        
        this.isLoading = false
        return this.cacheData;
    }

    // callback = null;

    // setCallback(c) {
    //     this.callback = c;
    // }

    // updateState() {
    //     this.callback()
    // }
}

const newModel = new News();

export default newModel;