"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

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
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Our Work",
          id: "products",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Home Town Curtains"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Home Town Curtains & Upholstery"
      description="Expert design, custom sewing, and professional installation of premium curtains and upholstery in Abu Dhabi. Transform your space with elegance and quality."
      buttons={[
        {
          text: "Contact Us",
          href: "#contact",
        },
      ]}
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
      imageSrc="http://img.b2bpic.net/free-photo/set-grey-dense-fabrics-uniform-texture-choice-materials-grey-colors_169016-15231.jpg"
      imageAlt="Our workshop and premium fabrics"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "1",
          title: "Custom Drapery",
          subtitle: "Tailored to your exact windows",
          category: "Sewing",
          value: "Premium",
        },
        {
          id: "2",
          title: "Furniture Restoration",
          subtitle: "Give your upholstery new life",
          category: "Repair",
          value: "Expert",
        },
        {
          id: "3",
          title: "Professional Fitting",
          subtitle: "Seamless installation every time",
          category: "Install",
          value: "Precise",
        },
      ]}
      title="Our Services"
      description="Professional services designed to elevate your living environment."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Luxury Silk Drapes",
          price: "Custom",
          variant: "Premium",
          imageSrc: "http://img.b2bpic.net/free-photo/set-dark-multi-colored-dense-fabrics-uniform-texture-choice-materials-different-colors_169016-15721.jpg",
        },
        {
          id: "2",
          name: "Velvet Living Curtains",
          price: "Custom",
          variant: "Modern",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-velvet-texture_23-2149305940.jpg",
        },
        {
          id: "3",
          name: "Minimalist Sheer",
          price: "Custom",
          variant: "Simple",
          imageSrc: "http://img.b2bpic.net/free-photo/white-wooden-wall-background_53876-89006.jpg",
        },
        {
          id: "4",
          name: "Blackout Bedroom",
          price: "Custom",
          variant: "Functional",
          imageSrc: "http://img.b2bpic.net/free-photo/navy-silk-fabric-textured-background_53876-101744.jpg",
        },
        {
          id: "5",
          name: "Custom Roller Shades",
          price: "Custom",
          variant: "Modern",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-looks-through-blinds-early-morning-sunlight_169016-17901.jpg",
        },
        {
          id: "6",
          name: "Ornate Formal Design",
          price: "Custom",
          variant: "Classic",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-store-chooses-wallpaper-her-home-concept-repair-shopping_169016-4586.jpg",
        },
      ]}
      title="Recent Installations"
      description="Explore some of our latest projects and high-end curtain designs."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Ahmed Al-Farsi",
          role: "Homeowner",
          testimonial: "Excellent service and high quality fabrics. Very happy with the results.",
          imageSrc: "http://img.b2bpic.net/free-photo/view-woman-decorating-her-home-with-orchid-flower_23-2151074444.jpg",
        },
        {
          id: "2",
          name: "Sarah Miller",
          role: "Interior Designer",
          testimonial: "Professional and fast. The curtains look amazing in the new villa.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-attractive-woman-elegant-hotel-cafeteria_657883-397.jpg",
        },
        {
          id: "3",
          name: "Khalid Hassan",
          role: "Homeowner",
          testimonial: "Great attention to detail and reliable installation. Highly recommended.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-with-red-lips-holding-plant-fashionable-girl-bright-hat-striped-t-shirt-beige-skirt-rejoices-apartment_197531-18745.jpg",
        },
        {
          id: "4",
          name: "Fatima Zaid",
          role: "Owner",
          testimonial: "They turned our old couch into a piece of art. Perfect upholstery work.",
          imageSrc: "http://img.b2bpic.net/free-photo/couple-sharing-great-working-relationship_329181-17640.jpg",
        },
        {
          id: "5",
          name: "John Doe",
          role: "Resident",
          testimonial: "Best drapery service in Abu Dhabi. Will definitely use them again.",
          imageSrc: "http://img.b2bpic.net/free-photo/laughing-couple-posing-kitchen_23-2147736628.jpg",
        },
      ]}
      title="Trusted by Clients"
      description="Read what our customers think about our craftsmanship and dedication."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "How long does installation take?",
          content: "Installation typically takes less than a day, depending on the number of curtains.",
        },
        {
          id: "2",
          title: "Do you provide fabric samples?",
          content: "Yes, we bring a wide range of fabric samples to your home so you can choose the best match.",
        },
        {
          id: "3",
          title: "Do you offer upholstery restoration?",
          content: "Yes, we specialize in high-quality upholstery restoration for sofas, chairs, and cushions.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Answers to common questions about our services and process."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Contact Us"
      title="Get a Free Quote"
      description="Ready to upgrade your home? Reach out to us for a consultation."
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-woman-working-as-interior-designer_23-2150346509.jpg"
      imageAlt="Our design team ready to assist"
      mediaAnimation="slide-up"
      mediaPosition="right"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Home Town Curtains",
          items: [
            {
              label: "Near Hamdan Street, Abu Dhabi",
              href: "#",
            },
            {
              label: "Phone: 055 245 7713",
              href: "tel:0552457713",
            },
            {
              label: "Email: awaissami6789@gmail.com",
              href: "mailto:awaissami6789@gmail.com",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Custom Curtains",
              href: "#",
            },
            {
              label: "Upholstery",
              href: "#",
            },
            {
              label: "Repair & Fitting",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Home Town Curtains & Upholstery"
      bottomRightText="All Rights Reserved"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
