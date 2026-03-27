export const currentUser = {
  name: "Saira Goodman",
  usn: "1BM21CS143",
  branch: "Computer Science & Engineering",
  semester: 6,
  avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
};

export const dashboardStats = {
  sgpa: 9.2,
  cgpa: 8.9,
  onTimeRate: 96,
  onTimeChange: "+12%"
};

export const currentSchedule = [
  { 
    id: 1, 
    time: "9:00", 
    subject: "Software Engineering", 
    teacher: "Dr. Anil Kumar", 
    teacherAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&q=80", 
    location: "Room 304, CSE Block",
    topic: "Agile Methodologies & Scrum Framework",
    videoTitle: "Agile Scrum in 10 Minutes - Edureka",
    videoUrl: "https://youtube.com/watch?v=9TycLR0TqFA",
    textbook: "Pressman - Chapter 3: Agile Development",
    completed: true
  },
  { 
    id: 2, 
    time: "10:00", 
    subject: "Fullstack Development", 
    teacher: "Prof. Sunitha M", 
    teacherAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80", 
    location: "Lab 3, CSE Block",
    topic: "React Hooks Lifecycle & useEffect",
    videoTitle: "React useEffect Hook - Web Dev Simplified",
    videoUrl: "https://youtube.com/watch?v=0ZJgIjIuY7U",
    textbook: "React Docs - Main Concepts: Hooks",
    completed: true
  },
  { 
    id: 3, 
    time: "11:15", 
    subject: "Computer Networks", 
    teacher: "Dr. Ravi K", 
    teacherAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80", 
    location: "Room 305, CSE Block",
    topic: "Distance Vector Routing Algorithm",
    videoTitle: "Distance Vector Routing Explained - Neso Academy",
    videoUrl: "https://youtube.com/watch?v=1bXyG22Ptyg",
    textbook: "Kurose & Ross - Chapter 5: Network Layer",
    completed: false
  },
  { 
    id: 4, 
    time: "12:15", 
    subject: "Machine Learning", 
    teacher: "Prof. Priya S", 
    teacherAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80", 
    location: "Room 306, CSE Block",
    topic: "Gradient Descent Mathematical Intuition",
    videoTitle: "Gradient Descent, Step-by-Step - StatQuest",
    videoUrl: "https://youtube.com/watch?v=sDv4f4s2SB8",
    textbook: "Pattern Recognition (Bishop) - Chapter 5.2",
    completed: false
  }
];

export const allTasks = [
  { 
    id: 1, 
    title: "Complete SRS Document for mini-project", 
    subject: "Software Engineering", 
    status: "To do", 
    date: "Jun 8", 
    comments: 7, 
    progress: 0 
  },
  { 
    id: 2, 
    title: "Build a React Dashboard clone", 
    subject: "Fullstack Development", 
    status: "In progress", 
    date: "Jun 3", 
    comments: 0, 
    progress: 35 
  },
  { 
    id: 3, 
    title: "Study gradient descent mathematical proof", 
    subject: "Machine Learning", 
    status: "In progress", 
    date: "Jun 2", 
    comments: 0, 
    progress: 85 
  },
  { 
    id: 4, 
    title: "Implement Distance Vector Routing in NS2", 
    subject: "Computer Networks", 
    status: "Done", 
    date: "May 28", 
    comments: 2, 
    progress: 100 
  }
];

export const mockMarks = [
  { id: 1, subject: "Software Engineering", internal: 38, external: 55, total: 93, grade: "S" },
  { id: 2, subject: "Fullstack Development", internal: 35, external: 50, total: 85, grade: "A" },
  { id: 3, subject: "Machine Learning", internal: 39, external: 58, total: 97, grade: "S" },
  { id: 4, subject: "Computer Networks", internal: 32, external: 45, total: 77, grade: "B" },
  { id: 5, subject: "Compiler Design", internal: 36, external: 52, total: 88, grade: "A" }
];

export const mockAttendance = [
  { 
    id: 1, 
    subject: "Software Engineering", 
    attended: 35, 
    total: 40, 
    percentage: 87.5,
    recentClasses: [
      { date: "Oct 24, 2026", status: "Present" },
      { date: "Oct 22, 2026", status: "Present" },
      { date: "Oct 20, 2026", status: "Absent" },
      { date: "Oct 18, 2026", status: "Present" }
    ]
  },
  { 
    id: 2, 
    subject: "Fullstack Development", 
    attended: 28, 
    total: 40, 
    percentage: 70.0,
    recentClasses: [
      { date: "Oct 24, 2026", status: "Absent" },
      { date: "Oct 23, 2026", status: "Absent" },
      { date: "Oct 19, 2026", status: "Present" },
      { date: "Oct 17, 2026", status: "Absent" }
    ]
  }, // Below 75%
  { 
    id: 3, 
    subject: "Machine Learning", 
    attended: 38, 
    total: 40, 
    percentage: 95.0,
    recentClasses: [
      { date: "Oct 23, 2026", status: "Present" },
      { date: "Oct 21, 2026", status: "Present" },
      { date: "Oct 16, 2026", status: "Present" },
      { date: "Oct 14, 2026", status: "Present" }
    ]
  },
  { 
    id: 4, 
    subject: "Computer Networks", 
    attended: 30, 
    total: 40, 
    percentage: 75.0,
    recentClasses: [
      { date: "Oct 25, 2026", status: "Present" },
      { date: "Oct 23, 2026", status: "Absent" },
      { date: "Oct 18, 2026", status: "Present" },
      { date: "Oct 15, 2026", status: "Absent" }
    ]
  },
  { 
    id: 5, 
    subject: "Compiler Design", 
    attended: 39, 
    total: 40, 
    percentage: 97.5,
    recentClasses: [
      { date: "Oct 25, 2026", status: "Present" },
      { date: "Oct 22, 2026", status: "Present" },
      { date: "Oct 20, 2026", status: "Present" },
      { date: "Oct 19, 2026", status: "Present" }
    ]
  }
];

export const mockPosts = [
  { id: 1, title: "Anyone have notes for Maths III module 3?", author: "Rahul M", authorAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&q=80", upvotes: 45, comments: 12, date: "2 hours ago" },
  { id: 2, title: "Updates on the upcoming hackathon phase 1 submissions", author: "Priya S", authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80", upvotes: 112, comments: 34, date: "5 hours ago" },
  { id: 3, title: "Are the library timings extended during exams?", author: "Amit K", authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80", upvotes: 22, comments: 5, date: "1 day ago" }
];

export const mockClubs = [
  { id: 1, name: "Coding Club", description: "Learn to build things and compete in hackathons.", members: 120, joined: true },
  { id: 2, name: "Robotics Society", description: "Design, build, and program autonomous robots.", members: 85, joined: false },
  { id: 3, name: "Literature & Debating", description: "Refine your speaking and analytical skills.", members: 45, joined: false },
  { id: 4, name: "Photography Club", description: "Capture moments and learn editing skills.", members: 60, joined: true }
];

export const mockNotices = [
  { id: 1, title: "Semester End Examinations Schedule", description: "The tentative schedule for the upcoming SEE has been published on the VTU portal.", date: "Oct 12, 2026", type: "Academic" },
  { id: 2, title: "Campus Placement Drive - TechCorp", description: "TechCorp will be visiting the campus on Oct 20. Final year students must register.", date: "Oct 10, 2026", type: "Placement" },
  { id: 3, title: "Holiday: Kannada Rajyotsava", description: "The college will remain closed on November 1st.", date: "Oct 05, 2026", type: "General" }
];

export const mockResources = [
  { subject: "Software Engineering", count: 12 },
  { subject: "Fullstack Development", count: 8 },
  { subject: "Machine Learning", count: 24 },
  { subject: "Computer Networks", count: 5 },
  { subject: "Compiler Design", count: 18 }
];
