//import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
//import { Box, Container,} from '@mui/material';
import './EventCreate.scss';
import React from 'react';
import ValidationSchemaEventCreate from "../../components/FormEventCreate/ValidationSchemaEventCreate";
import FormEventCreate from "../../components/FormEventCreate/FormEventCreate";
import {initialState} from "../../reducers/eventCreate.reducer";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import {Container} from '@mui/material';
import './EventCreate.scss';

const EventCreate: React.FC = () => {

        return (
            <>
                <Container className="eventCreate-container" maxWidth="lg">
                    <BreadCrumbs linksArray={[{link: '/newEvent', text: 'New event'}]}/>
                    <div className="eventCreate-container__wrapper">
                        <h2 className="eventCreate-container__wrapper-title">New event</h2>
                        <FormEventCreate
                            initialValues={initialState}
                            validationSchema={ValidationSchemaEventCreate}
                            onSubmit={() => {
                                console.log("hi")
                            }}
                        />
                    </div>
                </Container>

            </>
        )
    }
;

export default EventCreate;