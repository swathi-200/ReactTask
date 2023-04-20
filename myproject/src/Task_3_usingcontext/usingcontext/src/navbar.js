import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import ThemeContext from './Context';
const { Header, Content, Footer } = Layout;
const NavBar = () => {
    const [{theme,isDark},ToggleTeme] = React.useContext(ThemeContext);
  return (
    <>
    <Layout>
       <Content>
        <div className='backgrund'>
            <div className='content'>
                <Header>
                    <div className="logo">
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Products</a>
                        <a href="">Services</a>
                            <div className='text-button'>
                                <div className='input-text'>
                                    <input type="text"/>
                                </div>
                                <div className='search-button'>
                                    <button >Search</button>
                                </div>
                                <div className='dark-light'>
                                    <button onClick={ToggleTeme}>Mode</button>
                                    </div>
                            </div>
                    </div>
                </Header>
                <div className='alignment-text'>
                    <div className='content-filed'>
                        <h1>Dramatically Engage</h1>
                    </div>
                    <div className='para-text'>
                        <p>objectively innovate empowered manufactured products whereas parallel platforms</p>
                    </div>
                    <div className='engage-buttons'>
                        <button>Engage</button>
                    </div>
                </div>
                      <div className='subcontent' style={{backgroundColor:theme.backgroundcolor,color:theme.color}}>
                        {console.log(theme.backgroundColor)}
                         
                    <div className='heading'>
                        <div className='heading-1'>
                            <h2>Superior colloboration</h2><h3>Visualise Quality</h3>
                        </div><hr></hr>
                        <div className='paragraph-1'>
                             <p>What I discovered was that the goal of all teaching should be to help students make neural connections – the basis for all learning in the brain</p>
                       </div>
                    </div>
                    <div className='paratext'>
                            <div className='boxes'>
                                <p className='para-2'>700X300</p>
                            </div>
                            <div className='boxes'>
                                <p className='para-2'>700X300</p>
                            </div>
                            <div className='boxes'>
                                <p className='para-2'>700X300</p>
                            </div>
                    </div>
                </div>
                
            </div>
           
        </div>
      </Content> 
 </Layout>
 
    </>
  );
};
export default NavBar;
