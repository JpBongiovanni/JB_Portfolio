import NavBar from '../NavBar/Nav-Bar';
import Header from '../Header/Header';
import metamask from './blog_images/metamask.jpg';
import simpleStorage from './blog_images/simple_storage.jpg';
import storageFactory from './blog_images/storage_factory.jpg';


const SolidityPractice = () => {
    return (
        <body>
            <Header></Header>
            <NavBar></NavBar>
            <div className="blog container">
                <div className="header p-5 mt-5">
                    <h1>Blockchain</h1>
                    <h3>09/10/2021</h3>
                    <h2>Solididty Practice</h2>
                </div>
                <div className="body_text">
                    <p className="tab">My dive into Blockchain and Solidity is aided by <a className="text-decoration-underline" href="https://www.youtube.com/watch?v=M576WGiDBdQ">freeCodeCamp.com's 16 hour tutorial on Youtube.</a> The start of the tutorial answered the questions of "What is a blockchain?" and "How are blockchains used?" There was also some discussion on the history of Blockchain technology, and where it is going in the future</p>
                    <img className="fe_image d-flex justify-content-center" src={metamask}/>
                    <p className="tab">After the introduction, I created a Eth text account using Metamax. Metamax provides users with a free software wallet for all Eth based currency, and gives users test accounts to practice trading crypto.</p>
                    <img className="fe_image d-flex justify-content-center" src={simpleStorage}/>
                    <p className="tab">
                        After creating the test Metamax account, I dove into Solidity using <a className="text-decoration-underline" href="https://remix.ethereum.org/">remix.ethereum.org.</a>Remix provides users with a Solidity text editor and UI for creating contracts for blockchain. Solidity is sort of a mix of Javascript and C#, with some React/Stencil aspects. My first contract was called "SimpleStorage." As the name implies it was a simple contract that stored a persons name and favorite number. It included two main functions called "store" and "retrieve."
                    </p>
                    <img className="fe_image d-flex justify-content-center" src={storageFactory}/>
                    <p className="tab">
                        My second contract called "storageFactory" inherited the functions of "simpleStorage." It enabled users to create contracts and store each one in an index. The index could then be called to retrieve information about each contract depending on what is called.
                    </p>
                </div>
            </div>
            <NavBar></NavBar>
        </body>
    )
}

export default SolidityPractice