"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ContactText from '@/components/sections/contact/ContactText';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import { CheckCircle, Zap, Shield, Target } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="small"
        sizing="largeSizeMediumTitles"
        background="grid"
        cardStyle="soft-shadow"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Features", id: "features" },
        { name: "Solutions", id: "solutions" },
        { name: "Pricing", id: "pricing" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="DemoPro"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{ variant: "gradient-bars" }}
      title="The Professional Standard this is just aDemo"
      description="Showcase your product with precision and elegance. Our platform provides the tools to build, test, and iterate on your ideas faster than ever.created by nafih s (abdulnafih9539@gmail.com)"
      tag="Innovation Redefined"
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/minimal-work-space-creative-flat-lay-photo-workspace-desk-with-sketchbook-mobile-phone-with-blank-screen-copy-space-white-background-top-view-flat-lay-photography_1253-1063.jpg", imageAlt: "Abstract Tech" },
        { imageSrc: "http://img.b2bpic.net/free-photo/green-apple-spiral-notepad-pen-eyeglasses-laptop-blue-background_23-2148178578.jpg", imageAlt: "Workspace" }
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Trusted by 1000+ professionals"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
    <SocialProofOne
      title="Trusted by Industry Leaders"
      description="Join the companies transforming their workflow with our platform."
      names={["Acme Corp", "TechFlow", "GlobalSoft", "InnovateAI", "NextGen", "DataScale"]}
      textboxLayout="default"
      useInvertedBackground={false}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { id: "f1", title: "Rapid Deployment", subtitle: "Get live in minutes", category: "Efficiency", value: "99%" },
        { id: "f2", title: "Advanced Analytics", subtitle: "Real-time insights", category: "Analytics", value: "100%" },
        { id: "f3", title: "Secure Cloud", subtitle: "Enterprise grade", category: "Security", value: "100%" },
      ]}
      title="Built for Excellence"
      description="Powerful features designed to streamline your workflow and enhance your presentation capabilities."
    />
  </div>

  <div id="solutions" data-section="solutions">
    <FeatureHoverPattern
      title="Tailored Solutions"
      description="Flexible approaches to meet the unique challenges of your business."
      features={[
        { icon: Zap, title: "Automation", description: "Automate repetitive tasks and focus on growth." },
        { icon: Shield, title: "Security", description: "Enterprise-grade protection for all your data." },
        { icon: Target, title: "Growth", description: "Scale your business with actionable insights." },
      ]}
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
    />
  </div>

  <div id="pricing" data-section="pricing">
    <PricingCardOne
      title="Simple Pricing"
      description="Choose the plan that best fits your business needs."
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        { id: "p1", badge: "Starter", price: "$49", subtitle: "For individual creators", features: ["Core features", "Basic support", "Single project"] },
        { id: "p2", badge: "Pro", price: "$99", subtitle: "For growing teams", features: ["Everything in Starter", "Advanced analytics", "Priority support"] },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Impact at Scale"
      tag="Proven Results"
      metrics={[
        { id: "m1", value: "50K+", description: "Successful Demos" },
        { id: "m2", value: "99.9%", description: "Uptime Guaranteed" },
        { id: "m3", value: "150+", description: "Global Partners" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", title: "Exceptional", quote: "The most professional demo platform I have ever used. Seamless integration.", name: "Sarah Chen", role: "CTO", imageSrc: "http://img.b2bpic.net/free-photo/attractive-blond-business-woman-white-shirt-eyeglasses-crossed-arms-grey-background_613910-3693.jpg" },
        { id: "t2", title: "Game Changer", quote: "Our conversion rates doubled after implementing these tools. Highly recommended.", name: "Mark Adams", role: "Founder", imageSrc: "http://img.b2bpic.net/free-photo/woman-portrait-with-bright-blue-lips_23-2151096454.jpg" },
      ]}
      title="Voices of Success"
      description="Hear how industry leaders are leveraging our platform to transform their demo process."
    />
  </div>

  <div id="cta" data-section="cta">
    <ContactText
      text="Ready to transform your workflow? Get started today."
      background={{ variant: "sparkles-gradient" }}
      useInvertedBackground={false}
      buttons={[{ text: "Get Started", href: "#contact" }]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Start Your Demo Journey"
      description="Have questions? Fill out the form below and our team will get in touch shortly to assist with your requirements."
      inputs={[
        { name: "fullName", type: "text", placeholder: "Full Name", required: true },
        { name: "email", type: "email", placeholder: "Work Email", required: true },
      ]}
      textarea={{ name: "message", placeholder: "Tell us about your needs...", rows: 4 }}
      imageSrc="http://img.b2bpic.net/premium-photo/dynamic-office-meeting-with-business-team-cityscape-overlook-night-stylish-interior-design_937679-77490.jpg?id=382404609"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        { title: "Product", items: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }] },
        { title: "Company", items: [{ label: "About", href: "#" }, { label: "Contact", href: "#contact" }] },
      ]}
      logoText="Demo this is created by nafih s "
      copyrightText="© 2025 Demo Pro, Inc."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
