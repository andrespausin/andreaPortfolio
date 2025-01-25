import './header.css';

export function Header() {
    return (
        
            <div className= "header-container">
                <div className="inner-header">
                    <div className="logo-container">
                        <h1>MY<span>SITE</span></h1>
                    </div>
                    <ul className="navigation">
                        <a><li>Home</li></a>
                        <a><li>About</li></a>
                        <a><li>Services</li></a>
                        <a><li>Portfolio</li></a>
                        <a><li>Contact</li></a>
                    </ul>
                </div>
            </div>
    )
}