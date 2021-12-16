import { Description, LayoutContainer, Title } from "./LayoutStyle"

const Layout = ({ children, title, desc , bg}) => {
    return (
        <LayoutContainer bg={bg}>
            {title && desc ? (
                <>
                    <Title>{title}</Title>
                    <Description>{desc}</Description>
                </>
            ) : null}
            {children}
        </LayoutContainer>
    )
}

export default Layout
