import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMagicWandSparkles } from "@fortawesome/free-solid-svg-icons";
import '../css/news.css';
import { useNavigate } from 'react-router-dom';
import { Modal, Page, Spinner } from "zmp-ui";
import Footer from "../components/footer";
import PageHeading from "../components/page-heading";
import newModel from "../models/news";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingModal from "../components/loading-popup";
import GLOBAL_VARIABLE from "../models/global-variable";

const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
};

const New = () => {
    const [items, setItems] = useState([])
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState({ loading: false });
    const fetchMoreData = async () => {
        if (hasMore) {
            //console.log("fetch? ")
            //console.log("before call api")
            // setCurrentPage(currentPage+1);
            let res = await newModel.callApi();
            //console.log("called api")

            let data = await res ? res : [];
            // if (data.length==0) {
            //     //console.log("-----END-----");
            //     setHasMore(false);
            // }
            // setItems([...items, ...data]);
            setItems([...data]);
            //console.log(items.length + " | " + data.length);
            //console.log(JSON.stringify(items))
        }
    }

    useEffect(() => {
        const fetchFirstData = async () => {
            setLoading(true)

            //console.log("first? ")
            //console.log("before call api")
            // setCurrentPage(currentPage+1);
            let res = await newModel.callApi();
            //console.log("called api")
    
            let data = res ? res : [];
            setItems(data);
            //console.log(items.length)

            setLoading(false)
        };
        fetchFirstData();
        return () => {
            newModel.reset();
        }
    }, []);

    const navigateTo = useNavigate();
    const handleOnclickDetailNew = (post) => {
        GLOBAL_VARIABLE.post_title = post.title;
        GLOBAL_VARIABLE.post_thumbnail = post.thumbnail;
        navigateTo(`/post/${post.id}`)
        //console.log(`/post/${post.id}`)
    }

    return (
        <Page style={{overflow:'hidden'}}>
            <PageHeading />
            <InfiniteScroll
            dataLength={items.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={
                <Modal>
                    <Spinner animation="border" role="status" variant="light"></Spinner>
                </Modal>}
            height={'calc(100vh - 132px)'}
            endMessage={
                <p style={{ textAlign: "center" }}>
                <b>Đã hết !</b>
                </p>
            }
            {...console.log("render")}
            >
            <div className="container">
                {items.map((item, index) => {
                    return (
                        <div key={index} style={{ overflow: 'auto' }} className="col-xs-12 col-sm-6 col-md-4 col-lg-4 news-content">
                            <div className="new-content-up" style={{ padding: '20px 20px 0px 20px' }}>
                                <div className="image-blog" onClick={() => handleOnclickDetailNew(item)}>
                                    <img src={item.thumbnail} alt={item.thumbnail} height="227.5" width="100%" />
                                </div>
                                <div className="createAt-blog">
                                    <FontAwesomeIcon icon={faClock} />
                                    {item.updated_at}
                                </div>
                            </div>
                            <div className="new-content-down">
                                <div className="content-title">
                                    <a onClick={() => handleOnclickDetailNew(item)}>{item.title}</a>
                                </div>
                                <div className="content-blog" onClick={() => handleOnclickDetailNew(item)}>
                                    <p dangerouslySetInnerHTML={{__html: item.content }}></p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            </InfiniteScroll>
            <LoadingModal show={loading} />
            <Footer />
        </Page>
    );
};

export default New;
