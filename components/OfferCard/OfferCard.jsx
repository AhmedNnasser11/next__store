import {Desc, Kind, OfferCardContainer, Type, Collection, CustomImage, CustomButton} from "./OfferStyle"

const OfferCard = ({item}) => {
    return (
        <OfferCardContainer>
            <Desc>
                <Kind>{item.kind}</Kind>
                <Type>{item.type}</Type>
                {
                    item.collection ? (
                        <Collection>
                        {item.collection}
                    </Collection>
                    ) : null
                }
               
                <CustomButton variant="contained">
                        Shop now
                </CustomButton>
            </Desc>
            <CustomImage src={item.img} alt={item.kind} height="300px" width="200px" />
        </OfferCardContainer>
    )
}

export default OfferCard
