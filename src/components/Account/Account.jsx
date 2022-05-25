import React, {useState} from 'react';
import { capitalCase } from 'change-case';
import styled from 'styled-components'

import { Container, Tab, Box, Tabs } from '@mui/material';

// Components
import Iconify from './styling/Iconify'
import NotistackProvider from './styling/NotistackProvider';

// Sections
import UserNewForm from './components/UpdateUserForm';
import AccountChangePassword from './components/AccountChangePassword';
import AccountSocialLinks from './components/AccountSocialLinks';
import { _userAbout } from './components/_mock/_userAbout';

//Background image
//import Background from '../../assets/cloudlandscape.png';

const MyContainer = styled.div`
    height:90vh;
    overflow:hidden;
    background-color:#eeeeee;
`;

const Account = () => {
    const [currentTab, setCurrentTab] = useState('general');

    const ACCOUNT_TABS = [
        {
            value: 'general',
            icon: <Iconify icon={'ic:round-account-box'} width={20} height={20} />,
            component: <UserNewForm />,
        },
        {
        value: 'social_links',
        icon: <Iconify icon={'eva:share-fill'} width={20} height={20} />,
        component: <AccountSocialLinks myProfile={_userAbout} />,
        },
        {
            value: 'change_password',
            icon: <Iconify icon={'ic:round-vpn-key'} width={20} height={20} />,
            component: <AccountChangePassword />,
        }
    ];

    return(
        <MyContainer>
            <Container maxWidth='lg' sx={{ mt: 1 }}>

                <Tabs
                value={currentTab}
                scrollButtons="auto"
                variant="scrollable"
                allowScrollButtonsMobile
                onChange={(e, value) => setCurrentTab(value)}
                >
                {ACCOUNT_TABS.map((tab) => (
                    <Tab disableRipple key={tab.value} label={capitalCase(tab.value)} icon={tab.icon} value={tab.value} />
                ))}
                </Tabs>

                <Box sx={{ mb: 2 }} />
                
                <NotistackProvider>
                    {ACCOUNT_TABS.map((tab) => {
                    const isMatched = tab.value === currentTab;
                    return isMatched && <Box key={tab.value}>{tab.component}</Box>;
                    })}
                </NotistackProvider>
            </Container>
        </MyContainer>
    )
}

export default Account;