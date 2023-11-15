import React from "react";
import { Table } from "react-bootstrap";
import NewsTableContent from "./NewsTableContent";
function NewsTable({newsList, reloadState}) {
    return ( 
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th className="col-3">Title</th>
                    <th className="col-2">Author</th>
                    <th className="col-2">Category</th>
                    <th className="col-2">Release Date</th>
                    <th className="col-1">View</th>
                    <th className="col-1">Update</th>
                    <th className="col-1">Delete</th>
                </tr>
            </thead>
            <tbody>
                {newsList.map((news, index) => {
                    return <NewsTableContent index={index} reloadState={reloadState} news={news} />
                })}
            </tbody>

        </Table>
     )
}

export default NewsTable;