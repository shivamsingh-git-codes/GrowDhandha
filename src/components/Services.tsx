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
        <p>With Cloud Based Accounting Softwares coming in, there is opportunity to get your books maintained
remotely and securely. We integrate our AI based API with your software so that you are always
updated with your Accounts. At the end of the day, we send summary of your transactions, including
change in cash, Stock, Payables, receivables and list of upcoming payments and receivables.</p>

        <h4 className="font-semibold text-base">Statutory Filings: Periodic and Annual</h4>
        <p>We Assist our clients to Statutory fillings either they are periodic GST returns, TDS returns, ROC fillings
or any specific returns we assist in all and at the end we report to the owner of the business that all
the returns have been filled and complied and no extra penny will be spent for non-compliances.</p>

        <h4 className="font-semibold text-base">Assist in Finalising Financial Statements</h4>
        <p>Since we maintain your books of Accounts, we will be the one those will deal with your auditors and
close their queries. We will assist in finalising your Financial statements on time and making your
compliant with all regulations.</p>

        <h4 className="font-semibold text-base">Managing Payroll</h4>
        <p>It becomes complex to handle payroll of workforce engaged in manufacturing activity or providing
service. We will handle all their payouts either during the month and at the end of the month, their
statutory deductions, reimbursements along with PF, Labour cess compliances. We provide report for
monthly deductions by last working day of the month so that salary payments are not delayed. This is
done with the help of biometric attendance and virtual attendance where workforce is employed on
site or field.</p>
      </div>
    )
  },
  {
    title: "Dedicated MSME Desk",
    icon: Briefcase,
    content: (
      <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
        <h4 className="font-semibold text-base">MSME Registration & Certification</h4>
        <p>We provide end-to-end support to get registered under the MSME Act and avail government benefits
like interest subsidiary and concerned state Government schemes.</p>

        <h4 className="font-semibold text-base">Compliance & Regulatory Support</h4>
        <p>From Udyam registration to GST, ROC, and labour law filings — we ensure full compliance with
minimum hassle.</p>

        <h4 className="font-semibold text-base">Access to Credit & Finance</h4>
        <p>Biggest painpoint of MSME is access to credit. We assist MSMEs in fund raising, Overdrafts/cash
credits Debt Syndication along with receivable discounting at the competitive pricing. We assist in
preparing proposals, CMA data, Projections and closing documentation with Banks. We deal with all
types of Banks ranging from PSU to private banks and MNC banks to NBFCs .</p>

        <h4 className="font-semibold text-base">Advisory on Scaling & Growth</h4>
        <p>In order to grow MSME need to look beyond Numbers in their Financials Statements. Strategic input
on revenue, costing and cashflows will help MSMEs to grow multifolds. Most of MSMEs focus on
reducing their cost rather than increasing their revenue. A strategic shift is required to take your
MSME to next level.</p>

        <h4 className="font-semibold text-base">Import-Export Assistance</h4>
        <p>In this Globalised world, it is important to have a Global footprint but most of MSMEs doesn’t know
how to export their product or import what they require. We assist in facilitating the MSMEs to enter
this globalised world.</p>
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
    title: "Social Media Management",
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
