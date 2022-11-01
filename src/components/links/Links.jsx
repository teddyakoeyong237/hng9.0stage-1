import React from 'react';
import './links.css';

function Links() {

    const link1 = "https://twitter.com/teddyakoeyong";
    const link2 = "https://training.zuri.team/";
    const link3 = "http://books.zuri.team/";
    const link4 = "https://books.zuri.team/python-for-beginners?ref_id=teddyakoeyong";
    const link5 = "https://background.zuri.team/";
    const link6 = "https://books.zuri.team/design-rules";

    const gitlink = "https://github.com/teddyakoeyong237";

    return (
        <>
            <div className='links'>
                <div className='container'>
                    <a
                        className="link_button"
                        id='twitter'
                        href={link1}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Twitter Link
                    </a>

                    <a
                        className="link_button"
                        id='btn__zuri'
                        href={link2}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Zuri Team
                    </a>

                    <a
                        className="link_button"
                        title='This where you find books about design and coding'
                        id='books'
                        href={link3}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Zuri Books
                    </a>
                    <a
                        className="link_button"
                        title='Where you feature the book as if you were selling it'
                        id='book__python'
                        href={link4}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Python Books
                    </a>

                    <a
                        className="link_button"
                        title='Where you pitch a service for doing background checks on coders'
                        id='pitch'
                        href={link5}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Background Check for Coders
                    </a>

                    <a
                        className="link_button"
                        title='Where you pitch the free design book offered by Zuri'
                        id='book__design'
                        href={link6}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Design Books
                    </a>
                        
                </div>
            </div>
            <div className="icon_container">
                <div className="link_icons">
                    <img className="link_icon" src="/images/slack.ico" alt="Slack_profile" />
                    <a
                        href={gitlink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="link_icon" src="/images/github.ico" alt="Github_profile" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Links;
