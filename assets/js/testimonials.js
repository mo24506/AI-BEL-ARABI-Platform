/* =====================================================================
   AI Bel Araby — TESTIMONIALS
   ---------------------------------------------------------------------
   Every entry links to the original screenshot in assets/img/testimonials/.
   original: the message exactly as the student wrote it (Egyptian Arabic
   or Franco); quote: the English translation shown under it.
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
  { id: "w04", original: "صراحة قبل ما احجز وادخل السيشنز كنت مترددة ،بعد الحضور حسيت بالفرق وأنه فعلا دى الحاجات إلى كنت بدور عليها لانه ديما بدور ع التطور فى شغلى ،وكل مرة مكنتش بحب السيشن تخلص من كتر الاستمتاع بالرغم من سوء شبكة الواى فاى أو الداتا إلا أنه كنت مطمنه لوجود السيشنز مسجله و الداتا\nوطبعا وجودكم كتيم حسيت اد ايه انتو متميزين ومتعاونين جدا وفعلا حابين تفيدونا غيركم بمقابل غير وافى لحقكم اطلاقا\nوطبعا ثواب العلم ونقله كبير عند ربنا ،وبفضلكم وفضل التنوير إلى عمله دكتور محمد ع تولز معينه إلى كنت بربطها بشغلى لانه مبحبش الأمور التقليدية اغلب الوقت وأنه فعلا احنا نقدر كشباب نغذى ونواصل أفكارنا عشان نسهل حياتنا ونتقدم للاحسن", kind: "workshop", lang: "ar", featured: true, img: ["w04a.jpg", "w04b.jpg"],
    quote: "Honestly, I was hesitant before booking. After attending I felt the difference: this is exactly what I'd been looking for, because I always want to grow in my work. Every time, I didn't want the session to end. As a team you are distinguished and cooperative, and you truly want to help others. Thanks to the insight Dr. Mohamed gave on specific tools, I could connect them to my own work.",
    short: "Before booking I was hesitant. After attending I felt the difference: this is exactly what I'd been looking for." },
  { id: "w05", original: "بصراحة تحفة\nالشرح منظم وشامل لاقصي درجة\nالمواعيد ممتازة\nوالرد على الأسئلة والتفاعل مع الدكتور جميل بصراحة مبسوطة جدا اني اخدت معاكم الورك شوب وان شاء الله اي ورك شوب تانية هحضرها❤️❤️❤️\nوديزاين الشهادة لطيف اوي شكرا جدا ليكم وشكرا للفوندر ملك جوهر علي فكرة الورك شوب بصراحة اول مره احس اني في حد بيفكر برا الصندوق للبايوتكنولوجي خصوصا مش بس ميدياكلي لا مع دخول ال AI ده شيء ممتاز وعبقري", kind: "workshop", lang: "ar", featured: true, img: ["w05.jpg"],
    quote: "Honestly brilliant. The explanation was organized and as comprehensive as it gets, the timing was excellent, and the answers to questions and the interaction with the doctor were lovely. I'm really happy I took this workshop with you, and I'll attend any other one. Thanks to the founder, Malak Gohar, for the idea: for the first time I feel someone is thinking outside the box for biotechnology by bringing in AI. The certificate design is lovely too, thank you so much. That's excellent and genius." },
  { id: "w28", original: "هايلين بجد انا مستفيده جدا منهم والموضوع ممتع جدا كمان بعيدا عن الاستفاده لأنها تجربه جديده بالنسبالي فمبسوطه جدا بال 2 sessions اللي خدناهم ومتحمسه جدا للباقي وكمان في حاجه جميله جدا التفاعل بينا وبين ال instructor واسئلته لينا كل session ده بيخلينا نركز ونbrainstorming اكتر وبيفتح فكرنا على حاجات كتير فبجد شكرا ليكم وليه جدا كمان على اسلوبه وشرحه الجميل ومنتظرين منكم المزيد❤️❤️❤️", kind: "course", lang: "ar", featured: true, img: ["w28.jpg"],
    quote: "Amazing. I'm benefiting a lot, and the topic is really enjoyable because it's a new experience for me. I'm very happy with the first two sessions and excited for the rest. The interaction with the instructor and his questions every session keep us focused and brainstorming, and open our minds to many things. Thank you so much, and we're waiting for more." },

  { id: "w21", original: "كانت تحفه بجد والدكتور كان شرحه هايل جدا وبيبسط الدنيا اوي و بيسمعنا وبيديني مساحه أسأل ويرد علي قد مستوي فهمي أنا حبيتها جدا بصراحه استفدت منها كتير ❤️", kind: "session", lang: "ar", img: ["w21.jpg"],
    quote: "It was honestly amazing. The doctor's explanation was great: he simplified everything, listened to us, gave us room to ask, and answered at the level of my understanding. I loved it and honestly learned a lot." },
  { id: "w26", original: "مساء النور ، أهلاً مريم\nبصراحة من السشن الاولى انا منبهرة بالمحتوى ، بالنسبة لي المحتوى جديد وهستفيد منه اوي في الرسيرج السنة دي وهيسهل عليا امور كتيرة.\nالدكتور شرحه حلو ومتعاون معانا", kind: "course", lang: "ar", img: ["w26.jpg"],
    quote: "From the very first session I'm impressed by the content. It's new to me, I'll benefit from it a lot in my research this year, and it will make many things easier. The doctor explains well and is very cooperative." },
  { id: "w03", original: "بجد workshop ممتازة و ارشحها لاي حد و يا ريت لو فيها جزء عملي و يا ريت لو في اي كورس تبعكوا تاني بلغيني ❤️", kind: "workshop", lang: "ar", img: ["w03.jpg"],
    quote: "Honestly the workshop is excellent and I recommend it to anyone. I only wish it had a practical part, and I'd love to hear about any other course you run." },
  { id: "w15", original: "الحمدلله كان حلو آوي اتبسط جدا بجد كان الموضوع منظم و كل الناس ال في ال meeting محترمين جدا و مكنش في الازعاج ال بيحصل في ال meetings لان ده كنت خايفة منه", kind: "session", lang: "ar", img: ["w15.jpg"],
    quote: "It was really lovely, I enjoyed it a lot. The topic was well organized and everyone in the meeting was very respectful, with none of the disruption that usually happens in online meetings, which is what I'd been worried about." },
  { id: "w08", original: "حابب اشكر دكتور محمد طبعا على الشرح المبسط والقيم والمجهود اللي كان بيبذلوا معانا وكمان تعاون كل الناس اللي شغالين على الكورس في الرد على اي استفسار أو سؤال فبحد أتمني تنظموا كورسات أكتر الفترة الجاية .", kind: "workshop", lang: "ar", img: ["w08.jpg"],
    quote: "I'd like to thank Dr. Mohamed for the simple, valuable explanation and the effort he put in with us, and everyone working on the course for answering every question. I really hope you organize more courses soon." },
  { id: "w24", original: "جميل جدا و شامل مجالات الbiotech و الأدوات كتير بحيث اقدر اختار منها فلذيذ جدا الكورس", kind: "course", lang: "ar", img: ["w24.jpg"],
    quote: "Really beautiful. It covers all areas of biotech, with lots of tools so I can choose what suits me. The course is a real treat." },
  { id: "w20", original: "كمان فى أمانة ومصداقية كتيم\nكمان بحيى دكتور محمد هو حد متميز وان شاء الله هيكون ليه مستقبل ممتاز غير أنه عنده présentation skills حلوة جدا\nبتمناله التوفيق", kind: "course", lang: "ar", img: ["w20.jpg"],
    quote: "The team is honest and credible. I salute Dr. Mohamed: he's distinguished, has very good presentation skills, and will have an excellent future." },
  { id: "w25", original: "و كان الدكتور بيسأل و يخلينا نتشارك و كده ف ال workshop بجد عجبتني جدا النظام ال كان النهارده و ان شاءالله يكون ال كده دايما و انا الصراحة متحمسة ل ال بعد كده", kind: "workshop", lang: "ar", img: ["w25.jpg"],
    quote: "The doctor kept asking us questions and getting us to take part. I really liked today's workshop format; I hope it stays like this, and I'm genuinely excited for what's next." },
  { id: "w12", original: "يا جماعة والله اتشرفت بكم والله\nانا فعلا فرحان إن فيه علم جديد في مصر\nو مجالات حلوة بتاعتكم دي\nانتم المستقبل ربنا يوفقكم و يبارك لكم", kind: "talk", lang: "ar", img: ["w12.jpg"],
    quote: "I'm truly honoured to have met you. I'm really happy there's a new science in Egypt, and these fields of yours are great. You are the future." },
  { id: "w02", original: "اول سيشن ممتازة وinstructor متفهم وأسلوبه رزين وده ساعدنى أنه اتناقش واربط واجمع الأفكار والخبرات إلى اتعلمتها", kind: "course", lang: "ar", img: ["w02.jpg"],
    quote: "The first session was excellent. The instructor is understanding and calm, which helped me discuss, connect and pull together the ideas and experience I'd learned." },
  { id: "w23", original: "حلو وكويس جدا وكمان هيفيدني اكتر لو بفكر اني ادخل في بحث", kind: "course", lang: "ar", img: ["w23.jpg"],
    quote: "Very good, and it will help me even more if I decide to go into research." },
  { id: "w06", original: "بجد ال workshop فوق التحفه حقيقي استفادت جدا جدا بيها وحبيت الفور سيشن جدا وطريقة الشرح كانت ممتازه ورائعه❤️❤️❤️❤️❤️❤️❤️❤️", kind: "workshop", lang: "ar", img: ["w06.jpg"],
    quote: "Honestly the workshop is beyond amazing. I learned so much, loved the four sessions, and the way it was explained was excellent." },
  { id: "w17", original: "el session kanet tohfa bgd w i loved the information el dr mohamed kan by'olha 3la kol website", kind: "session", lang: "en", img: ["w17.jpg"],
    quote: "The session was really amazing, and I loved the information Dr. Mohamed gave about every website." },
  { id: "w22", original: "kan tohfa bgd i loved all the websites w akeed i'll use them in the future💗💗", kind: "session", lang: "en", img: ["w22.jpg"],
    quote: "It was really amazing. I loved all the websites and I'll definitely use them in the future." },
  { id: "w14", original: "كانت حلوة جدا ودكتور محمد سامح عنده طريقة حلوة جدا ف الشرح فعلا", kind: "session", lang: "ar", img: ["w14.jpg"],
    quote: "It was really lovely, and Dr. Mohamed Sameh has a really nice way of explaining." },
  { id: "w16", original: "مساء الخير\nالسيشن كانت ممتازة بالنسبة لي .. معلومات جديدة وكمان شرح دكتور محمد ممتاز .", kind: "session", lang: "ar", img: ["w16.jpg"],
    quote: "The session was excellent for me: new information, and Dr. Mohamed's explanation was excellent too." },
  { id: "w19", original: "بجد الشرح حلو اووى و كمان التفاعل الموجود عاجبني جدا و يا ريت لو في اي كورسات تانى تبعكوا تبلغوني", kind: "course", lang: "ar", img: ["w19.jpg"],
    quote: "The explanation was really good and I loved the interaction. Please let me know if you run any other courses." },
  { id: "w27", original: "كان كويس جدا بس لو يبقي في session نجرب نفتح كل اللينك وندخل نشوف بيشتغل ازاي step by step هيبقي افضل", kind: "session", lang: "ar", img: ["w27.jpg"],
    quote: "It was very good. It would be even better with a session where we open every link together and see how each tool works, step by step." },
  { id: "w11", original: "كانت ورك شوب جميله جدا الصراحه شرح الدكتور كان حلو اوي و السيشنز كانت خفيفه جدا", kind: "workshop", lang: "ar", img: ["w11.jpg"],
    quote: "It was a really beautiful workshop. The doctor's explanation was very nice and the sessions were easy to follow." },
  { id: "w13", original: "بس فعلا المحاضره فعلا كانت كويسه و أنا استفدت منها جدا و لما اتكلمنا كلنا في الآخر و بدأ يسألنا علي رأينا كانت حاجه كويسه جدا فعلا", kind: "talk", lang: "ar", img: ["w13.jpg"],
    quote: "The lecture was really good and I learned a lot from it. When we all talked at the end and he asked for our opinions, that was a really good touch." },
  { id: "w09", original: "أنا اكتر مبسوطة بالكورس و المعلومات اللي عرفتها بجد جميل", kind: "course", lang: "ar", img: ["w09.jpg"],
    quote: "I'm more than happy with the course and everything I learned. Really lovely." },
  { id: "w10", original: "انتو كويسين اوي و الكورس كمان كويس ف الشرح وكل حاجه كانت ممتازه فيه", kind: "course", lang: "ar", img: ["w10.jpg"],
    quote: "You're really great, the course explains things well, and everything in it was excellent." },
  { id: "w01", original: "كل التوفيق والنجاح والسداد ووعد منى انى ديما اذكر اسمكم فى اى مكان ولاى حد عشان تقدروا توصلوا مجهودكم وتفيدوا الشباب إلى حابب يتطور ويطور من الأوضاع إلى كل مرة ممكن تكون بتسوء", kind: "course", lang: "ar", img: ["w01.jpg"],
    quote: "I wish you every success. I promise to always mention your name, anywhere and to anyone, so your work reaches the young people who want to grow and improve things that keep getting harder." },
  { id: "w07", original: "ما شاء الله حاجه محترمه وفي تطور دايما دايما باذن الله ❤️", kind: "workshop", lang: "ar", img: ["w07.jpg"],
    quote: "Something truly respectable, and always improving." },
  { id: "w18", original: "ماشاء الله ممتاز وفي انتظار الكثير من حضرتكم ان شاء الله بالتوفيق", kind: "session", lang: "ar", img: ["w18.jpg"],
    quote: "Excellent. We're looking forward to much more from you." }
];

/* One-line reactions, shown as a strip */
window.T_REACTIONS = [
  { text: "Honestly, above full marks.", img: "s6.jpg", original: "والله فوق النمره واحد ☝🏻" },
  { text: "The explanation is excellent.", img: "s5.jpg", original: "تمام الحمدلله الشرح ممتاز" },
  { text: "It was lovely and I learned a lot.", img: "s4.jpg", original: "الحمدلله كانت حلوة و استفدت منها جدا" },
  { text: "It was really nice, I benefited a lot.", img: "s2.jpg", original: "كان حلو اوي استفدت منه 💗💗" },
  { text: "Really lovely, I learned so much.", img: "s3.jpg", original: "كانت حلوه اوي بجد واستفادت منها كتير 😍😍😍" },
  { text: "Very good.", img: "s1.jpg", original: "كويس جدا" }
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
