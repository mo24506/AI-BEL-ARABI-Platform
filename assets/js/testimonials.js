/* =====================================================================
   AI Bel Araby — TESTIMONIALS
   ---------------------------------------------------------------------
   Every entry links to the original screenshot in assets/img/testimonials/.
   Arabic messages are shown in English (lang: "ar" marks them as
   translated); the screenshot stays the proof.
   kind: "workshop" | "course" | "session" | "talk"
   featured: true  puts a quote in the large cards at the top.
   ===================================================================== */

window.T_KINDS = {
  workshop: "Workshop",
  course: "Online course",
  session: "Live session",
  talk: "Talk"
};

window.TESTIMONIALS = [
  { id: "w04", kind: "workshop", lang: "ar", featured: true, img: ["w04a.jpg", "w04b.jpg"],
    quote: "Honestly, I was hesitant before booking. After attending I felt the difference: this is exactly what I'd been looking for, because I always want to grow in my work. Every time, I didn't want the session to end. As a team you are distinguished and cooperative, and you truly want to help others. Thanks to the insight Dr. Mohamed gave on specific tools, I could connect them to my own work.",
    short: "Before booking I was hesitant. After attending I felt the difference: this is exactly what I'd been looking for." },
  { id: "w05", kind: "workshop", lang: "ar", featured: true, img: ["w05.jpg"],
    quote: "Honestly brilliant. The explanation was organized and as comprehensive as it gets, the timing was excellent, and the answers to questions and the interaction with the doctor were lovely. I'm really happy I took this workshop with you, and I'll attend any other one. Thanks to the founder, Malak Gohar, for the idea: for the first time I feel someone is thinking outside the box for biotechnology by bringing in AI. That's excellent and genius." },
  { id: "w28", kind: "course", lang: "ar", featured: true, img: ["w28.jpg"],
    quote: "Amazing. I'm benefiting a lot, and the topic is really enjoyable because it's a new experience for me. I'm very happy with the first two sessions and excited for the rest. The interaction with the instructor and his questions every session keep us focused and brainstorming, and open our minds to many things. Thank you so much, and we're waiting for more." },

  { id: "w21", kind: "session", lang: "ar", img: ["w21.jpg"],
    quote: "It was honestly amazing. The doctor's explanation was great: he simplified everything, listened to us, gave us room to ask, and answered at the level of my understanding. I loved it and honestly learned a lot." },
  { id: "w26", kind: "course", lang: "ar", img: ["w26.jpg"],
    quote: "From the very first session I'm impressed by the content. It's new to me, I'll benefit from it a lot in my research this year, and it will make many things easier. The doctor explains well and is very cooperative." },
  { id: "w03", kind: "workshop", lang: "ar", img: ["w03.jpg"],
    quote: "Honestly the workshop is excellent and I recommend it to anyone. I only wish it had a practical part, and I'd love to hear about any other course you run." },
  { id: "w15", kind: "session", lang: "ar", img: ["w15.jpg"],
    quote: "It was really lovely, I enjoyed it a lot. The topic was well organized and everyone in the meeting was very respectful, with none of the disruption that usually happens in online meetings, which is what I'd been worried about." },
  { id: "w08", kind: "workshop", lang: "ar", img: ["w08.jpg"],
    quote: "I'd like to thank Dr. Mohamed for the simple, valuable explanation and the effort he put in with us, and everyone working on the course for answering every question. I really hope you organize more courses soon." },
  { id: "w24", kind: "course", lang: "ar", img: ["w24.jpg"],
    quote: "Really beautiful. It covers all areas of biotech, with lots of tools so I can choose what suits me. The course is a real treat." },
  { id: "w20", kind: "course", lang: "ar", img: ["w20.jpg"],
    quote: "The team is honest and credible. I salute Dr. Mohamed: he's distinguished, has very good presentation skills, and will have an excellent future." },
  { id: "w25", kind: "workshop", lang: "ar", img: ["w25.jpg"],
    quote: "The doctor kept asking us questions and getting us to take part. I really liked today's workshop format; I hope it stays like this, and I'm genuinely excited for what's next." },
  { id: "w12", kind: "talk", lang: "ar", img: ["w12.jpg"],
    quote: "I'm truly honoured to have met you. I'm really happy there's a new science in Egypt, and these fields of yours are great. You are the future." },
  { id: "w02", kind: "course", lang: "ar", img: ["w02.jpg"],
    quote: "The first session was excellent. The instructor is understanding and calm, which helped me discuss, connect and pull together the ideas and experience I'd learned." },
  { id: "w23", kind: "course", lang: "ar", img: ["w23.jpg"],
    quote: "Very good, and it will help me even more if I decide to go into research." },
  { id: "w06", kind: "workshop", lang: "ar", img: ["w06.jpg"],
    quote: "Honestly the workshop is beyond amazing. I learned so much, loved the session, and the way it was explained was excellent." },
  { id: "w17", kind: "session", lang: "en", img: ["w17.jpg"],
    quote: "The session was really amazing, and I loved the information Dr. Mohamed gave about every website." },
  { id: "w22", kind: "session", lang: "en", img: ["w22.jpg"],
    quote: "It was really amazing. I loved all the websites and I'll definitely use them in the future." },
  { id: "w14", kind: "session", lang: "ar", img: ["w14.jpg"],
    quote: "It was really lovely, and Dr. Mohamed Sameh has a really nice way of explaining." },
  { id: "w16", kind: "session", lang: "ar", img: ["w16.jpg"],
    quote: "The session was excellent for me: new information, and Dr. Mohamed's explanation was excellent too." },
  { id: "w19", kind: "course", lang: "ar", img: ["w19.jpg"],
    quote: "The explanation was really good and I loved the interaction. Please let me know if you run any other courses." },
  { id: "w27", kind: "session", lang: "ar", img: ["w27.jpg"],
    quote: "It was very good. It would be even better with a session where we open every link together and see how each tool works, step by step." },
  { id: "w11", kind: "workshop", lang: "ar", img: ["w11.jpg"],
    quote: "It was a really beautiful workshop. The doctor's explanation was very nice and the sessions were easy to follow." },
  { id: "w13", kind: "talk", lang: "ar", img: ["w13.jpg"],
    quote: "The lecture was really good and I learned a lot from it. When we all talked at the end and he asked for our opinions, that was a really good touch." },
  { id: "w09", kind: "course", lang: "ar", img: ["w09.jpg"],
    quote: "I'm more than happy with the course and everything I learned. Really lovely." },
  { id: "w10", kind: "course", lang: "ar", img: ["w10.jpg"],
    quote: "You're really great, the course explains things well, and everything in it was excellent." },
  { id: "w01", kind: "course", lang: "ar", img: ["w01.jpg"],
    quote: "I wish you every success. I promise to always mention your name, anywhere and to anyone, so your work reaches the young people who want to grow." },
  { id: "w07", kind: "workshop", lang: "ar", img: ["w07.jpg"],
    quote: "Something truly respectable, and always improving." },
  { id: "w18", kind: "session", lang: "ar", img: ["w18.jpg"],
    quote: "Excellent. We're looking forward to much more from you." }
];

/* One-line reactions, shown as a strip */
window.T_REACTIONS = [
  { text: "Honestly, above full marks.", img: "s6.jpg" },
  { text: "The explanation is excellent.", img: "s5.jpg" },
  { text: "It was lovely and I learned a lot.", img: "s4.jpg" },
  { text: "It was really nice, I benefited a lot.", img: "s2.jpg" },
  { text: "Really lovely, I learned so much.", img: "s3.jpg" },
  { text: "Very good.", img: "s1.jpg" }
];

/* Public LinkedIn posts by students */
window.T_LINKEDIN = [
  { name: "Mariam Qataya", role: "Biotechnology and genetics engineering senior", program: "AI Meets Biotech · Summer internship 2024", img: "l1.jpg",
    quote: "This workshop has equipped me with valuable knowledge and hands-on experience in how to use AI in biotechnology." },
  { name: "Abdurrahman Mohammed", role: "Biotechnology student, MUST", program: "Webinar · AI x Synthetic Biology: The Biosecurity Frontier", img: "l3.jpg",
    quote: "An incredible and eye-opening experience. Truly grateful for the knowledge shared." },
  { name: "Malak Khaled", role: "Undergraduate student, College of Biotechnology, MUST", program: "Medical and Genetic Analysis · 10-day training", img: "l2.jpg",
    quote: "After ten days of training." },
  { name: "Maimuna Othman", role: "Student", program: "Applied Cosmetic Biotechnology workshop", img: "l4.jpg",
    quote: "Shared her certificate and photos from the Applied Cosmetic Biotechnology workshop." },
  { name: "Sarah Abu Deif", role: "Student", program: "Applied Cosmetic Biotechnology hands-on training", img: "l5.jpg",
    quote: "Shared completing the Applied Cosmetic Biotechnology hands-on training program." }
];
