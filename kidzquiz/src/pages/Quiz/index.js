import { Component } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TakeQuiz from "../../components/TakeQuiz";
import Wrapper from "../../components/Wrapper";

class Quiz extends Component {



    render() {
        return (

            <Wrapper>
                <Header />
                <TakeQuiz />
                <Footer />
            </Wrapper>

        );
    }
}

export default Quiz;