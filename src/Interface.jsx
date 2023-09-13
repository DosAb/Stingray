import useStore from './stores/useStore'
import Experience from './Experience'

export default function Interface()
{

    return <>
   
        <div className="content">
            <div className="navbar">
                <div className="navigation">
                    <h2>STINGRAY</h2>
                    <ul>
                        <li><a href="#!">Collective</a></li>
                        <li><a href="#!">Ecofuture</a></li>
                        <li><a href="#!">Roadmap</a></li>
                        <li><a href="#!">More</a></li>
                    </ul>
                </div>
                <div className="sign">
                    <button className="stroke-btn">$CTZN</button>
                    <button className="btn">launch app</button>
                </div>
            </div>
            <div className="hero">
                <div className="header">
                    <h1>STINGRAY</h1>
                    <div className="description">
                        <h2>beautifull and mysterious creatures of deep ocean</h2>
                        <p>A collection of all R&D projects we've made at Lusion in the past and in the future. Keep the focus inthese elements</p>
                    </div>
                    <div className="description second-description">
                        <h2>become an explorer</h2>
                        <p>A working example is provided at the bottom of the page in case you get stuck and need help.</p>
                        <button className="btn">explore</button>
                    </div>
                </div>
                <div className="ecofuture">
                    <h2>we dream of an ecofuture</h2>
                    <div className="info">
                        <div className='line'></div>
                        <div className="container">
                            <p>Check your proxy settings or contact your network administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server</p>
                            <p>If it is already listed as a program allowed to access the network, try removing it from the list and adding it again</p>
                        </div>
                    </div>
                    <button className="btn">see more</button>
                </div>
                <div className="roadmap">
                    <h2>STINGRAY</h2>
                    <div className="list-container">
                        <div className="list">
                            <h4>obtainable plarform</h4>
                            <h4>Thee Sacred Souls</h4>
                            <h4>DIRECTORS</h4>
                        </div>
                        <div className="list">
                            <h4>two scenes</h4>
                            <h4>cameras to render</h4>
                            <h4>this way</h4>
                            <h4>address and code</h4>
                            <h4>different functions</h4>
                        </div>
                        <div className="list">
                            <h4>Intelligent Recommendation</h4>
                            <h4>Accompanying case</h4>
                            <h4>same class</h4>
                            <h4>Java calls</h4>
                            <h4>Linux configuration</h4>
                        </div>
                        <div className="list">
                            <h4>[Endless]</h4>
                            <h4>Masayoshi Takanaka</h4>
                            <h4>display object</h4>
                            <h4>number of events</h4>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="social-media">
                        <h3>social media</h3>
                        <a href="#!">instagram</a>
                        <a href="#!">twitter</a>
                        <a href="#!">facebook</a>
                    </div>
                    <div className="contact">
                        <h3>enquiries</h3>
                        <h4>giovanni giorgio</h4>
                        <h4>giovannigiorgio@mail.com</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className="box">
            <Experience />
        </div>

    </>
}