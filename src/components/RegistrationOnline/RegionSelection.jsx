import React from 'react'
import {Card } from 'antd'

export default function RegionSelection({ selectionState, setSelectionState }) {
    let cardCount = 4;
    const CardContainerStyle = {
        border: 0,
        height: "80%",
    }

    const handleRadioSelection = (e) => {
        if (selectionState == e.target.id.match(/\d/g).join('')) {
            setSelectionState(0)
        } else {
            setSelectionState(e.target.id.match(/\d/g).join(''))
        }
    }

    const gridStyle = {
        width: `calc(100% / ${Math.ceil(cardCount / 5)} - ${cardCount > 5 ? "2rem" : "0rem"})`,
        minHeight: `calc(80% / ${Math.ceil(cardCount / Math.ceil(cardCount / 5))} - 2rem)`,
        textAlign: 'center',
        margin: `${cardCount > 5 ? "1rem 1rem" : "1rem 0"}`,
    };

    return <Card style={CardContainerStyle}>
        {Array(cardCount).fill("").map((item, index) => <Card.Grid id={`opt${index + 1}`} className={`${selectionState == (index + 1) && "ant-btn-primary"}`} style={gridStyle} onClick={handleRadioSelection}>Content {index + 1}</Card.Grid>)}
    </Card>
}
