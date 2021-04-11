import React from 'react'
import { ServicesContainer, ServicesWrapper, ServicesH1, ServicesH2, ServicesP, ServicesCard, ServicesIcon } from './ServiceElements'
 

const Services = () => {
    const Icon1= process.env.PUBLIC_URL + '/images/dashboard.svg'
    const Icon2= process.env.PUBLIC_URL + '/images/services.svg'
    const Icon3= process.env.PUBLIC_URL + '/images/checkbox.svg'
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce yours fees and increase your oberall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>Access our services anywhere in the world with just one click.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Exclusive Benefits</ServicesH2>
                    <ServicesP>Enroll and get a exclusive card which will give you 5% cashback where shop.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
