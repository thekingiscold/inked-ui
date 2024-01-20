import React from "react";
import InkedCustomCard from "./InkedCustomCard";

export default function TattooThumbnailSection({ tattooTypeData }) {
  return (
    <div className="container py-3" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      {tattooTypeData.map((tattoo) => (
        
          <InkedCustomCard
            cardWidth="290px"
            cardHeight="290px"
            cardMargin="30px"
            cardLeftMargin="0px"
            imgHeight="120px"
            img={tattoo.img}
            fontSize="0.80em"
            title={
              <>
                <span style={{ color: "red", fontWeight: "bold" }}>
                  {tattoo.title.charAt(0)}
                </span>
                {tattoo.title.slice(1)}
              </>
            }
            text={tattoo.text}
          />
        
      ))}
    </div>
  );
}
