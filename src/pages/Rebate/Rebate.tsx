import React from 'react';
import {Cover} from "./Cover/Cover";
import styles from './PointSystem.module.css';
import {SpecialNote} from "./SpecialNote/SpecialNote";
import {ScoreChart} from "./ScoreChart/ScoreChart";
import {MenzKind} from "./MenzKind/MenzKind";
import kind1 from '../../assets/images/menz_kind/kind1.png';
import kind2 from '../../assets/images/menz_kind/kind2.png';
import kind3 from '../../assets/images/menz_kind/kind3.png';
import kind4 from '../../assets/images/menz_kind/kind4.png';
import kind5 from '../../assets/images/menz_kind/kind5.png';
import kind6 from '../../assets/images/menz_kind/kind6.png';
import kind7 from '../../assets/images/menz_kind/kind7.png';
import kind8 from '../../assets/images/menz_kind/kind8.png';
import kind9 from '../../assets/images/menz_kind/kind9.png';
//instruction
import apInstruction1 from '../../assets/images/addition_point_instruction/ap_instruction1.png';
import apInstruction2 from '../../assets/images/addition_point_instruction/ap_instruction2.png';
import apInstruction3 from '../../assets/images/addition_point_instruction/ap_instruction3.png';
import apInstruction4 from '../../assets/images/addition_point_instruction/ap_instruction4.png';
import apInstruction5 from '../../assets/images/addition_point_instruction/ap_instruction5.png';
import apInstruction6 from '../../assets/images/addition_point_instruction/ap_instruction6.png';
import waitingInstruction1 from '../../assets/images/waiting_instruction/waiting_instruction1.png';
import waitingInstruction2 from '../../assets/images/waiting_instruction/waiting_instruction2.png';
import waitingInstruction3 from '../../assets/images/waiting_instruction/waiting_instruction3.png';
import waitingInstruction4 from '../../assets/images/waiting_instruction/waiting_instruction4.png';
import waitingInstruction5 from '../../assets/images/waiting_instruction/waiting_instruction5.png';
import waitingInstruction6 from '../../assets/images/waiting_instruction/waiting_instruction6.png';
import {Instruction} from "./Instruction/Instruction";
import {Breadcrumbs} from "../../components/pageutils/Breadcrumb";

interface PointSystemProps {
}

export const PointSystem: React.FC<PointSystemProps> = () => {
    const kind = {
        "kinds1": [
            {
                "imageUrl": kind1,
                "text": "順子 0符"
            }
        ],
        "kinds2": [
            {
                "imageUrl": kind2,
                "text": "明刻 2符"
            },
            {
                "imageUrl": kind3,
                "text": "暗刻 4符"
            },
            {
                "imageUrl": kind4,
                "text": "暗刻 8符"
            },
            {
                "imageUrl": kind5,
                "text": "暗刻 16符"
            },
        ],
        "kinds3": [
            {
                "imageUrl": kind6,
                "text": "明刻 4符"
            },
            {
                "imageUrl": kind7,
                "text": "明刻 8符"
            },
            {
                "imageUrl": kind8,
                "text": "明刻 16符"
            },
            {
                "imageUrl": kind9,
                "text": "明刻 32符"
            },
        ]
    }
    const accordingToPointInstructions = {
        "instructions1": [
            {
                "imageUrl": apInstruction1,
                "text": "筒子/萬子/索子の一から九の数牌  0符",
                "heading": "数牌が雀頭"
            },
            {
                "imageUrl": apInstruction2,
                "text": "オタ風牌が雀頭",
                "heading": "オタ風牌(自風牌、場風牌のどちらにも該当しない東西南北のいずれか)  0符"
            },
        ],
        "instructions2": [
            {
                "imageUrl": apInstruction3,
                "text": "明刻 2符",
                "heading": "数牌が雀頭"
            },
            {
                "imageUrl": apInstruction4,
                "text": "暗刻 4符",
                "heading": "数牌が雀頭"
            },
        ],
        "instructions3": [
            {
                "imageUrl": apInstruction5,
                "text": "明刻 4符",
                "heading": "数牌が雀頭"
            },
            {
                "imageUrl": apInstruction6,
                "text": "明刻 8符",
                "heading": "数牌が雀頭"
            },
        ]
    }
    const waitingInstructions = {
        "instructions1": [
            {
                "imageUrl": waitingInstruction1,
                "text": "両面(リャンメン)待ち",
                "heading": "『3･4』持ちでの『2-5』待ち等  0符"
            },
            {
                "imageUrl": waitingInstruction2,
                "text": "双碰(シャボ、シャンポン)待ち",
                "heading": "『5･5』『7･7』持ちでの『5･7』待ち等  0符"
            },
        ],
        "instructions2": [
            {
                "imageUrl": waitingInstruction3,
                "text": "辺張(ペンチャン)待ち",
                "heading": "辺張(ペンチャン)待ち"
            },
            {
                "imageUrl": waitingInstruction4,
                "text": "嵌張(カンチャン)待ち",
                "heading": "『1･3』持ちでの『2』待ち等  2符"
            },
        ],
        "instructions3": [
            {
                "imageUrl": waitingInstruction5,
                "text": "単騎(タンキ)待ち",
                "heading": "『5』持ちでの『5』待ち  2符"
            },
            {
                "imageUrl": waitingInstruction6,
                "text": "ノベタン(単騎待ち+面子)待ち",
                "heading": "『3･4･5･6』持ちでの『3･6』待ち等  2符"
            },
        ]
    }
    return (
        <div className={styles['bg-dark']}>
            <Cover/>
            <div className={`${styles['ms-5']} ${styles['me-5']}`}>
                {/*<h3 className={styles['text-left']}>Breadcrumb</h3>*/}
                <Breadcrumbs/>
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
                <h1 className={`${styles['text-left']} ${styles['heading-medium']} ${styles['pt-6']}`}>符計算</h1>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}>麻雀において符計算とは、慣れてないうちは特にややこしいことと思うことでしょう</p>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}>しかし実際に読み解いていくとそこまで複雑なものではありません。</p>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}> 点数の計算においても必ず使用するものなので、この機会に覚えていきましょう！</p>
                <ul className={`${styles['custom-bullet']} ${styles['pt-6']} ${styles['pb-2']}`}>
                    <li className={`${styles['text-left']} ${styles['heading-small']} ${styles['ps-6']}`}>符計算って何に使うの？</li>
                </ul>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}>符計算は点数計算をするために必要な”符"を算出するための計算になります。</p>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}>点数は、符と翻数によって決まるために、点数を計算するにあたって、符計算は欠かせないものとなります。</p>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}> 符計算を使用した点数計算は別述しますので、ここでは割愛します。</p>
                <ul className={`${styles['custom-bullet']} ${styles['pt-6']} ${styles['pb-6']}`}>
                    <li className={`${styles['text-left']} ${styles['heading-small']} ${styles['ps-6']}`}>基本的な符計算の考え方</li>
                </ul>
                <div className={`${styles['para-highlight']} ${styles['mt-5']} `}>
                    <div className={`${styles['equation']} `}>
                        <div className={`${styles['equation-detail']}`}>
                            <p>基本符</p>
                            <p>20符か30符</p>
                        </div>
                        <p className={`${styles['equation-sign']}`}>+</p>
                        <div className={`${styles['equation-detail']}`}>
                            <p>メンツの符</p>
                        </div>
                        <p className={`${styles['equation-sign']}`}>+</p>

                        <div className={`${styles['equation-detail']}`}>
                            <p>アタマの符</p>
                            <p>役牌なら2符</p>
                        </div>
                        <p className={`${styles['equation-sign']}`}>+</p>

                        <div className={`${styles['equation-detail']}`}>
                            <p>待ちの形</p>
                            <p>待ちの形2符</p>
                        </div>
                        <p className={`${styles['equation-sign']}`}>+</p>

                        <div className={`${styles['equation-detail']}`}>
                            <p>ツモの時だけ 2符</p>
                        </div>
                        <p className={`${styles['equation-sign']}`}>=</p>

                        <div className={`${styles['equation-detail']}`}>
                            <p>アガリの符</p>
                        </div>
                    </div>
                    <div className={`${styles['equation']} ${styles['pt-6']}`}>
                        <div className={`${styles['equation-result']}`}>
                            <p>アタマの符</p>
                            <p>役牌なら2符</p>
                        </div>
                        <div className={`${styles['equation-result']} ${styles['ms-6']}`}>
                            <p>待ちの形</p>
                            <p>待ちの形2符</p>
                        </div>
                        <div className={`${styles['equation-result']} ${styles['ms-6']}`}>
                            <p>ツモの時だけ 2符</p>
                        </div>
                    </div>
                </div>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}>上記画像の計算式が符計算の全てになります。</p>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}> 和了形から、この式に当てはめて符の計算を行います。</p>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}> 符計算は全て切り上げになるので、合計値が32だった場合は40符として扱われます。</p>
                <h1 className={`${styles['text-left']} ${styles['heading-medium']} ${styles['pt-6']} ${styles['para-highlight']}`}>基本符(副底)</h1>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}>副底(フーテイ＝基本点＝基本符)とは、プレイヤーが
                    和了した場合に必ず与えられる加符点のことで、必ず20符あります。</p>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}>基本点や基本符とも言います。
                    麻雀ではどのような手で和了したとしても最低20符から計算されます。</p>
                <h1 className={`${styles['text-left']} ${styles['heading-medium']} ${styles['pt-6']} ${styles['para-highlight']}`}>門前加符(メンゼンカフ)とツモ符(ツモフ)</h1>
                <ul className={`${styles['custom-bullet']} ${styles['pt-6']} ${styles['pb-2']}`}>
                    <li className={`${styles['text-left']} ${styles['heading-small']} ${styles['ps-6']}`}>門前加符</li>
                </ul>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}>これは、門前で手牌を揃えてロン和了した場合に付与される加符点です。これを門前加符（メンゼンカフ）
                    といい、10符加算されます。</p>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}> 門前とは、他家の捨牌でポン、チー、明カンなどによる鳴きをせずに自力で手牌を揃えることです。</p>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}> つまり、鳴きがあると門前加符は付与されず0符となりますので覚えておきましょう。</p>

                <ul className={`${styles['custom-bullet']} ${styles['pt-6']} ${styles['pb-2']}`}>
                    <li className={`${styles['text-left']} ${styles['heading-small']} ${styles['ps-6']}`}>ツモ符</li>
                </ul>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}>ツモ符とはツモで和了した場合に付与される加符点です。これをツモ符(ツモフ)といい、2符加算されます。ポン・チー・明カンなど、鳴いてもツモ符は加算されます。</p>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}>※平和(ピンフ)の役が付いているピンフツモの場合、ツモ符は加算されず、一律20符となります。七対子(チートイツ)の場合も例外として扱われます。</p>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}> これは一律25符となります。</p>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}> この二つのみ例外になるので必ず覚えておきましょう。</p>
                <h1 className={`${styles['text-left']} ${styles['heading-medium']} ${styles['pt-6']} ${styles['para-highlight']}`}>メンツの種類による加符点</h1>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}>各メンツの種類により、加符点が変わります。順子は0符ですが、刻子や槓子は牌の種類や鳴きの有無によって2符から32符まで付与されます。</p>
                <ul className={`${styles['custom-bullet']} ${styles['pt-6']} ${styles['pb-2']}`}>
                    <li className={`${styles['text-left']} ${styles['heading-small']} ${styles['ps-6']}`}>メンツの種類</li>
                </ul>
                <MenzKind kind={kind}/>
                <ul className={`${styles['custom-bullet']} ${styles['pt-6']} ${styles['pb-2']}`}>
                    <li className={`${styles['text-left']} ${styles['heading-small']} ${styles['ps-6']}`}>雀頭の種類による加符点</li>
                </ul>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}>雀頭をどの牌で揃えるかにより加符点が変わります。役牌で雀頭を作った場合は2符、それ以外は0符となります。</p>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}>役牌で雀頭を作った場合は2符、それ以外は0符となります。</p>
                <p className={`${styles['text-left']} ${styles['para-medium']} ${styles['pt-6']}`}> BAQTO麻雀では、連風牌を雀頭にすると4符になります。</p>
                <Instruction instructions={accordingToPointInstructions}/>

                <h1 className={`${styles['text-left']} ${styles['heading-medium']} ${styles['pt-6']} ${styles['para-highlight']}`}>待ちの種類による加符点</h1>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}>聴牌時、待ちの形の種類によって与えられる加符点です。どのような待ちの形となっているかで加符点が異なります。</p>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}>タンキ待ちやペンチャン待ちなど和了牌が一種類の場合は2符、リャンメン待ちなど和了牌が二種類以上の場合は0符です。しかし、ノベタン待ちのように和了が二種類あってもタンキ待ちとして捉えることのできる待ちでは、2符が加算されます。</p>
                <ul className={`${styles['custom-bullet']} ${styles['pt-6']} ${styles['pb-2']}`}>
                    <li className={`${styles['text-left']} ${styles['heading-small']} ${styles['ps-6']}`}>待ちの種類</li>
                </ul>
                <Instruction instructions={waitingInstructions}/>
                <SpecialNote note={
                    <>
                        <h4 className={`${styles['text-left']} ${styles['heading-small']}  ${styles['pt-6']} `}> ピンフツモと七対子の符</h4>
                        <p className={`${styles['text-left']} ${styles['para-medium']}`}>ピンフツモは一律20符、七対子(チートイツ)は一律25符となります。ツモ和了で
                            平和(ピンフ)の役が付いている場合は、一律20符で決まりです。</p>
                        <p className={`${styles['text-left']} ${styles['para-medium']}`}>。七対子も一律25符で決まりです。</p>
                        <p className={`${styles['text-left']} ${styles['para-medium']}`}>ピンフの元々の定義は｢符が付かないアガり｣であり、ツモとピンフの役を複合させることで一律20符の扱いとなっています。七対子は元々アメリカで発祥した役であり、正式に採用される経緯の中で25符2飜とするルールが定着したそうです。</p>
                    </>
                }/>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}>以上が符計算の概要となります。</p>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}>なかなか、一回見ただけでは覚えられないものです。</p>
                <p className={`${styles['text-left']} ${styles['para-medium']}`}> まずは、『どのような和了の形で符が加算されるのか』を確実に覚えることが大切となりますので </p>
                <p className={`${styles['text-left']} ${styles['para-medium']} `}> 手牌を見て意識することが必要になってきます。 </p>
                <div className={`${styles['pt-6']} ${styles['pb-6']} ${styles['button-large']}`}>
                    <h1 className={`${styles['heading-medium']}`}>麻雀をプレイする</h1>
                    <h1 className={`${styles['heading-small']}`}>Play MAHJONG</h1>
                </div>
            </div>
        </div>
    );
};

