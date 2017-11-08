// C.M - imported the Grid elements and react for the page
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {BookInput, BookTextArea} from "../../components/BookForm";
import {BookBtn} from "../../components/BookBtn";
// import {BookSection} from "../../components/BookSection";
// import {ArticleInput, ArticleTextArea} from "../../components/ArticleForm";
// import {ArticleBtn} from "../../components/ArticleBtn";
import {ProjectTextArea} from "../../components/ProjectOutline";
import {AddSectionBtn} from "../../components/AddSectionBtn";
import { Col, Row, Container, Article, Section } from "../../components/Grid";
import {Nav} from "../../components/Nav";
import API from "../../utils/API";

// C.M. - Setup the general outline of the Home page for the Books and Project sections
class Home extends Component {
    state = {
        currentUser: "",
        title: "",
        author: "",
        publisher: "",
        pubDate: "",
        pageNum: "",
        quote: "",
        projectId: "",
        outline: ""
        // bquoteResult: ""
    }

    // componentDidMount() {
    //     this.loadBookQuotes();
    //   }
    
    
    //   createBookQuotes = () => {
    //     API.createbQuote()
    //       .then(res =>
    //         this.setState({ books: res.data, title: "", author: "", synopsis: "" })
    //       )
    //       .catch(err => console.log(err));
    //   };
    
    //   // Deletes a book from the database with a given id, then reloads books from the db
    //   deleteBook = id => {
    //     API.deleteBook(id)
    //       .then(res => this.loadBooks())
    //       .catch(err => console.log(err));
    //   };
    
      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      // When the form is submitted, use the API.saveBook method to save the book data
      // Then reload books from the database
      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title) {
          API.createbQuote({
            title: this.state.title,
            author: this.state.author,
            publisher: this.state.publisher,
            pubDate: this.state.pubDate,
            pageNum: this.state.pageNum,
            quote: this.state.quote,
            projectId: this.state.projectId
          })
    //         .then(res => this.loadBooks())
            .catch(err => console.log(err));
        }
      };
          // Then reload books from the database
    handleFormSubmitOutline = event => {
        event.preventDefault();
            if (this.state.outline) {
                API.createOutline({
               outline: this.state.outline,
               projectId: this.state.projectId
              })
        //         .then(res => this.loadBooks())
                .catch(err => console.log(err));
            }
          };
    // C.M. - should return the Books section on the left side of the screen and current project on the right side of the screen
    render() {
        return(
        <div>
        <Nav />
        <Container>
            <Row>
                <Col size="md-4" className="book-list">
                    <Section>
                    Books
                    <br></br>
                    <BookInput 
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Book Title (required)"
                    />
                    <BookInput 
                    value={this.state.author}
                    onChange={this.handleInputChange}
                    name="author"
                    placeholder="Author Name (required)"
                    />
                    <BookInput 
                    value={this.state.publisher}
                    onChange={this.handleInputChange}
                    name="publisher"
                    placeholder="Publisher (required)"
                    />
                    <BookInput 
                    value={this.state.pubDate}
                    onChange={this.handleInputChange}
                    name="pubDate"
                    placeholder="Publication Date (required)"
                    />
                    <BookInput 
                    value={this.state.pageNum}
                    onChange={this.handleInputChange}
                    name="pageNum"
                    placeholder="Page Number (required)"
                    />
                    <BookTextArea 
                    value={this.state.quote}
                    onChange={this.handleInputChange}
                    name="quote"
                    placeholder="Enter the quote here (required)"
                    />
                    <BookInput 
                    value={this.state.projectId}
                    onChange={this.handleInputChange}
                    name="projectId"
                    placeholder="Enter the project name here (required)"
                    />
                    <BookBtn disabled= {!(this.state.title)}
                     onClick= {this.handleFormSubmit}/>

                  
                        <Article>
                            {/* <BookSection> */}
                            Each Book Goes Here
                            {/* </BookSection>  */}
                        </Article>
                    </Section>
                </Col>
                <Col size="md-6" className="ouline-list">
                    <Section>
                        Essay Outline
                        <Article>
                            <BookInput 
                            value={this.state.projectId}
                            onChange={this.handleInputChange}
                            name="projectId"
                            placeholder="Enter the project name here (required)"/>
                            <ProjectTextArea 
                            value={this.state.outline}
                            onChange={this.handleInputChange}
                            name="outline"/>
                            <br></br>
                            <AddSectionBtn disabled= {!(this.state.outline)}
                            onClick= {this.handleFormSubmitOutline}/>
                        </Article>
                    </Section>
                </Col>
            </Row>
        </Container>
        </div>
        );
    };
};

export default Home;