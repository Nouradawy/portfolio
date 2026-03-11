import {FaFlutter} from "react-icons/fa6";
import {RiSupabaseFill} from "react-icons/ri";
import {BiLogoSpringBoot} from "react-icons/bi";
import {FaReact} from "react-icons/fa";
import {MdHttp} from "react-icons/md";
import {IoLogoJavascript} from "react-icons/io";


const renderVideo = (item) => {
    if (item.type === "youtube") {
        // YouTube slide
        return (
            <div className="flex justify-center items-center w-full h-full">
                <iframe
                    width="100%"
                    height="100%"
                    src={item.videoUrl} // e.g. https://www.youtube.com/embed/VNjm-Ou08x0
                    title={item.title || "Video"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full object-contain rounded-lg"
                />
            </div>
        );
    }

    // Regular video slide
    return (
        <div className="flex justify-center items-center w-full h-full">
            <video
                src={item.videoUrl}
                controls
                muted
                loop
                autoPlay
                className="w-full h-full object-contain rounded-lg"
            />
        </div>
    );
};
export const projects = [
    {
        platform: "Android",
        position: "Founder & Flutter Engineer" ,
        title: "whatsunity" ,
        appIdea: "Real time community app" ,
        github:"https://github.com/Nouradawy/super_app.git",
        startDate: "Aug 2025" ,
        endDate: "JAN 2026" ,
        description: (
            <>
                • Developed a comprehensive mobile platform using Flutter and Bloc
                to digitize compound management, enabling structured tenant
                organization by mapping users to specific buildings and apartment
                units for verified neighbor interactions
                <br/>
                • Built a dedicated polling and voting module detached from general
                chat streams. This feature allows residents to vote on community
                situations using visual analytics, ensuring critical decision-making
                data is not lost in daily conversation flow.
                <br/>
                • Integrated a full-stack Supabase backend to handle Admin-to-
                Resident announcements and a unified "Report History" system for
                Maintenance, Care Services, and Security requests.
                <br/>
                • Deployed a self-hosted backend using Docker, DuckDNS, and Edge
                Functions, ensuring data privacy and low-latency real-time chat
                performance using Restful APIs and WebSockets.
                <br/>
                • Designed a rich-media chat interface supporting Google Drive
                integration for file sharing and voice notes with visual waveforms.
            </>
        ) ,

        icons: <div className="flex flex-row mt-5 mb-5 gap-4">
            <span className="material-icons-round  text-gray-300">phone_iphone </span>
            <FaFlutter className="text-gray-300 text-2xl "/>
            <RiSupabaseFill className="text-gray-300 text-2xl "/>
        </div> ,
        images: [
            {
                type: "youtube",
                videoUrl: "https://www.youtube.com/embed/VNjm-Ou08x0?autoplay=1&mute=1&rel=0&playsinline=1", // Your custom property for the video source
                renderItem: renderVideo
            } ,
            {
                original: "public/assets/projects/Whatsunity/Screenshot_20251212_130927.png" ,
            } ,
            {
                original: "public/assets/projects/Whatsunity/Screenshot_20251212_131138.png" ,
            } ,
            {
                original: "public/assets/projects/Whatsunity/Screenshot_20251212_131212.png" ,
            } ,
            {
                original: "public/assets/projects/Whatsunity/Screenshot_20251212_131717.png" ,
            } ,
            {
                original: "public/assets/projects/Whatsunity/WhatsUnityLogo.png" ,
            } ,

        ]
    } ,
    {
        platform: "web",
        position: "Full Stack Developer" ,
        title: "Medicare" ,
        appIdea: "Medical services platform" ,
        github:"https://github.com/Nouradawy/Medicare.git",
        startDate: "SEP 2024" ,
        endDate: "FEB 2026" ,
        description: (
            <>
                • Designed and developed a full-stack web application for Medicare,
                a medical services platform, using React for the frontend
                and
                <br/>
                Spring Boot for building scalable and secure RESTful APls.
                • Implemented a MySQL relational database with optimized schema
                design and indexing for efficient data access and storage.
                <br/>
                • Built interactive UI components with React, ensuring responsive
                design and seamless user experience across devices.
                <br/>
                • Developed robust backend services with Spring Boot, handling
                user authentication, appointment scheduling, and role-based
                access control.
                <br/>
                • Integrated third-party services and libraries for enhanced
                functionality such as notifications, secure login, and form
                validation.
                <br/>
                • Deployed the application to a cloud environment with a focus on
                performance, scalability, and uptime.
                <br/>
                • Ensured maintainable and high-quality code through modular
                design, version control, and thorough testing (unit and
                integration).
                <br/>
                • Followed best practices in software design, application security,
                and RESTful APIs standards throughout the development lifecycle.
            </>
        ) ,

        icons: <div className="flex flex-row mt-5 mb-5 gap-4">

            <MdHttp className="text-gray-300 text-2xl"/>
            <FaReact className="text-gray-300 text-2xl"/>
            <BiLogoSpringBoot className="text-gray-300 text-2xl"/>
        </div> ,
        images: [{
            original: "public/assets/projects/Medicare/Home.png" ,

        } ,
            {
                original: "public/assets/projects/Medicare/DocFilter.png" ,

            } ,
            {
                original: "public/assets/projects/Medicare/Reservation.png" ,

            } ,
            {
                original: "public/assets/projects/Medicare/patientReserv.png" ,

            } ,
            {
                original: "public/assets/projects/Medicare/patientQueue.png" ,

            } ,
            {
                original: "public/assets/projects/Medicare/medicalHistory.png" ,

            } ,
            {
                original: "public/assets/projects/Medicare/Picture1.png" ,

            } ,{
                original: "public/assets/projects/Medicare/Picture2.png" ,

            } ,{
                original: "public/assets/projects/Medicare/Picture3.png" ,

            } ,{
                original: "public/assets/projects/Medicare/Picture4.png" ,

            } ,{
                original: "public/assets/projects/Medicare/Picture5.png" ,

            } ,

        ]
    } ,
    {
        platform: "Android",
        position: "Flutter Engineer" ,
        title: "Mokhalafaty" ,
        appIdea: "Traffic Violations Extraction" ,
        github:"https://github.com/Nouradawy/Medicare.git",
        startDate: "MAR 2024" ,
        endDate: "MAY 2024" ,
        description: (
            <>
                A mobile application that securely stores a user’s license-related information (such as car license details, ID number, and phone number)
                so the user does not need to re-enter the same data repeatedly.
                <br/>
                The user can save one or multiple licenses inside the app. When needed,
                they can add or select a license with one tap, and the application will automatically retrieve
                traffic violation data by accessing the relevant traffic authority website and extracting the violation information.
                <br/>
                The goal of the application is to simplify checking traffic violations, save time, and reduce repetitive
                data entry while keeping all license information organized in one place.
            </>
        ) ,

        icons: <div className="flex flex-row mt-5 mb-5 gap-4">

            <span className="material-icons-round  text-gray-300">phone_iphone </span>
            <FaFlutter className="text-gray-300 text-2xl "/>
            <IoLogoJavascript className="text-gray-300 text-2xl"/>
        </div> ,
        images: [{
            original: "public/assets/projects/mokhalafaty/1.png" ,

        } ,
            {
                original: "public/assets/projects/mokhalafaty/2.jpeg" ,

            } ,
            {
                original: "public/assets/projects/mokhalafaty/fineR.png" ,

            }

        ]
    } ,
    {
        platform: "Android",
        position: "Flutter Engineer" ,
        title: "Phone Dialer App" ,
        appIdea: "" ,
        github:"https://github.com/Nouradawy/phone-dialer-app.git",
        startDate: "NOV 2021" ,
        endDate: "NOV 2022" ,
        description: (
            <>
                Design, build and maintain high performance, reusable reliable code including UI and core functionality.
                <br/>
                •	Application Written in Flutter Used to manage your contacts.
                <br/>
                •	Implementation for a Call Reason that can be filled by the caller that can be visible to the Call Receiver to determine whether to accept the call or not and much more.
                <br/>
                •	Fetch your Facebook friend list pictures and apply those pictures to your contacts.
                <br/>
                •	Reorganized contact details implementing Facebook – WhatsApp – twitter (social media) just in one place.
                <br/>
                •	Customization function that you can recolor or change in call Screen background
            </>
        ) ,

        icons: <div className="flex flex-row mt-5 mb-5 gap-4">

            <span className="material-icons-round  text-gray-300">phone_iphone </span>
            <FaFlutter className="text-gray-300 text-2xl "/>

        </div> ,
        images: [
            {
                original: "public/assets/projects/PhoneDialler/Swap down decline.png" ,

            } ,
            {
                original: "public/assets/projects/PhoneDialler/Incoming call screen.png" ,

            },
            {
                original: "public/assets/projects/PhoneDialler/ongoing call screen.png" ,

            },
            {
                original: "public/assets/projects/PhoneDialler/DailerApp (1).png" ,

            },
            {
                original: "public/assets/projects/PhoneDialler/DailerApp (4).png" ,

            },
 {
                original: "public/assets/projects/PhoneDialler/DailerApp (5).png" ,

            },
 {
                original: "public/assets/projects/PhoneDialler/qucik note in action.png" ,

            },
            {
                original: "public/assets/projects/PhoneDialler/Quick note.png" ,

            },{
                original: "public/assets/projects/PhoneDialler/Theme customization 2.png" ,

            },

        ]
    } ,
];