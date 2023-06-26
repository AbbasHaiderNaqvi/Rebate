import React from 'react';
import {Cover} from "./Cover/Cover";
import styles from "./Rebate.module.css";
import coverImage from './Assets/rebate_cover.png';
import imageUrlMobile from './Assets/rebate_cover_mobile.png';
import {Breadcrumbs} from "../../components/pageutils/Breadcrumb";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import tabStyle from './../../assets/styles/tabs.module.scss';

interface RebateProps {
}

export const Rebate: React.FC<RebateProps> = () => {
    return (
        <div className={styles['bg-dark']}>
            <Cover imageUrl={coverImage} imageUrlMobile={imageUrlMobile}/>
            <div className={`${styles['ms-5']} ${styles['me-5']}`}>
                <Breadcrumbs pageName={'トップページ  >  プロモーション >  還元率別ゲームリスト'}/>
                <ul className={styles['custom-bullet']}>
                    <li className={`${styles['text-left']} ${styles['heading-small']} ${styles['ps-6']}`}>還元率別ゲームリスト</li>
                </ul>
                <div>
                    <Tabs>
                        <TabList className={tabStyle['tab-list']}>
                            <Tab className={tabStyle['tab']} selectedClassName={tabStyle['tab--selected']}>1 %</Tab>
                            <Tab className={tabStyle['tab']} selectedClassName={tabStyle['tab--selected']}>2 %</Tab>
                            <Tab className={tabStyle['tab']} selectedClassName={tabStyle['tab--selected']}>3 %</Tab>
                        </TabList>

                        <TabPanel className={tabStyle['tab-panel']}>
                            <h2>Content 1</h2>
                            <p>This is the content of Tab 1.</p>
                        </TabPanel>
                        <TabPanel className={tabStyle['tab-panel']}>
                            <h2>Content 2</h2>
                            <p>This is the content of Tab 2.</p>
                        </TabPanel>
                        <TabPanel className={tabStyle['tab-panel']}>
                            <h2>Content 3</h2>
                            <p>This is the content of Tab 3.</p>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>

        </div>)

};

