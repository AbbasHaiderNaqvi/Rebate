import React from 'react';
import {Link} from "react-router-dom";
import {Breadcrumb, Divider, Row} from "antd";
import {PAGE_DETAILS}  from "../../constants"

const Breadcrumbs = () => {
    function getKeyByValue(object, value) {
        return  Object.entries(object).filter(k=>k[1].route==='/'+value)[0][1]
    }
    let currentPageDetail = getKeyByValue(PAGE_DETAILS,window.location.pathname.split("/").pop())
    return (
        <>
            <Row className="content-row  pt-5 pb-5 text-black">
                <Breadcrumb>
                    <Breadcrumb.Item >
                        <Link to={PAGE_DETAILS.dashboard.route} className="text-black">{PAGE_DETAILS.dashboard.title}</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={currentPageDetail.route} className="text-black"><u style={{textDecoration:'underline'}}>{currentPageDetail.title}</u></Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </Row>
            <Divider className="m-0" style={{border: '1px solid #99999980',background:'#99999980'}}/>
        </>
    )

};

export default Breadcrumbs;
