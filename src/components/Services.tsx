import { useState } from 'react';
import {
  ClipboardList,
  Briefcase,
  Globe,
  BarChart3
} from 'lucide-react';
import {
  Card, CardHeader, CardTitle, CardDescription
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: "Outsource Finance and HR Function",
    icon: ClipboardList,
    content: (
      <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
        <h4 className="font-semibold text-base">Managing Books of Accounts and Compliances</h4>
        <p>With Cloud Based Accounting Softwares...updated with your Accounts.</p>

        <h4 className="font-semibold text-base">Statutory Filings: Periodic and Annual</h4>
        <p>We assist our clients in GST, TDS, ROC filings...no extra penny spent for non-compliances.</p>

        <h4 className="font-semibold text-base">Assist in Finalising Financial Statements</h4>
        <p>We help you close audits, finalize statements and stay compliant.</p>

        <h4 className="font-semibold text-base">Managing Payroll</h4>
        <p>We manage complex payrolls using AI...compliance and timely reports for salary payments.</p>
      </div>
    )
  },
  {
    title: "Dedicated MSME Desk",
    icon: Briefcase,
    content: (
      <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
        <h4 className="font-semibold text-base">MSME Registration & Certification</h4>
        <p>Get registered and avail subsidies and government schemes.</p>

        <h4 className="font-semibold text-base">Compliance & Regulatory Support</h4>
        <p>We handle everything from Udyam to GST, ROC and labour filings.</p>

        <h4 className="font-semibold text-base">Access to Credit & Finance</h4>
        <p>We assist with fund raising, overdrafts, proposals, CMA data and more.</p>

        <h4 className="font-semibold text-base">Advisory on Scaling & Growth</h4>
        <p>Strategic advisory on revenue, cash flow, and business expansion.</p>

        <h4 className="font-semibold text-base">Import-Export Assistance</h4>
        <p>Support MSMEs to go global through exports/imports.</p>
      </div>
    )
  },
  {
    title: "Startup India",
    icon: Globe,
    content: (
      <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
        <h4 className="font-semibold text-base">Company Incorporation & Compliance</h4>
        <p>From registration to industry-specific approvals, we’ve got it covered.</p>

        <h4 className="font-semibold text-base">Startup India Registration</h4>
        <p>We unlock IP protection, benefits, and recognition for your startup.</p>

        <h4 className="font-semibold text-base">Business Infrastructure</h4>
        <p>Set up accounting, payroll, compliance systems, and internal controls.</p>

        <h4 className="font-semibold text-base">Hiring & Workforce Planning</h4>
        <p>Support hiring, policy creation, and documentation.</p>

        <h4 className="font-semibold text-base">Fundraising & CFO Services</h4>
        <p>Investor-ready decks, term sheet negotiation, budgeting, and MIS reporting.</p>
      </div>
    )
  },
  {
    title: "Social Media Corner",
    icon: BarChart3,
    content: (
      <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
        <h4 className="font-semibold text-base">Digital Strategy & Branding</h4>
        <p>Build a strong online presence with a consistent brand voice.</p>

        <h4 className="font-semibold text-base">Performance Marketing</h4>
        <p>Set up efficient Meta/Google Ads campaigns to drive conversions.</p>

        <h4 className="font-semibold text-base">Content & Social Media</h4>
        <p>Run engaging content, manage your community, and build loyalty.</p>

        <h4 className="font-semibold text-base">Website & Funnel Development</h4>
        <p>Develop landing pages and websites aligned with your sales journey.</p>

        <h4 className="font-semibold text-base">Analytics & Tracking</h4>
        <p>Real-time dashboards and insights to measure and optimize performance.</p>
      </div>
    )
  }
];

const Services = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  return (
    <section id="services" className="gd-section bg-white">
      <div className="gd-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="gd-heading">Our Services</h2>
          <p className="gd-text">
            We provide comprehensive business solutions to help you focus on what matters most — growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="gd-card cursor-pointer border-t-4 border-t-growdhanda-gold" onClick={() => setActiveModal(index)}>
              <CardHeader>
                <div className="w-12 h-12 bg-growdhanda-gold/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon size={24} className="text-growdhanda-gold" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-gray-600 mt-2">
                  Click to know more.
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {activeModal !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-3 right-4 text-gray-500 hover:text-black"
              >
                ✕
              </button>
              <h3 className="text-xl font-semibold mb-4 text-growdhanda-gold">{services[activeModal].title}</h3>
              {services[activeModal].content}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
