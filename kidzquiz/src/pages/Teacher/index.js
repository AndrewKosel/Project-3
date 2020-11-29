import { Component } from 'react';
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import TeacherQuizBank from "../../components/TeacherQuizBank";
import TeacherQuizCard from "../../components/TeacherQuizCard";

class MakeQuiz extends Component {


    render() {
        return (

            <Wrapper>
                <MakeQuiz />
                <TeacherQuizBank>
                    <TeacherQuizCard />
                </TeacherQuizBank>
                <Footer />
            </ Wrapper>

        );
    }
}

export default MakeQuiz;