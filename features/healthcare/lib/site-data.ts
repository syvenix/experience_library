import {
  Brain,
  CalendarDays,
  HeartPulse,
  MapPin,
  Phone,
  ShieldCheck,
  Smile,
  SmilePlus,
  Stethoscope,
  Syringe,
  UserRound
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Pages", href: "#faq" },
  { label: "Contact", href: "#contact" }
] as const;

export const stats = [
  {
    id: "rating",
    value: "4.9",
    label: "Google Rating",
  },
  {
    id: "patients",
    value: "12,000+",
    label: "Happy Patients",
  },
  {
    id: "doctors",
    value: "25+",
    label: "Expert Doctors",
  },
  {
    id: "experience",
    value: "10+",
    label: "Years of Excellence",
  },
] as const;

export const specializations = [
  {
    title: "Cardiology",
    description: "Comprehensive heart care & treatment",
    icon: HeartPulse,
    tone: "red"
  },
  {
    title: "Neurology",
    description: "Advanced brain & nerve care",
    icon: Brain,
    tone: "blue"
  },
  {
    title: "Orthopedics",
    description: "Bone, joint & spine excellence",
    icon: Syringe,
    tone: "cyan"
  },
  {
    title: "Pediatrics",
    description: "Compassionate care for your children",
    icon: UserRound,
    tone: "violet"
  },
  {
    title: "Dental Care",
    description: "Complete oral health solutions",
    icon: SmilePlus,
    tone: "blue"
  },
  {
    title: "Dermatology",
    description: "Healthy skin, hair & confidence",
    icon: Stethoscope,
    tone: "emerald"
  }
] as const;

export const partners = [
  "Apollo Hospitals",
  "MAX Healthcare",
  "Manipal Hospitals",
  "Fortis Healthcare",
  "Narayana Health"
] as const;

export const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    education: "MBBS, MD, DM Cardiology",
    experience: "12+ Years Experience",
    rating: "4.9",
    reviews: "120 reviews",
    image: "/experiences/healthcare/images/clinic/doctor-sarah.png"
  },
  {
    name: "Dr. James Wilson",
    specialty: "Medical Director",
    education: "MBBS, MD Internal Medicine",
    experience: "15+ Years Experience",
    rating: "4.8",
    reviews: "98 reviews",
    image: "/experiences/healthcare/images/clinic/hero-doctor.png"
  }
] as const;

export const features = [
  "Patient-Centered Care",
  "Advanced Medical Technology",
  "Experienced & Caring Doctors",
  "Safety & Quality Assurance"
] as const;

export const testimonials = [
  {
    quote:
      "The care and attention I received was exceptional. The doctors and staff are truly amazing!",
    name: "Ramesh Kumar",
    role: "Verified Patient"
  },
  {
    quote:
      "Booking was simple, the clinic felt calm, and every step was handled with clarity.",
    name: "Anita Sharma",
    role: "Verified Patient"
  }
] as const;

export const faqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "Use the Book Appointment button, select a preferred doctor and time, and our care team will confirm your visit."
  },
  {
    question: "What insurance do you accept?",
    answer:
      "We accept major healthcare partners and can verify eligibility before your appointment."
  },
  {
    question: "What are your clinic timings?",
    answer:
      "The clinic is open Monday to Saturday from 08:00 AM to 08:00 PM, with emergency support available 24/7."
  }
] as const;

export const contactItems = [
  {
    label: "Call",
    value: "+91 98765 43210",
    icon: Phone
  },
  {
    label: "Visit",
    value: "Syvenix Clinic, Healthcare Avenue",
    icon: MapPin
  },
  {
    label: "Book",
    value: "Same-day appointments available",
    icon: CalendarDays
  },
  {
    label: "Care",
    value: "Insurance and safety verified",
    icon: ShieldCheck
  },
  {
    label: "Smile",
    value: "Patient-first support team",
    icon: Smile
  }
] as const;
