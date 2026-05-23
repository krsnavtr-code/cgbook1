import "dotenv/config.js";
import mongoose from "mongoose";
import Profile from "../models/Profile.model.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import dns from "dns";
// Only set DNS in development/local environment
if (process.env.NODE_ENV !== "production") {
  dns.setServers(["8.8.8.8", "8.8.4.4"]);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const BASE_URL = "https://www.funwithjuli.in";
const SITEMAP_PATH = path.join(__dirname, "../../frontend/public/sitemap.xml");

// Static URLs with SEO attributes
const staticUrls = [
  { path: "/", priority: 1.0, changefreq: "daily" },
  { path: "/photos", priority: 0.9, changefreq: "weekly" },
  { path: "/new-arrivals", priority: 0.9, changefreq: "weekly" },
  // { path: "/meetings/delhi", priority: 0.8, changefreq: "weekly" },
  // { path: "/meetings/noida", priority: 0.8, changefreq: "weekly" },
  // { path: "/meetings/gurugram", priority: 0.8, changefreq: "weekly" },
  // { path: "/meetings/ghaziabad", priority: 0.8, changefreq: "weekly" },
  { path: "/escort-service-munirka", priority: 0.8, changefreq: "weekly" },
  { path: "/escort-service-mahipalpur", priority: 0.8, changefreq: "weekly" },
  { path: "/escort-service-vasant-kunj", priority: 0.8, changefreq: "weekly" },
  { path: "/escort-service-laxmi-nagar", priority: 0.8, changefreq: "weekly" },
  { path: "/escort-service-saket", priority: 0.8, changefreq: "weekly" },
  { path: "/escort-service-hauz-khas", priority: 0.8, changefreq: "weekly" },
  { path: "/escort-service-dwarka", priority: 0.8, changefreq: "weekly" },
  { path: "/escort-service-karol-bagh", priority: 0.8, changefreq: "weekly" },
  { path: "/escort-service-lajpat-nagar", priority: 0.8, changefreq: "weekly" },
  {
    path: "/escort-service-connaught-place",
    priority: 0.8,
    changefreq: "weekly",
  },
  { path: "/escort-service-south-delhi", priority: 0.8, changefreq: "weekly" },
  {
    path: "/escort-service-malviya-nagar",
    priority: 0.8,
    changefreq: "weekly",
  },
  { path: "/escort-service-nehru-place", priority: 0.8, changefreq: "weekly" },
  { path: "/escort-service-aerocity", priority: 0.8, changefreq: "weekly" },
  { path: "/escort-service-janakpuri", priority: 0.8, changefreq: "weekly" },
  {
    path: "/escort-service-new-ashok-nagar",
    priority: 0.8,
    changefreq: "weekly",
  },
  { path: "/escort-service-patel-nagar", priority: 0.8, changefreq: "weekly" },
  { path: "/escort-service-tilak-nagar", priority: 0.8, changefreq: "weekly" },
  { path: "/escort-service-palam", priority: 0.8, changefreq: "weekly" },
  { path: "/support-center", priority: 0.7, changefreq: "monthly" },
  { path: "/help-center", priority: 0.7, changefreq: "monthly" },
  { path: "/contact-us", priority: 0.7, changefreq: "monthly" },
  { path: "/scam-report", priority: 0.7, changefreq: "monthly" },
  { path: "/privacy-policy", priority: 0.5, changefreq: "yearly" },
  { path: "/terms-of-use", priority: 0.5, changefreq: "yearly" },
  { path: "/cookies-policy", priority: 0.5, changefreq: "yearly" },
];

// Generate URL entry XML
function generateUrlEntry(url, lastmod) {
  return `  <url>
    <loc>${BASE_URL}${url.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`;
}

// Generate sitemap XML
async function generateSitemap() {
  let profiles = [];
  let shouldCloseConnection = false;

  try {
    // Check if MongoDB is already connected
    if (mongoose.connection.readyState === 1) {
      console.log("✅ Using existing MongoDB connection");
    } else {
      // Connect to MongoDB
      await mongoose.connect(process.env.MONGO_URI);
      console.log("✅ Connected to MongoDB");
      shouldCloseConnection = true;
    }

    // Fetch all active profiles
    profiles = await Profile.find({ isActive: true }).select("name updatedAt");
    console.log(`✅ Found ${profiles.length} active profiles`);
  } catch (error) {
    console.warn("⚠️  Could not connect to MongoDB:", error.message);
    console.warn("⚠️  Generating sitemap with static URLs only");
  }

  try {
    // Get current date for lastmod
    const today = new Date().toISOString().split("T")[0];

    // Start sitemap XML
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    // Add static URLs
    staticUrls.forEach((url) => {
      sitemap += generateUrlEntry(url, today) + "\n";
    });

    // Add dynamic profile URLs if database was connected and profiles found
    // if (profiles.length > 0) {
    //   profiles.forEach((profile) => {
    //     const profileUrl = {
    //       path: `/profile/${encodeURIComponent(profile.name)}`,
    //       priority: 0.8,
    //       changefreq: "weekly",
    //     };
    //     const lastmod = profile.updatedAt
    //       ? profile.updatedAt.toISOString().split("T")[0]
    //       : today;
    //     sitemap += generateUrlEntry(profileUrl, lastmod) + "\n";
    //   });
    // }

    // Close sitemap XML
    sitemap += `</urlset>
`;

    // Write sitemap to file
    fs.writeFileSync(SITEMAP_PATH, sitemap, "utf8");
    console.log(`✅ Sitemap generated successfully at ${SITEMAP_PATH}`);
    console.log(`📊 Total URLs: ${staticUrls.length + profiles.length}`);
    console.log(`📄 Static URLs: ${staticUrls.length}`);
    console.log(`🔄 Dynamic URLs: ${profiles.length}`);

    // Close MongoDB connection only if we opened it
    if (shouldCloseConnection) {
      await mongoose.connection.close();
      console.log("✅ MongoDB connection closed");
    }

    return {
      success: true,
      totalUrls: staticUrls.length + profiles.length,
      staticUrls: staticUrls.length,
      dynamicUrls: profiles.length,
    };
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
    if (shouldCloseConnection) {
      await mongoose.connection.close();
    }
    return {
      success: false,
      error: error.message,
    };
  }
}

// Run the generator
generateSitemap()
  .then((result) => {
    if (result.success) {
      console.log("\n✨ Sitemap generation completed successfully!");
      process.exit(0);
    } else {
      console.error("\n❌ Sitemap generation failed:", result.error);
      process.exit(1);
    }
  })
  .catch((error) => {
    console.error("❌ Unexpected error:", error);
    process.exit(1);
  });

export default generateSitemap;
