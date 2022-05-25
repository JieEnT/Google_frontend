import React, {useState} from 'react';
import { capitalCase } from 'change-case';
import { SnackbarProvider } from "notistack";

import { Container, Tab, Box, Tabs } from '@mui/material';

// Components
import Iconify from './styling/Iconify'
// import NotistackProvider from './styling/NotistackProvider';

// Sections
import UserNewForm from './components/UpdateUserForm';
import AccountChangePassword from './components/AccountChangePassword';
import AccountSocialLinks from './components/AccountSocialLinks';
import { _userAbout } from './components/_mock/_userAbout';

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
        <Box pt={2} pb={4}>
            <Container maxWidth='lg'>

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

                <Box sx={{ mb: 6 }} />
                
                <SnackbarProvider>
                    {ACCOUNT_TABS.map((tab) => {
                    const isMatched = tab.value === currentTab;
                    return isMatched && <Box key={tab.value}>{tab.component}</Box>;
                    })}
                </SnackbarProvider>
            </Container>
        </Box>
    )
}

export default Account;