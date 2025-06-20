// src/data/mockUserData.js
export const userData = {
  name: "John",
  enrolledCourses: 8,
  hoursLearned: 124,
  certificates: 3,
  streakDays: 15,
  continueLearning: [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      progress: 65,
      hoursLeft: 12,
      image: "https://i.postimg.cc/4dC3TSQs/web-dev.jpg", // <- uploaded image link
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass",
      progress: 30,
      hoursLeft: 18,
      image: "https://i.postimg.cc/Gtt7fMM5/uiux.jpg", // <- uploaded image link
    },
  ],
};
