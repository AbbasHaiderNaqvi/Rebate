import React, {useState} from 'react';
import {Cover} from "./Cover/Cover";
import styles from "./Rebate.module.css";
import coverImage from './Assets/rebate_cover.png';
import imageUrlMobile from './Assets/rebate_cover_mobile.png';
import {Breadcrumbs} from "../../components/pageutils/Breadcrumb";
import {Table} from "../../components/pageutils/Table";
import gameData from "./baqto_game_rtp.json";

interface RebateProps {
}

export const Rebate: React.FC<RebateProps> = () => {
    const [selectedRate, setSelectedRate] = useState(0.01);
    const [filteredGames, setFilteredGames] = useState(gameData.filter(game => game.rate === selectedRate));
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };
    const handleTab = (value:any) => {
        setFilteredGames(gameData.filter(game => game.rate === value));
        setSelectedRate(value)
    };
    const onSearch = (searchTerm: string) => {
        setFilteredGames(gameData.filter(game => game.gameName.toString().toLowerCase().includes(searchTerm.toLowerCase())));
        setSearchTerm(searchTerm);
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    console.log(filteredGames)
    console.log(selectedRate)

    return (
        <div className={styles['bg-dark']}>
            <Cover imageUrl={coverImage} imageUrlMobile={imageUrlMobile}/>
            <div className={`${styles['ms-5']} ${styles['me-5']}`}>
                <Breadcrumbs pageName={'トップページ  >  プロモーション >  還元率別ゲームリスト'}/>
                <ul className={styles['custom-bullet']}>
                    <li className={`${styles['text-left']} ${styles['heading-small']} ${styles['ps-6']}`}>還元率別ゲームリスト</li>
                </ul>
                <div className={styles['search-bar']}>
                    <ul className={styles['custom-bullet']}>
                        <li className={`${styles['text-left']} ${styles['heading-small']} ${styles['ps-6']} ${styles['pb-4']}`}>ゲーム検索</li>
                    </ul>
                    <input type="text" value={searchTerm} onChange={handleInputChange} className={styles['search-input']} placeholder="ゲームの検索" />
                    <button onClick={handleSearch} className={styles['search-button']}>検索</button>
                </div>
                <div>
                    <div className={`${styles['text-left']} ${styles['pt-4']}  ${styles['pb-4']}`}>
                        <button
                            className={`${styles.tab} ${selectedRate === 0.01 ? styles.selected : ''}`}
                            onClick={() => handleTab(0.01)}
                        >
                            1%
                        </button>
                        <button
                            className={`${styles.tab} ${selectedRate === 0.02 ? styles.selected : ''}`}
                            onClick={() => handleTab(0.02)}
                        >
                            2%
                        </button>
                        <button
                            className={`${styles.tab} ${selectedRate === 0.03 ? styles.selected : ''}`}
                            onClick={() => handleTab(0.03)}
                        >
                            3%
                        </button>
                    </div>
                    <Table data={filteredGames}></Table>
                </div>
            </div>

        </div>)

};

