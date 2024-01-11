import Config from "../config";

class NewsDetail {
    //data hien thi du lieu
    //Truyen them du lieu title, thumbnail, id => sang de dung neu can
    content = ""

    //Tu dong goi trang tiep theo -> add du lieu vao
    async callApi(id) {
        //Du lieu tra ve chi co duy nhat noi dung
        //console.log(Config.API_NEWS_DETAIL + id)
        let data = await Config.getContent(Config.API_NEWS_DETAIL + id);

        return data;
    }
}

const newsDetail = new NewsDetail();

export default newsDetail;