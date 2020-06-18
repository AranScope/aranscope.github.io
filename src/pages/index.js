import React  from "react";

import SiteHeader from "../components/sections/SiteHeader";
import SiteFooter from "../components/sections/SiteFooter";
import GlobalStyle from "../components/styled/global";
import ClippedSection from "../components/sections/ClippedSection";
import Card from "../components/styled/Card";
import CardGrid from "../components/styled/CardGrid";
import { H1 } from "../components/styled/typography";
import Container from "../components/base/Container";

export default () => (
    <React.Fragment>
        <GlobalStyle />
        <SiteHeader />
        <ClippedSection>
            <Container>
                <H1 light>Projects</H1>
                <CardGrid>
                    <Card
                        image="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/536/141/datas/gallery.jpg"
                        title="Pedalo"
                        desc="Credential verification on the Ethereum blockchain. Hack the North Winner, 2017."
                        href="https://devpost.com/software/pedalo"
                        tag="blockchain"
                        link_text="Visit"
                    />
                    <Card
                        image="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/424/649/datas/gallery.jpg"
                        title="Notifi.Click"
                        desc="No-cost notifications using Amazon Dash buttons and a serverless architecture."
                        href="https://devpost.com/software/notifi-click"
                        tag="serverless"
                        link_text="Visit"
                    />
                    <Card
                        image="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/434/842/datas/gallery.jpg"
                        title="See"
                        desc="Vision for the blind, using object recognition and deep learning."
                        href="https://devpost.com/software/see-81a6u7"
                        tag="machine learning"
                        link_text="Visit"
                    />
                    <Card
                        image="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/417/986/datas/gallery.jpg"
                        title="Dance Auth"
                        desc="Two factor authentication with your dance moves. HackTheMidlands 2016."
                        href="https://devpost.com/software/danceauth"
                        tag="full stack"
                        link_text="Visit"
                    />
                </CardGrid>
            </Container>
        </ClippedSection>
        <SiteFooter />
    </React.Fragment>
);
