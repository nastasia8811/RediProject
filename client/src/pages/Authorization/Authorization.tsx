import './Authorization.scss';
import {Box, Container} from '@mui/material';
import {Link} from "react-router-dom";
import FormLogin from "../../components/FormLogin/FormLogin";
import validationSchemaLogin from "../Authorization/ValidationSchemaLogin";
import {useDispatch, useSelector} from "react-redux";
import {selectorLoginIsLoading, selectorLoginToken, selectorLoginUserData} from "../../selectors";
import Preloader from "../../components/Preloader/Preloader";
import * as React from "react";
import {useEffect} from 'react';
import setAuthToken from '../../helpers/setAuthToken';
import {ThunkDispatch} from "redux-thunk";
import {Action} from "redux";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import {getUserApi, sendApiLogin} from "../../reducers/login.reducer";
//import ModalErrorRegistration from "../Registration/components/ModalErrorRegistration/ModalErrorRegistration";




const Authorization: React.FC = (getUser) => {
    const userData = useSelector(selectorLoginUserData);
    const authToken = useSelector(selectorLoginToken);
    const dispatch = useDispatch<ThunkDispatch<any, any, Action>>();
    const loading = useSelector(selectorLoginIsLoading);
    // useEffect(() => {
    //     setAuthToken(authToken);
    //     if (authToken) {
    //         dispatch(getUserApi(getUser)).then(r => {
    //             console.log("success");});
    //     }
    // }, [authToken]);


    return (
        <>
            <Box className="auth">

                <Container maxWidth="xl">
                    <div className="auth__background-top">

                    </div>
                    <div className="auth__content-container">
                        <div className="auth__content-container_text1">
                            Authorization
                        </div>
                    </div>

                    <Box className="auth__background-bottom">
                        <BreadCrumbs linksArray={[{ link: '/authorization', text: 'Authorization' }]} />
                        <div className="auth__background-bottom_container">
                        <FormLogin
                            initialValues={userData}
                            onSubmit={ (values) => dispatch(sendApiLogin(values)).then((axiosValue) => {
                                console.log(axiosValue)})
                            }
                            validationSchema={validationSchemaLogin}
                        />
                            {loading && <Preloader open />}
                            <span className="auth__background-bottom_container-span">or</span>

                            <Link to="/registration" className="auth__background-bottom_container-registration"> Create account </Link>
                        </div>

                    </Box>
                </Container>

            </Box>
        </>
    )
};

export default Authorization;