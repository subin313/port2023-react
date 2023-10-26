import React from "react";

const footerText = [
    {
        link:"/",
        title:"youtube",
        desc:"유튜브에 오시면 더 많은 강의를 볼 수 있습니다.",
    },
    {
        link:"/",
        title:"github",
        desc:"깃헙에 들어오시면 모든 소스를 볼 수 있습니다.",
    },
    {
        link:"/",
        title:"tistory",
        desc:"티스토리에 들어오시면 좋은 정보 볼 수 있습니다.",
    },
    {
        link:"/",
        title:"gsap",
        desc:"GSAP를 공부하시고 오면 도움이 됩니다.",
    },
    {
        link:"/",
        title:"vite",
        desc:"비트 강의도 곧 오픈 예정입니다.."
    },
    {
        link:"/",
        title:"react",
        desc:"리액트 강의도 곧 오픈 예정입니다."
    },
    {
        link:"/",
        title:"vue",
        desc:"뷰 강의도 곧 오픈 예정입니다."
    },
    {
        link:"/",
        title:"next",
        desc:"넥스트 강의도 곧 오픈 예정입니다."
    },
]

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <div className="footer__text">
                    <span>subingood</span>
                    <span>@webs</span>
                </div>
                <div className="footer__info">
                    <div className="left">
                        <div className="title">
                            <a href="/">sign up</a>
                        </div>
                        <p>회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
                    </div>
                    <div className="right">
                        <h3>social</h3>
                            <ul>
                            {footerText.map((footer,key)=> (
                            <li  key={key}>
                                <a href={footer.link}>{footer.title}</a>
                                <em>{footer.desc}</em>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    @ 2023 subinggood<br/>
                    이 사이트는 리액트를 이용하여 제작하였습니다.
                </div>
            </div>
        </footer>
    );
};

export default Footer;