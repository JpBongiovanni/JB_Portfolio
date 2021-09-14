import NavBar from '../Nav-Bar';
import Header from '../Header';
import CsvNav from '../Blog/blog_images/csv_nav.jpg';
import './csv_gen.css';
import CsvGif from '../Blog/blog_images/csv_gen.gif';
import CsvImg from '../Blog/blog_images/csv.jpg';
import CsvCode from '../Blog/blog_images/csv_code.jpg';

const CsvGen = () => {
    return (
        <body>
            <Header></Header>
            <NavBar></NavBar>
            <div className="blog container">
                <div className="header p-5 mt-5">
                    <h1>World Deity Database</h1>
                    <h3>09/08/2021</h3>
                    <h2>CSV Generator</h2>
                    <img className="csv_image" src={CsvNav} />
                </div>
                <div className="body_text">
                    <p className="tab">This function was a later addition. It is not a big change, nor does it take full advantage of Python's functionality or PANDAS. However, it does enable a user export data in the PostgreSql to their own computer</p>
                    <img className="fe_image d-flex justify-content-center" src={CsvGif} />
                    <p className="tab">As the above gif demonstrates, all that the user needs to do is to click the "Generate CSV" button in the NavBar to start the process</p>
                    <img className="fe_image d-flex justify-content-center" src={CsvImg} />
                    <p className="tab">
                        Once the program has run its course, the CSV can be opened, manipulated, imported to another database, and saved.
                    </p>
                    <img className="fe_image d-flex justify-content-center" src={CsvCode} />
                    <p className="tab">
                        The function in views.py returns an HttpResponse that takes the content type of "text/csv." Because every column in my database is not really necessary to export (like contributor id, or upload date), the function writes rows based on the selected columns, skipping over the ones not selected. Check out the full code on <a href="https://github.com/JpBongiovanni/WorldDeityDatabase/blob/main/wiki_app/views.py"><strong>GitHub</strong></a>.
                    </p>
                </div>
            </div>
            <NavBar></NavBar>
        </body>
    )
}

export default CsvGen