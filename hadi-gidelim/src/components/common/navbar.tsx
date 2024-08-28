import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { Box } from "@mui/material";
import '../../css/navbar.css';

interface DashboardMenuProps {
    label: string;
    menuItems: { name: string, path: string }[];
}

const DashboardMenu: React.FC<DashboardMenuProps> = ({ label, menuItems }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (path: string) => {
        navigate(path);
        handleClose();
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
            >
                {menuItems.map((item) => (
                    <MenuItem key={item.name} onClick={() => handleMenuItemClick(item.path)}>
                        {item.name}
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
                }}
            >
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
                    gridTemplateColumns="repeat(8, 1fr)"
                    justifyContent="center"
                    alignItems="center"
                >
                    <DashboardMenu label="Ana Sayfa" menuItems={[{
                        name: 'Ana Sayfa', path: '/' },
                        {
                        name: 'Hadi Gezelim', path: '/hadi-gezelim' }
                    ]}
                    />
                    <DashboardMenu label="Konaklama" menuItems={[
                        { name: 'Konaklama Ara', path: '/Konaklama' },
                        { name: 'Oteller', path: '/Konaklama/Oteller' },
                        { name: 'Pansiyonlar', path: '/Konaklama/Pansiyonlar' },
                        { name: 'Apartlar', path: '/Konaklama/Apartlar' }]}
                    />
                    <DashboardMenu label="Lezzet" menuItems={[
                        { name: 'Ev Yemekleri', path: 'Lezzet/Ev-Yemekleri' },
                        { name: 'Türk Mutfağı', path: 'Lezzet/Turk-Mutfagi' },
                        { name: 'Yabancı Mutfağı', path: 'Lezzet/Yabanci-Mutfagi' },
                        { name: 'Öğrencilere Özel', path: 'Lezzet/Ogrenci-Ozel' },
                        { name: 'Kendin Pişir', path: 'Lezzet/Kendin-Pisir' },
                        { name: 'Önerilenler', path: 'Lezzet/Onerilenler' }]}
                    />
                    <DashboardMenu
                        label="Kafe"
                        menuItems={[
                            { name: 'Sanat Kafe', path: '/Kafe/Sanat-Kafe' },
                            { name: 'Bistro Kafe', path: '/Kafe/Bistro-Kafe' },
                            { name: 'Kitap Kafe', path: '/Kafe/Kitap-Kafe' },
                            { name: 'Butik Kafe', path: '/Kafe/Butik-Kafe' },
                            { name: 'Çalışma Kafe', path: '/Kafe/Calisma-Kafe' },
                            { name: 'İnternet Kafe', path: '/Kafe/Internet-Kafe' },
                        ]}
                    />
                    <DashboardMenu label="Eğlence" menuItems={[
                        { name: 'Korku Evi', path: '/eglence/korkuevi' },
                        { name: 'Paintball', path: '/eglence/paintball' },
                        { name: 'Lunapark', path: '/eglence/lunapark' },
                        { name: 'AquaPark', path: '/eglence/aquapark' }]}
                    />
                    <DashboardMenu label="Hizmet" menuItems={[
                        { name: 'Hastane', path: '/hizmet/hastane' },
                        { name: 'Dişçiler', path: '/hizmet/disciler' },
                        { name: 'Güzellik Merkezi', path: '/hizmet/guzellik-merkezi' },
                        { name: 'Eczane', path: '/hizmet/eczane' }]}
                    />
                    <DashboardMenu label="Spor" menuItems={[
                        { name: 'Spor Salonu', path: '/spor/salon' },
                        { name: 'Kalistenik Parkuru', path: '/spor/kalistenik-parkuru' },
                        { name: 'Halı Sahalar', path: '/spor/hali-sahalar' },
                        { name: 'Havuz', path: '/spor/havuz' }]}
                    />
                    <DashboardMenu label="İletişim" menuItems={[
                        { name: 'Bize Ulaşın', path: '/iletisim' },
                        { name: 'İşletme Ekle', path: '/iletisim/ekle' }]}
                    />
                </Box>
            </Box>
        </div>
    );
}
