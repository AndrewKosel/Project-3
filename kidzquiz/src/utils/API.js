import axios from "axios";

export default {
  // Create user
  createUser: function(body) {
    return axios.post("/api/signup", body)
  },
  // Log in User call
  loginUser: function() {
    return axios.post("/api/login");
  },
  // Deletes the book with the given id
  createQuiz: function(quizObject) {
    console.log("wtf")
    return axios.post("/api/user/quiz",quizObject);
    
  },
  // Create Questions
  createQuestion: function(questionObject) {
    return axios.post("/api/question/" + questionObject.QuizId, questionObject);
  },
  //Creates answers
  createAnswer: function(answerObject, QuestionId) {
    return axios.post("/api/answer/" + QuestionId, answerObject);
  },
  //Gets quizzes by user
  getUserQuiz: function(id) {
    return axios.get("/api/user/" + id);
  },
  //Get full quizzes with questions, answers.
  getQuiz: function(id) {
    console.log(id)
    return axios.get("/api/quiz/" + id);
  },
//delete full quizzes with questions, answers
  deleteQuiz: function(id) {
    return axios.delete("/api/quiz/" + id);
  },

  getAllQuizzes: function(){
    return axios.get("/api/quiz")
  },
//logout
  logoutUser: function() {
    return axios.get("/logout");
  }

};
