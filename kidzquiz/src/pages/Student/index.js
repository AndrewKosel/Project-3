import { Component } from 'react';
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import StudentSubject from "../../components/StudentSubject";
import StudentQuizBank from "../../components/StudentQuizBank";
import StudentQuizCard from "../../components/StudentQuizCard";


class Subject extends Component {

    handleSubmit = event => {
        event.preventDefault()
    }

    render() {
        return (

            <Wrapper>
                <Header />
                <StudentSubject />
                <StudentQuizBank>
                    <StudentQuizCard />
                </StudentQuizBank>
                <Footer />
            </Wrapper>

        );
    }
}

export default Subject;