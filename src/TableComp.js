import React, {useState} from "react";
import "./TableComp.css";

export default function TableComp(){
    const initialTableElements = 
    [
        { date: "2022-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-02", views: 150, article: "Article 2" },
        { date: "2023-09-02", views: 120, article: "Article 3" },
        { date: "2020-09-03", views: 200, article: "Article 4" }
    ]

    const [tableElements, setTableElements] = useState(initialTableElements);
    console.log(tableElements)

    const handleSortByDate = () => {
        const sortedByDate = [...tableElements].sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          });
          setTableElements(sortedByDate);
    }

    const handleSortByViews = () => {
        const sortedByViews = [...tableElements].sort((a, b) => {
            return b.views-a.views;
          });
          setTableElements(sortedByViews);
    }

    return(
        <div>
            <h1>Date and Views Table</h1>
            <button onClick={handleSortByDate}>Sort by Date</button>
            <button onClick={handleSortByViews}>Sort by Views</button>
            <table className="table">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Views</th>
                    <th>Article</th>
                </tr>
                </thead>
                <tbody>
                    {tableElements.map((e, index) => (
                        <tr key={index}>
                            <td>{e.date}</td>
                            <td>{e.views}</td>
                            <td>{e.article}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}