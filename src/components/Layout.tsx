import React from 'react';
import { Layout as LayoutAntd, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import "./Styles/LayoutStyle.css"
import Header from './Header';
const { Content } = LayoutAntd;

const Layout: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <LayoutAntd className='Layout'>
            <Header />

            <hr />
            <Content className='Main'
                style={{
                    backgroundColor: 'black',
                    padding: '30px 48px',
                }}>
                <div
                    style={{
                        background: colorBgContainer,
                        padding: 24,
                        backgroundColor: 'darkgray',
                        borderRadius: borderRadiusLG,
                    }}>
                    <Outlet />
                </div>
            </Content>

            <Footer />
        </LayoutAntd>
    )
}

export default Layout;