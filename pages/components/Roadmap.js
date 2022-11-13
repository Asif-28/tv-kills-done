import React from "react";
import styles from './roadmap.module.css'


export default function Roadmap() {

    // const styles.opacityChange = {
    //     willChange: opacity, 
    //     opacity: 0.25
    // }

    // const styles.backgroundChange={
    //     willChange: "background",
    //     backgroundColor: "rgb(65, 65, 65)"
    // }

    return (
        <div class={styles.section_timeline}>
            <div class={styles.container}>
                <div class={styles.timeline_component}>
                    <div class={styles.timeline_progress}>
                        <div class={styles.timeline_progress_bar}></div>
                        {/* <div class={styles.timeline_progress_bar}></div>
                        <div class={styles.timeline_progress_bar}></div>
                        <div class={styles.timeline_progress_bar}></div>
                        <div class={styles.timeline_progress_bar}></div> */}
                        {/* <div class={styles.timeline_progress_bar}></div> */}
                        {/* <div class={styles.timeline_progress_bar}></div> */}
                        {/* <div class={styles.timeline_progress_bar}></div> */}

                    </div>
                    <div
                        data_w_id="d5abcf1f_3370_3eea_ccfd_66f076babfe0"
                        class={styles.timeline_item}
                    >
                        <div
                            id="w_node_d5abcf1f_3370_3eea_ccfd_66f076babfe1_d8bceb12"
                            class={styles.timeline_left}
                        // style={styles.opacityChange}
                        >
                            <div class={styles.timeline_date_text}>Phase 01</div>
                        </div>
                        <div
                            id="w_node_d5abcf1f_3370_3eea_ccfd_66f076babfe4_d8bceb12"
                            class={styles.timeline_centre}
                        >
                            <div
                                class={styles.timeline_circle}
                            // style={styles.backgroundChange}
                            ></div>
                        </div>
                        <div
                            id="w_node_d5abcf1f_3370_3eea_ccfd_66f076babfe6_d8bceb12"
                            class={styles.timeline_right}
                        // style={styles.opacityChange}
                        >
                            <div class={styles.margin_bottom_xlarge}>
                                <div class={`${styles.timeline_text} ${styles.sub}`}>
                                    {/* Twitter Launch:- */}
                                </div>
                                <div class={`${styles.timeline_text} ${styles.paragraph_light} ${styles.left}`}>
                                    Launching the Tvkill’s tv into the twitter space.
                                    Community building:-
                                    Building a strong organic Tvkills community in the CNFT Space.
                                    Showlist:-
                                    Our very own version of whitelist which is given to the supporters and for the giveaway winners in different activities.&nbsp;<br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        data_w_id="0488106f_ce92_9b7b_01c3_8ad75f3f5e35"
                        class={styles.timeline_item}
                    >
                        <div
                            id="w_node__0488106f_ce92_9b7b_01c3_8ad75f3f5e36_d8bceb12"
                            class={styles.timeline_left}
                        // style={styles.opacityChange}
                        >
                            <div class={styles.timeline_date_text}>Phase 02</div>
                        </div>
                        <div
                            id="w_node__0488106f_ce92_9b7b_01c3_8ad75f3f5e39_d8bceb12"
                            class={styles.timeline_centre}
                        >
                            <div
                                class={styles.timeline_circle}
                            // style={ styles.backgroundChange }
                            ></div>
                        </div>
                        <div
                            class={styles.timeline_right}
                        // style={styles.opacityChange}
                        >
                            <div class={styles.margin_bottom_medium}>

                                {/* for heading */}
                                <div class={`${styles.timeline_text} ${styles.sub}`}></div>
                                <div class={`${styles.timeline_text} ${styles.paragraph_light} ${styles.left}`}>   
                                    Cultpass:-
                                    Cultpass is our way of Honouring the hardcore supporters by inviting them to our TV CULT. Holding Cultpass gives you special benefits and exclusive access.<br />
                                    Website:-
                                    Revealing the official website of TVKills.
                                    Discord launch:-
                                    The official launch of TVKills discord server.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        data_w_id="5b7ae63b_6f00_e542_a023_96ea5c4a96e3"
                        class={styles.timeline_item}
                    >
                        <div
                            id="w_node__5b7ae63b_6f00_e542_a023_96ea5c4a96e4_d8bceb12"
                            class={styles.timeline_left}
                        // style={styles.opacityChange}
                        >
                            <div class={styles.timeline_date_text}>Phase 03</div>
                        </div>
                        <div
                            id="w_node__5b7ae63b_6f00_e542_a023_96ea5c4a96e7_d8bceb12"
                            class={styles.timeline_centre}
                        >
                            <div
                                class={styles.timeline_circle}
                            // style={styles.backgroundChange}
                            ></div>
                        </div>
                        <div
                            class={styles.timeline_right}
                        // style={styles.opacityChange}
                        >
                            <div class={styles.margin_bottom_medium}>

                            
                                {/* for heading */}

                                <div class={`${styles.timeline_text} ${styles.sub}`}>
                                    The Lottery &amp;
                                </div>
                                <div class={`${styles.timeline_text} ${styles.paragraph_light} ${styles.left}`}>
                                    TVKills Mint:-
                                    Big day the official minting of TVKills.&nbsp;<br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        data_w_id="e0f4f25e_22f1_da39_65d5_a453ca30c731"
                        class={styles.timeline_item}
                    >
                    </div>
                    <div class={styles.overlay_fade_bottom}></div>
                    <div class={styles.overlay_fade_top}></div>
                </div>
            </div>
        </div>
    );
}
