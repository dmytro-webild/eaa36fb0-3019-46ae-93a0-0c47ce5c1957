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
        {
          name: "Home",          id: "hero"},
        {
          name: "Features",          id: "features"},
        {
          name: "Testimonials",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="DemoPro"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "gradient-bars"}}
      title="The Professional Standard for Your Demo"
      description="Showcase your product with precision and elegance. Our platform provides the tools to build, test, and iterate on your ideas faster than ever."
      tag="Innovation Redefined"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/minimal-work-space-creative-flat-lay-photo-workspace-desk-with-sketchbook-mobile-phone-with-blank-screen-copy-space-white-background-top-view-flat-lay-photography_1253-1063.jpg",          imageAlt: "Abstract Tech"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/green-apple-spiral-notepad-pen-eyeglasses-laptop-blue-background_23-2148178578.jpg",          imageAlt: "Workspace"}
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Trusted by 1000+ professionals"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",          title: "Rapid Deployment",          subtitle: "Get live in minutes",          category: "Efficiency",          value: "99%"},
        {
          id: "f2",          title: "Advanced Analytics",          subtitle: "Real-time insights",          category: "Analytics",          value: "100%"},
        {
          id: "f3",          title: "Secure Cloud",          subtitle: "Enterprise grade",          category: "Security",          value: "100%"},
      ]}
      title="Built for Excellence"
      description="Powerful features designed to streamline your workflow and enhance your presentation capabilities."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Impact at Scale"
      tag="Proven Results"
      metrics={[
        {
          id: "m1",          value: "50K+",          description: "Successful Demos"},
        {
          id: "m2",          value: "99.9%",          description: "Uptime Guaranteed"},
        {
          id: "m3",          value: "150+",          description: "Global Partners"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          title: "Exceptional",          quote: "The most professional demo platform I have ever used. Seamless integration.",          name: "Sarah Chen",          role: "CTO",          imageSrc: "http://img.b2bpic.net/free-photo/attractive-blond-business-woman-white-shirt-eyeglasses-crossed-arms-grey-background_613910-3693.jpg"},
        {
          id: "t2",          title: "Game Changer",          quote: "Our conversion rates doubled after implementing these tools. Highly recommended.",          name: "Mark Adams",          role: "Founder",          imageSrc: "http://img.b2bpic.net/free-photo/woman-portrait-with-bright-blue-lips_23-2151096454.jpg"},
        {
          id: "t3",          title: "Highly Reliable",          quote: "The security and stability are unmatched in the current market.",          name: "Elena Rodriguez",          role: "Product Lead",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-blonde-businesswoman-formal-dressed-isolated-dark-textured-background_613910-5399.jpg"},
        {
          id: "t4",          title: "Perfect fit",          quote: "Fits our enterprise needs perfectly with intuitive management tools.",          name: "David Kim",          role: "VP Operations",          imageSrc: "http://img.b2bpic.net/free-photo/confident-senior-executive-looking-camera_1262-2374.jpg"},
        {
          id: "t5",          title: "Simply the best",          quote: "The support team and the feature set are exactly what we needed to scale.",          name: "Julia Smith",          role: "Director",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-modern-female_23-2148415853.jpg"},
      ]}
      title="Voices of Success"
      description="Hear how industry leaders are leveraging our platform to transform their demo process."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Start Your Demo Journey"
      description="Have questions? Fill out the form below and our team will get in touch shortly to assist with your requirements."
      inputs={[
        {
          name: "fullName",          type: "text",          placeholder: "Full Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Work Email",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "Tell us about your needs...",        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/brown-red-watercolor-texture_95678-149.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Product",          items: [
            {
              label: "Features",              href: "#features"},
            {
              label: "Security",              href: "#"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About",              href: "#"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
      ]}
      logoText="Demo it is for under testing it will publ;ish soon as possible by [abdul nafih s]"
      copyrightText="© 2025 nafih under demo Pro, Inc."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
