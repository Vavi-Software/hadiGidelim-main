import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '../../css/navbar.css'
import {Box} from "@mui/material";

interface DashboardMenuProps {
    label: string;
    menuItems: string[];
}

const DashboardMenu: React.FC<DashboardMenuProps> = ({ label, menuItems }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                id={`${label.toLowerCase()}-button`}
                aria-controls={open ? `${label.toLowerCase()}-menu` : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className="menu-button"
            >
                {label}
            </Button>
            <Menu
                id={`${label.toLowerCase()}-menu`}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                className="menu-menu"
                MenuListProps={{
                    'aria-labelledby': `${label.toLowerCase()}-button`,
                }}
                sx={{
                    color: '#FF5722',  // Renk değişikliği
                    fontFamily: 'Arial, sans-serif',  // Yazı tipi değişikliği
                    fontWeight: 'bold',  // Yazı kalınlığı
                    fontSize: '16px'  // Yazı boyutu
                }}
            >
                {menuItems.map((item) => (
                    <MenuItem key={item} onClick={handleClose}
                              sx={{
                                  color: '#FF5722',  // Renk değişikliği
                                  fontFamily: 'Arial, sans-serif',  // Yazı tipi değişikliği
                                  fontWeight: 'bold',  // Yazı kalınlığı
                                  fontSize: '16px'  // Yazı boyutu
                              }}>
                        {item}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

export default function BasicMenu() {
    return (
        <div>
            <Box
            sx={{
                margin: 0,

            }}>
<Box
display="flex"
 flexDirection="column"
 justifyContent="space-between"
alignItems="center"
marginTop={2}
>
            <img src="../../../public/logo.png" alt="logo" width="200px" />
</Box>
            <Box
            display="grid"
            marginTop={3}
            gridTemplateColumns="repeat(7, 1fr)"
            justifyContent="center"
            alignItems="center"

            >
            <DashboardMenu label="Hadi Gezelim" menuItems={['Profile', 'Settings', 'Logout']} />
            <DashboardMenu label="Lezzet" menuItems={['Ev Yemekleri', '']} />
            <DashboardMenu label="Kafe" menuItems={['Butik Kafe', 'Sanat Kafe']} />
            <DashboardMenu label="Eğlence" menuItems={['Korku Evi', 'AquaPArk']} />
            <DashboardMenu label="Hizmet" menuItems={['Hastane', 'Eczane']} />
            <DashboardMenu label="Spor" menuItems={['Spor Salonu', 'Havuz']} />
            <DashboardMenu label="İletişim" menuItems={['Bize Ulaşın', 'İşletme Ekle']} />
            </Box>
            </Box>
        </div>
    );
}
