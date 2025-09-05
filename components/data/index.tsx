import { CalendarCheck, Users, Presentation, MessageSquare, Award, Megaphone, BookOpen, FileText } from "lucide-react";

export const profiles = [
    { id:1, name: 'Alice Johnson', star: 4, role: 'UI/UX Designer', location: 'Founder @ UX Playbook', image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" },
    { id:2, name: 'Bob Smith', star: 2, role: 'Product Designer', location: 'Co-founder @ DesignHub', image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg" },
    { id:3, name: 'Catherine Lee', star: 5, role: 'Graphic Designer', location: 'Founder @ Creative Minds', image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" },
    { id:4, name: 'David Kim', star: 4, role: 'Interaction Designer', location: 'Co-founder @ Interact Studio', image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" },
    { id:5, name: 'Eva Martinez', star: 3, role: 'Visual Designer', location: 'Founder @ Visual Arts', image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg" },
    { id:6, name: 'Frank Wilson', star: 2, role: 'Experience Designer', location: 'Co-founder @ Experience Lab', image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },    
    { id:7, name: 'Grace Chen', star: 1, role: 'Service Designer', location: 'Founder @ Service Works', image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg" },
    { id:8, name: 'Henry Brown', star: 4, role: 'Design Strategist', location: 'Co-founder @ Strategy Co.', image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg" },   
    { id:9, name: 'Isabella Davis', star: 4, role: 'Creative Director', location: 'Founder @ Creative Vision', image: "https://images.pexels.com/photos/1181691/pexels-photo-1181691.jpeg" },
    { id:10, name: 'Jack Miller', star: 4, role: 'Art Director', location: 'Co-founder @ Artistry', image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" },
]

export const benefitData = [ 
  {id: 1, title: "Grow your business", description: "Get access to hand-picked experts who've replaced their 9 to 5s. Been there, done that!", image: "/assets/benefits1.PNG"}, 
  {id: 2, title: "Get Real-time help", description: "Get step-by-step suggestions that's personalized to you, your situation ad your business", image: "/assets/benefits2.PNG"}, 
  {id: 3, title: "Tight-knit support network", description: "Expand your network, share, connect, and vent in an exclusive environment!", image: "/assets/benefits3.PNG"}, 
  {id: 4, title: "Learn and steal our systems", description: "Battle-tested tactics from sales, marketing, to operations and growth design, move faster", image: "/assets/benefits4.PNG"}, 
]

export const featureProfiles = [ 
    { id:1, title: 'Average Experience', description: "10+ Years", image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" },
    { id:2, title: 'Community Revenue', description: '$700,000+ this year', location: 'Co-founder @ DesignHub', image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg" },
    { id:3, title: 'Community Audience', description: '200,000+ Subscribers', location: 'Founder @ Creative Minds', image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" },
    { id:4, title: 'Lunar Activity', description:'3245+ Messages', location: 'Co-founder @ Interact Studio', image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" },

]

export const communityData = [
  {
    id: 1,
    title: "Weekly check-ins",
    description: "Every Monday, we share reflections, set new goals, and get support.",
    icon: CalendarCheck,
    color: "text-blue-500",
  },
  {
    id: 2,
    title: "Daily co-working",
    description: "Daily sessions to focus on deep work and the most important thing.",
    icon: Users,
    color: "text-green-500",
    span: "NEW",
  },
  {
    id: 3,
    title: "Monthly workshops",
    description: "Each month, we conduct an online retrospective to reflect and plan.",
    icon: Presentation,
    color: "text-purple-500",
  },
  {
    id: 4,
    title: "Peer feedback",
    description: "We regularly share work-in-progress to get brutally honest feedback.",
    icon: MessageSquare,
    color: "text-orange-500",
  },
  {
    id: 5,
    title: "Celebrate wins",
    description: "We celebrate our accomplishments (big and small). Best way to build momentum.",
    icon: Award,
    color: "text-yellow-500",
  },
  {
    id: 6,
    title: "Judgement-free venting",
    description: "We share lessons learned and vent about the world's fuckeries. Zero judgement.",
    icon: Megaphone,
    color: "text-red-500",
  },
  {
    id: 7,
    title: "Expert-curated content",
    description: "Activities and workshops designed for your preferred work style.",
    icon: BookOpen,
    color: "text-teal-500",
  },
  {
    id: 8,
    title: "Playbooks",
    description: "Templates, resources, frameworks to build a sustainable content business.",
    icon: FileText,
    color: "text-pink-500",
    span: "SOON",
  },
];

export const testimonialData = [
  {
    id: 1,
    name: "Alice Johnson",
    comment: "This community completely changed my perspective on entrepreneurship. The support here is unmatched!",
    role: "UI/UX Designer",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    id: 2,
    name: "Bob Smith",
    comment: "I went from struggling with client work to running a successful design studio, all thanks to the mentorship here.",
    role: "Product Designer",
    image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg",
  },
  {
    id: 3,
    name: "Catherine Lee",
    comment: "The workshops and weekly check-ins keep me accountable and motivated every single week.",
    role: "Creative Director",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    id: 4,
    name: "David Kim",
    comment: "I love how open and supportive everyone is. It feels like a family, not just another online group.",
    role: "Interaction Designer",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
  },
  {
    id: 5,
    name: "Eva Martinez",
    comment: "The VIP coaching program is worth every penny. My business grew 3x in just 6 months.",
    role: "Visual Designer",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
  },
  {
    id: 6,
    name: "Frank Wilson",
    comment: "I was skeptical at first, but after joining, I realized this was the best decision for my career.",
    role: "Experience Designer",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
  {
    id: 7,
    name: "Grace Chen",
    comment: "The resources provided here are gold. I wish I had joined earlier!",
    role: "Service Designer",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
  },
  {
    id: 8,
    name: "Henry Brown",
    comment: "Networking here led me to collaborations I never imagined possible.",
    role: "Design Strategist",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
  },
  {
    id: 9,
    name: "Isabella Davis",
    comment: "The founder personally ensures everyone feels heard and valued. That makes a huge difference.",
    role: "Founder, Creative Vision",
    image: "https://images.pexels.com/photos/1181691/pexels-photo-1181691.jpeg",
  },
  {
    id: 10,
    name: "Jack Miller",
    comment: "From zero clients to fully booked! The accountability system here works wonders.",
    role: "Art Director",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    id: 11,
    name: "Karen Lopez",
    comment: "The community vibe keeps me inspired to push my limits every day.",
    role: "Brand Strategist",
    image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg",
  },
  {
    id: 12,
    name: "Liam Thompson",
    comment: "The founder’s coaching calls alone are worth the membership fee.",
    role: "Marketing Designer",
    image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg",
  },
  {
    id: 13,
    name: "Maya Patel",
    comment: "The workshops are practical and full of actionable advice, not just theory.",
    role: "Business Consultant",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    id: 14,
    name: "Nathan Scott",
    comment: "I've learned more here in 3 months than in 3 years of trying things on my own.",
    role: "Freelance Designer",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
  },
  {
    id: 15,
    name: "Olivia Green",
    comment: "Finally, a community that truly cares about your success, not just membership fees.",
    role: "Startup Founder",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
];
