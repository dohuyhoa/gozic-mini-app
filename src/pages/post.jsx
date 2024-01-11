import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import '../css/newdetail.css';
import { Page } from "zmp-ui";
import PageHeading from "../components/page-heading";
import Footer from "../components/footer";
import newsDetail from "../models/news-detail";
import GLOBAL_VARIABLE from "../models/global-variable";

const Post = () => {
    let { id } = useParams();
    let [contentHTML, setContentHTML] = useState("");
    let [isShowText, setisShowText] = useState(true);
    const handleOnClickShow = () => {
        setisShowText(!isShowText);
    }

    useEffect(() => {
        async function loadData() {
            let data = await newsDetail.callApi(id)
            // //console.log(JSON.stringify(data))
            setContentHTML(data)
        }
        loadData()
    }, [])
    return (
        <Page>
            <PageHeading />
            <div className="container" style={{ margin: '20px 0px 100px 0px' }}>
                <div>
                    <img className="my-3" src={GLOBAL_VARIABLE.post_thumbnail}></img>
                    <h1 className="text-center mb-4 fw-bold">{GLOBAL_VARIABLE.post_title}</h1>
                </div>
                <div dangerouslySetInnerHTML={{__html: contentHTML }}></div>
            </div>
            <Footer />
        </Page>
        
    );
};

export default Post;