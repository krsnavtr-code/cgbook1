import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getOwnerInfo } from "../api/ownerInfoApi";
import {
  ArrowLeftIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  QuestionMarkCircleIcon,
  BookOpenIcon,
  LifebuoyIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const HelpCenter = () => {
  const navigate = useNavigate();
  const [ownerInfo, setOwnerInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategory, setExpandedCategory] = useState(null);

  useEffect(() => {
    const fetchOwnerInfo = async () => {
      try {
        const ownerResponse = await getOwnerInfo();
        const ownerData =
          ownerResponse.data?.ownerInfo || ownerResponse.data || ownerResponse;
        setOwnerInfo(ownerData);
      } catch (error) {
        console.log("Owner info not available:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOwnerInfo();
  }, []);

  // Create contact links
  const whatsappNumber =
    ownerInfo?.whatsappNumber ||
    ownerInfo?.owners?.[0]?.whatsappNumber ||
    ownerInfo?.callNumber ||
    ownerInfo?.owners?.[0]?.callNumber;

  const whatsappLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=Hi! I need help with your service`
    : null;

  const helpCategories = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: BookOpenIcon,
      color: "bg-blue-500",
      items: [
        "How to create an account",
        "Profile verification process",
        "Understanding profile ratings",
        "How to book a meeting",
      ],
    },
    {
      id: "safety",
      title: "Safety & Security",
      icon: ShieldCheckIcon,
      color: "bg-green-500",
      items: [
        "Profile verification guide",
        "Safe meeting practices",
        "Reporting suspicious activity",
        "Privacy protection tips",
      ],
    },
    {
      id: "payments",
      title: "Payments & Billing",
      icon: DocumentTextIcon,
      color: "bg-purple-500",
      items: [
        "Payment methods accepted",
        "Refund policy",
        "Billing inquiries",
        "Transaction security",
      ],
    },
    {
      id: "technical",
      title: "Technical Support",
      icon: LifebuoyIcon,
      color: "bg-orange-500",
      items: [
        "App troubleshooting",
        "Website issues",
        "Account problems",
        "Performance optimization",
      ],
    },
  ];

  const commonIssues = [
    {
      title: "Profile not showing up",
      solution:
        "Check if your profile is active and verified. Contact support if issues persist.",
      severity: "medium",
    },
    {
      title: "Can't log in to account",
      solution:
        "Use the 'Forgot Password' option or contact support for account recovery.",
      severity: "high",
    },
    {
      title: "Payment not processed",
      solution:
        "Check your payment method and try again. Contact support if payment fails.",
      severity: "high",
    },
    {
      title: "Profile verification pending",
      solution:
        "Verification typically takes 24-48 hours. You'll receive an email when completed.",
      severity: "low",
    },
  ];

  const filteredCategories = helpCategories.filter(
    (category) =>
      category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.items.some((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <span className="mr-2">←</span>
              Back
            </button>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              Help Center
            </h1>
            <div className="w-16"></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <LifebuoyIcon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-black text-white mb-4">
            How Can We Help?
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Find answers to common questions, get support, and learn how to make
            the most of funwithjuli.in
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Help Categories */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Help Categories
            </h2>
            <div className="space-y-4">
              {filteredCategories.map((category) => {
                const Icon = category.icon;
                const isExpanded = expandedCategory === category.id;

                return (
                  <div
                    key={category.id}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setExpandedCategory(isExpanded ? null : category.id)
                      }
                      className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {category.title}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {category.items.length} articles
                          </p>
                        </div>
                      </div>
                      <ChevronRightIcon
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          isExpanded ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700">
                        <ul className="space-y-3 pt-4">
                          {category.items.map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                              <CheckCircleIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Actions & Common Issues */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Quick Contact
              </h3>
              <div className="space-y-3">
                {whatsappLink && (
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                  >
                    <ChatBubbleLeftRightIcon className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      WhatsApp Support
                    </span>
                  </a>
                )}
                <button className="w-full flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                  <EnvelopeIcon className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    Email Support
                  </span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                  <PhoneIcon className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    Call Support
                  </span>
                </button>
              </div>
            </div>

            {/* Common Issues */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Common Issues
              </h3>
              <div className="space-y-4">
                {commonIssues.map((issue, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-gray-200 dark:border-gray-600 pl-4"
                  >
                    <div className="flex items-start gap-2">
                      {issue.severity === "high" && (
                        <ExclamationTriangleIcon className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                      )}
                      {issue.severity === "medium" && (
                        <QuestionMarkCircleIcon className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-1" />
                      )}
                      {issue.severity === "low" && (
                        <CheckCircleIcon className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      )}
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                          {issue.title}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {issue.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Help Stats */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-xs opacity-80">Support Available</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">5min</div>
                  <div className="text-xs opacity-80">Avg Response</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-xs opacity-80">Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-xs opacity-80">Daily Users</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
