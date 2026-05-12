"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumSizeLargeTitles"
        background="fluid"
        cardStyle="gradient-mesh"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Services", id: "features" },
        { name: "Our Work", id: "products" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Home Town Curtains"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Home Town Curtains & Upholstery"
      description="Expert design, custom sewing, and professional installation of premium curtains and upholstery in Abu Dhabi. Transform your space with elegance and quality."
      buttons={[{ text: "Contact Us", href: "#contact" }]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D0Q2fsflIqSUYXgxCC5zOjNC93/uploaded-1778585947624-ukcbfkhm.jpg"
      imageAlt="Home Town Curtains Showroom"
      showDimOverlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Crafting Elegance for Your Home"
      description="With years of experience, we specialize in high-quality curtain fabrication and furniture restoration. Our team is dedicated to providing bespoke solutions that reflect your personal style, using only the finest fabrics and materials. We take pride in our precision sewing and reliable installation services."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D0Q2fsflIqSUYXgxCC5zOjNC93/uploaded-1778585535431-fpnmlyz4.jpg?_wi=1"
      imageAlt="Our workshop and premium fabrics"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { title: "Custom Drapery", description: "Tailored to your exact windows", imageSrc: "http://img.b2bpic.net/free-photo/set-grey-dense-fabrics-uniform-texture-choice-materials-grey-colors_169016-15231.jpg?_wi=2" },
        { title: "Furniture Restoration", description: "Give your upholstery new life", imageSrc: "http://img.b2bpic.net/free-photo/close-up-velvet-texture_23-2149305940.jpg?_wi=1" },
        { title: "Professional Fitting", description: "Seamless installation every time", imageSrc: "http://img.b2bpic.net/free-photo/white-wooden-wall-background_53876-89006.jpg?_wi=1" }
      ]}
      title="Our Premium Services"
      description="Professional services designed to elevate your living environment."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "1", name: "Luxury Silk Drapes", price: "Custom", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D0Q2fsflIqSUYXgxCC5zOjNC93/uploaded-1778585535431-fpnmlyz4.jpg?_wi=2" },
        { id: "2", name: "Velvet Living Curtains", price: "Custom", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D0Q2fsflIqSUYXgxCC5zOjNC93/uploaded-1778585391030-1yk8o2or.jpg" },
        { id: "3", name: "Minimalist Sheer", price: "Custom", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D0Q2fsflIqSUYXgxCC5zOjNC93/uploaded-1778577690411-zqu39u0e.jpg" }
      ]}
      title="Recent Installations"
      description="Explore some of our latest projects and high-end curtain designs."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", title: "Exceptional Quality", quote: "Excellent service and high quality fabrics. Very happy with the results.", name: "Ahmed Al-Farsi", role: "Homeowner" },
        { id: "2", title: "Professional Design", quote: "Professional and fast. The curtains look amazing in the new villa.", name: "Sarah Miller", role: "Interior Designer" }
      ]}
      title="What Our Clients Say"
      description="Trusted craftsmanship and dedication to your home comfort."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "1", title: "How long does installation take?", content: "Installation typically takes less than a day, depending on the number of curtains." },
        { id: "2", title: "Do you provide fabric samples?", content: "Yes, we bring a wide range of fabric samples to your home." },
      ]}
      title="Frequently Asked Questions"
      description="Answers to common questions about our services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Contact Us"
      title="Get a Free Quote"
      description="Ready to upgrade your home? Reach out to us for a consultation."
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-woman-working-as-interior-designer_23-2150346509.jpg"
      imageAlt="Our design team"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        { title: "Home Town Curtains", items: [{ label: "Location: Abu Dhabi, UAE" }, { label: "Email: awaissami6789@gmail.com" }, { label: "Phone: 055 245 7713" }] },
        { title: "Services", items: [{ label: "Custom Curtains" }, { label: "Upholstery" }] }
      ]}
      bottomLeftText="© 2024 Home Town Curtains & Upholstery"
      bottomRightText="All Rights Reserved"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}