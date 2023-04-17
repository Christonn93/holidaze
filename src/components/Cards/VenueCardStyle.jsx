import styled from "styled-components";

export const VenueCard = styled.div`
 display: flex;
 flex-direction: column;
 gap: 10px;

 border: 1px solid black;
 width: 500px;
`;

export const VenueCardImage = styled.div`
 background-image: url("https://via.placeholder.com/600x400");
 object-fit: contain;
 background-repeat: no-repeat;
 background-position: center;
 height: 200px;
 width: 100%;

 position: relative;
`;

export const VenueLikes = styled.span`
 position: absolute;
 top: 0;
 right: 0;
 padding: 10px;
`;

export const VenueCardContent = styled.div`
 padding: 15px;
 display: flex;
 flex-direction: column;
`;

export const VenueCardInformation = styled.div`
 display: flex;
 flex-direction: row;
 gap: 10px;
 justify-content: space-between;
`;

export const VenueCardInformationSection = styled.div``;

export const VenueCardButton = styled.button`
 background-color: #4caf50;
 border: none;
 color: white;
 padding: 15px 32px;
 text-align: center;
 text-decoration: none;
 display: inline-block;
 font-size: 16px;
`;

export const VenueCardFooter = styled.div`
 padding: 15px;
 display: flex;
 justify-content: end;
`;

export const Span = styled.span`
 display: inline-flex;
 gap: 10px;
 justify-items: start;
`;
