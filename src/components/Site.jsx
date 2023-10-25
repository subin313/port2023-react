import React from "react";

const Site = () =>{
    return (
    <section id="site">    
        <div className="site__inner">
            <h2 className="site__title">Site coding<em>나의 작업물</em></h2>
            <div className="site__wrap">
                <article className="site__item s1">
                    <span className="num">1.</span>
                    <div className="text">
                        <div>Make</div>
                        <div>site compliant with</div>
                        <div>webstandard</div>
                    </div>
                    <h3 className="title">웹 표준을 준수한 사이트 제작</h3>
                    <div className="btn">
                        <a href="/">code</a>
                        <a href="/">view</a>
                    </div>
                    <div className="info">
                        <span>site coding</span>
                        <span>production period : two days</span>
                        <span>use stack : html5/css3, CSS Variable, Vite</span>
                    </div>
                </article>
                <article className="site__item s2">
                    <span className="num">2.</span>
                    <div className="text">
                        <div>Make</div>
                        <div>site compliant with</div>
                        <div>react.js</div>
                    </div>
                    <h3 className="title">리엑트를 이용한 사이트 제작</h3>
                    <div className="btn">
                        <a href="/">code</a>
                        <a href="/">view</a>
                    </div>
                    <div className="info">
                        <span>site coding</span>
                        <span>production period : two days</span>
                        <span>use stack : html5/css3, CSS Variable, Vite</span>
                    </div>
                </article>
                <article className="site__item s3">
                    <span className="num">3.</span>
                    <div className="text">
                        <div>Make</div>
                        <div>site compliant with</div>
                        <div>vue.js</div>
                    </div>
                    <h3 className="title">뷰를 이용한 사이트 제작</h3>
                    <div className="btn">
                        <a href="/">code</a>
                        <a href="/">view</a>
                    </div>
                    <div className="info">
                        <span>site coding</span>
                        <span>production period : two days</span>
                        <span>use stack : vue.js, CSS Variable, Vite</span>
                    </div>
                </article>
                <article className="site__item s4">
                    <span className="num">4.</span>
                    <div className="text">
                        <div>Make</div>
                        <div>site compliant with</div>
                        <div>vue.js</div>
                    </div>
                    <h3 className="title">넥스트를 이용한 사이트 제작</h3>
                    <div className="btn">
                        <a href="/">code</a>
                        <a href="/">view</a>
                    </div>
                    <div className="info">
                        <span>site coding</span>
                        <span>production period : two days</span>
                        <span>use stack : nest.js, CSS Variable, Vite</span>
                    </div>
                </article>
            </div>
        </div>
    </section>
    );
};

export default Site;
