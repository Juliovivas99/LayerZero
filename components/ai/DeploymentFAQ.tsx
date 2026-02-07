'use client';

import { useState } from 'react';

export default function DeploymentFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What AI systems can you deploy?",
      answer: "We deploy three main categories: (1) OpenClaw executive agents for inbox/calendar management, (2) On-premise LLM infrastructure (Llama 3, Mixtral, custom models) for private AI access, and (3) Custom agent swarms for specialized workflows like lead enrichment, research automation, and data pipelines. All systems are deployed on your hardware or private cloud with full security hardening."
    },
    {
      question: "How long does deployment take?",
      answer: "Most deployments take 5-8 hours total, typically completed in 1-2 sessions. You go live the same day for white-glove deployments. For in-person setups in Miami, we come to your location. Remote deployments happen over video call on your hardware or VPS. Custom infrastructure builds take 1-4 weeks depending on complexity."
    },
    {
      question: "Is this safe? What about security?",
      answer: "AI agents with access to your email and calendar are never 100% risk-free. The bigger risk is your InfoSec team blocking it as shadow AI before you get value. We configure systems to pass security review: audit trails, access controls, least privilege permissions, loopback-only binding, credential management in environment variables, and allowlist-only access. We help you make the decisions necessary to get to production instead of stuck in compliance limbo."
    },
    {
      question: "What access do you need during setup?",
      answer: "We need temporary access to the machine/network where the AI will run and the accounts you're connecting (email, calendar, messaging, CRM). We use least privilege access and recommend credential rotation after go-live. For remote setups, we work over screenshare. For in-person, we're on your network for the duration of deployment."
    },
    {
      question: "Do you offer support after deployment?",
      answer: "Every deployment includes 14-day hypercare (white-glove) or 30-day hypercare (custom builds) via a dedicated Slack Connect channel. For ongoing monitoring, security updates, workflow optimization, and support, we offer Managed Care plans starting at $1,875/month. This includes health monitoring, security patches, engineering hours, and priority support."
    },
    {
      question: "Can you deploy multiple agents or systems?",
      answer: "Yes—this is common for teams with 4-50 employees. We help you decide which roles need their own agent (CEO, CFO, Head of Sales) versus shared workflows. Each additional system is +$1,200. Most companies deploy 2-6 executive agents plus one local LLM infrastructure. We also handle multi-agent deployments where different agents specialize in different tasks."
    },
    {
      question: "What's the difference between your white-glove deployment and custom builds?",
      answer: "White-glove deployment means we professionally install proven open-source AI systems (like OpenClaw, Ollama, LangChain agents) with standard integrations. It's fast (same-day) and cost-effective ($1,200+). Custom builds are bespoke systems we engineer from scratch for unique business logic, starting at $3,500. Most teams start with deployment for quick wins, then scale into custom builds for proprietary workflows."
    },
    {
      question: "Where does my data go?",
      answer: "Your data stays on your infrastructure. All AI systems run locally on your hardware (Mac mini, Linux server, or private VPS). For on-premise LLMs, there are zero external API calls—the models run entirely in your environment. For OpenClaw agents, you control which external services they integrate with (Gmail, Slack, etc.). We never have persistent access to your data."
    },
    {
      question: "Do I need special hardware?",
      answer: "For OpenClaw agents: Mac mini recommended (required for iMessage), but Linux/cloud VMs work for most integrations. For local LLMs: We recommend GPU-enabled machines (NVIDIA RTX 4090, A100, or H100 for larger models) but can also deploy on CPU with quantized models. We provide hardware recommendations during the blueprint session and can source equipment at cost."
    },
    {
      question: "Can you integrate with our existing stack?",
      answer: "Yes. We integrate with Gmail, Outlook, Google Calendar, Slack, Microsoft Teams, Notion, HubSpot, Salesforce, Airtable, Linear, GitHub, and 50+ other tools. During the blueprint session, we audit your stack's API capabilities and design the integration architecture. If your tool has an API, we can connect to it."
    },
    {
      question: "What if something breaks?",
      answer: "All deployments include hypercare (14-30 days of fast fixes). After that, Managed Care plans include monitoring, alerting, and incident response. For custom builds, we include error handling, fallback logic, and monitoring dashboards from day one. We use uptime monitoring, log aggregation, and Slack alerts so your team knows immediately if something goes wrong."
    },
    {
      question: "Are you available outside Miami?",
      answer: "Yes. In-person white-glove deployment is currently available in Miami. Remote deployment is available worldwide—we deploy over video call on your hardware or VPS. We're expanding in-person coverage to more cities via licensed operators. Custom infrastructure builds are available remotely for any location."
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-[#F3F1ED]">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
            Frequently Asked<br />Questions
          </h2>
          <p className="text-base sm:text-lg text-[#666666] max-w-2xl mx-auto">
            Everything you need to know about deploying AI infrastructure in your organization.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border-2 border-black overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-[#F3F1ED] transition-colors"
              >
                <span className="font-bold text-[#0A0A0A] text-base sm:text-lg pr-4">
                  {faq.question}
                </span>
                <iconify-icon 
                  icon={openIndex === index ? "solar:alt-arrow-up-linear" : "solar:alt-arrow-down-linear"}
                  className="text-[#f97316] text-2xl flex-shrink-0"
                ></iconify-icon>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 text-sm sm:text-base text-[#666666] leading-relaxed border-t border-black/10">
                  <div className="pt-4">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
