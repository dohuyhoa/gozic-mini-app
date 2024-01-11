import Config from "../config";

class NewsType {
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

    //Phan Loai -> latest, random
    type = "latest"
    num = 8

    async callApi() {
        let data = await Config.getData(Config.API_NEWS_TYPE + "&keycode="+this.type+"&num="+this.num);
        return data;
    }
}

const newsType = new NewsType();

export default newsType;