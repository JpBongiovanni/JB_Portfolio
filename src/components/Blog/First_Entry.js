import NavBar from '../Nav-Bar';
import Header from '../Header';
import './First_Entry.css';
import categories from './blog_images/categories.jpg';
import categoriesUI from './blog_images/categoriesUI.gif';
import categoriesMap from './blog_images/categories_map.jpg';
import blogApp from './blog_images/BlogApp.jpg';
import entries from './blog_images/entries.jpg';
import entryMap from './blog_images/entry_map.jpg';

const FirstEntry = () => {
    return (
        <body>
            <Header></Header>
            <NavBar></NavBar>
            <div className="blog container ">
                <div className="header p-5 mt-5">
                    <h1>First Entry</h1>
                    <h3>09/08/2021</h3>
                    <h2>Interactive Category Selection</h2>
                    <img className="fe_image d-flex justify-content-center" src={categories} />
                </div>
                <div className="body_text">
                    <p className="tab">The purpose of the Portfolio category on this website is to discuss highlight various UI compomponents implemented in the websites construction. For this purposes of this entry, I will be discussing the interactive category selection in the Blog section of this website. As seen in the above image in the red box.</p>
                    <img className="fe_image d-flex justify-content-center" src={categoriesUI} />
                    <p className="tab">The categories nav-bar basically makes it easier to browse different blog entries by topic. Clicking on the "Game Reviews" category will make all other Blog entries of a different category disappear. You can then view all the entries in that category organized by date, newest to oldest. Clicking the "All" category will bring back all blog posts.</p>
                    <div className="row">
                        <div className="col">
                            <img className="fe_image d-flex justify-content-center" src={blogApp} />
                        </div>
                        <div className="col">
                            <img className="fe_image d-flex justify-content-center" src={entries} />
                        </div>
                        <div className="col">
                            <img className="fe_image d-flex justify-content-center" src={entryMap} />
                        </div>
                        <div className="col">
                            <img className="fe_image d-flex justify-content-center" src={categoriesMap} />
                        </div>
                    </div>
                    <p className="tab">While not a backend databese, the data.js file houses all data necessary to render on to the corresponding React element. The entries.js file then takes all items in the data.js file, and maps them to corresponding variables in the Entries inline function. The map runs through each item and displays a block of code for each item. Since it runs much like a for loop, if a new entry is added to data.js, a corresponding render of a new blog title card will appear. The categories tag is handled much in the same way, except all the information is rendered as buttons that filter out all differing categories once it is clicked. The categories nav bar also responds to any new categories added. So in the future if I were to add a blog post with a completely new category, a new nav bar option would appear. To see the full code visit my <a href="https://github.com/JpBongiovanni/JB_Portfolio/tree/main/src/components/Blog">GitHub</a></p>
                </div>
            </div>
            
        </body>
    );
}

export default FirstEntry