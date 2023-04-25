import React from 'react';
import {Cover} from "./Cover/Cover";
import styles from './PointSystem.module.css';
import {SpecialNote} from "./SpecialNote/SpecialNote";
import {ScoreChart} from "./ScoreChart/ScoreChart";

interface PointSystemProps {
}

export const PointSystem: React.FC<PointSystemProps> = () => {

    return (
        <div className={styles['bg-dark']}>
            <Cover/>
            <div className={`${styles['ms-5']} ${styles['me-5']}`}>
                <h3 className={styles['text-left']}>Breadcrumb</h3>
                <h1 className={`${styles['text-left']} ${styles['heading-medium']}`}>点数の計算式</h1>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}>翻数と符を理解すると、下記計算式に当てはめることで、点数を計算することができます。</p>
                <div style={{position: 'relative'}}>
                    <div>
                        <h1 className={`${styles['text-left']} ${styles['heading-small']} ${styles['pt-6']}`}>子での和了時の計算式</h1>
                        <h1 className={`${styles['text-left']} ${styles['heading-medium']} ${styles['pt-6']} ${styles['para-highlight']}`}>符
                            x 4 x 2 の翻数乗 = 点数</h1>
                    </div>
                    <button className={styles['play-button']}>
                        <h1 className={`${styles['para-medium']}`}>麻雀を</h1>
                        <h1 className={`${styles['para-medium']}`}> 今すぐプレイ</h1>
                        <h1 className={`${styles['para-small']}`}>Play MAHJONG</h1>
                    </button>
                    <div>
                        <h1 className={`${styles['text-left']} ${styles['heading-small']} ${styles['pt-6']}`}>子での和了時の計算式</h1>
                        <h1 className={`${styles['text-left']} ${styles['heading-medium']} ${styles['pt-6']} ${styles['para-highlight']}`}>符
                            x 4 x 2 の翻数乗 = 点数</h1>
                    </div>
                </div>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}>子なら、符に4を、親ならば6を掛けます。</p>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}>親の点数は子の1.5倍ですので、そのような計算式になります。</p>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}>子の点数さえ計算することができれば、でた数字を1.5倍することで親の点数を出すことができます。</p>
                <p className={`${styles['text-left']} ${styles['para-medium']} ${styles['pt-6']}`}>翻数乗とは2翻なら2乗、3翻ならば3乗ということです。</p>
                <SpecialNote note={
                    <>
                        <p className={`${styles['text-left']} ${styles['para-medium']}`}>※計算の際に注意しなくてはならないことがあります。</p>
                        <p className={`${styles['text-left']} ${styles['para-medium']}`}> 麻雀には『場ゾロ』というものがあります。</p>
                        <p className={`${styles['text-left']} ${styles['para-medium']}`}> これは和了した際に無条件で2翻足されるというものです。</p>
                        <p className={`${styles['text-left']} ${styles['para-medium']}`}> 和了が3翻の場合は2翻足して5翻で計算をする必要があります。</p>
                        <p className={`${styles['text-left']} ${styles['para-medium']}`}> 『場ゾロ』自体は省略されることが多いです。</p>
                        <p className={`${styles['text-left']} ${styles['para-medium']}`}> ※3翻の和了自体は変わらず、5翻の和了になるというようなことはありません。</p>
                    </>
                }/>
                <p className={`${styles['text-left']} ${styles['para-medium']} ${styles['pt-6']} ${styles['pb-6']}`}>それでは例として、子で30符の3翻でロン和了したケースを計算していきましょう。</p>
                <ul className={styles['custom-bullet']}>
                    <li className={`${styles['text-left']} ${styles['heading-small']} ${styles['ps-6']}`}>ロン和了した場合</li>
                </ul>
                <p className={`${styles['text-left']} ${styles['heading-small']}  ${styles['pt-6']} ${styles['pb-6']}`}>例題
                    子で 30符3翻のロン和了</p>
                <h1 className={`${styles['text-left']} ${styles['heading-medium']} ${styles['pt-6']} ${styles['para-highlight']}`}>30符
                    x 4 x 2 の(3+2)乗 = 点数</h1>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}>30×4×2×2×2×2×2×2= 3840 3840</p>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}>3840点になりました。麻雀において10点棒は存在しないため、下2桁を切り上げます。</p>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}> これで3900点になりました。</p>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}> 麻雀経験者には馴染みのある数字ですね。</p>
                <p className={`${styles['text-left']} ${styles['para-medium']}  ${styles['pt-6']} ${styles['pb-6']}`}>上記はロン和了した際のケースでしたが、次はツモ和了した際のケースを考えて見ましょう。</p>
                <ul className={`${styles['custom-bullet']} ${styles['pt-6']} ${styles['pb-2']}`}>
                    <li className={`${styles['text-left']} ${styles['heading-small']} ${styles['ps-6']}`}>ツモ和了した場合</li>
                </ul>
                <p className={`${styles['text-left']} ${styles['para-medium']}  ${styles['pt-2']} ${styles['pb-6']}`}>ロン和了した際は、放銃したプレイヤーからのみ点数を貰うだけで良いのですが、ツモ和了の場合には同卓している全員からもらう必要があります。</p>
                <p className={`${styles['text-left']} ${styles['heading-small']}  ${styles['pt-6']} ${styles['pb-6']}`}>子がツモ和了した場合</p>
                <SpecialNote note={
                    <>
                        <ul>
                            <li className={`${styles['text-left']} ${styles['heading-small']}`}>親が点数の半分を支払う</li>
                            <li className={`${styles['text-left']} ${styles['heading-small']}`}>子2人は、25%ずつ支払う</li>
                        </ul>
                        <p className={`${styles['text-left']} ${styles['para-medium']}  ${styles['pt-6']} `}>4000点の場合、親が2000点、子は1000点ずつの支払いとなります。</p>

                    </>
                }/>
                <p className={`${styles['text-left']} ${styles['heading-small']}  ${styles['pt-6']} ${styles['pb-6']}`}>親がツモ和了した場合</p>
                <SpecialNote note={
                    <>
                        <ul>
                            <li className={`${styles['text-left']} ${styles['heading-small']}`}>子3人が点数の1/3ずつを支払う。</li>
                        </ul>
                        <p className={`${styles['text-left']} ${styles['para-medium']}  ${styles['pt-6']} `}> 6000点の場合、子3人がそれぞれ2000点ずつの支払いとなります。</p>
                        <p className={`${styles['text-left']} ${styles['para-medium']}  ${styles['pt-6']} `}>※割り算をして、点数の下2ケタが端数となった場合には、切り上げとなります</p>
                    </>
                }/>
                <ul className={`${styles['custom-bullet']} ${styles['pt-6']} ${styles['pb-2']}`}>
                    <li className={`${styles['text-left']} ${styles['heading-small']} ${styles['ps-6']}`}>点数早見表</li>
                </ul>
                <ScoreChart/>
            </div>
        </div>
    );
};

