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
    title: "Outsource Finance and HR Function ",
    icon: ClipboardList,
    content: (
      <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
        <div className="bg-white-50 border border-white-200 text-black-900 p-4 rounded-md shadow-sm">
        <p className="font-medium">
          Get rid of managing Financials and Accountants.
        </p>
        <p>
          We will coordinate with your Chartered Accountant and provide you with real-time updates. We will manage your Payrolls with AI and remove repetitive processes.
        </p>
      </div>
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
        <p>Biggest roadblocker of MSME is access to credit. We assist MSMEs in fund raising, Overdrafts/cash
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
        <p>This service covers the entire incorporation process, from selecting the right business
structure (like a Private Limited Company, LLP, or Proprietorship) to drafting the necessary
legal documents. We also ensure you obtain all the essential approvals and licenses specific
to your industry. This includes going through complex regulatory frameworks so your
business is compliant from day one, avoiding future legal hurdles.</p>

        <h4 className="font-semibold text-base">Startup India Registration</h4>
        <p>We help you navigate the process of registering under the Startup India initiative, which can
unlock a host of benefits. These include potential tax exemptions, easier access to funding,
simplified compliance. We also guide you through various government schemes and policies
that could benefit your specific industry or business model.</p>

        <h4 className="font-semibold text-base">Business Infrastructure</h4>
        <p>We assist in setting up robust and efficient systems for your core business functions. This
includes designing and implementing frameworks for accounting and bookkeeping,
managing payroll processes (including statutory compliances like provident fund and ESI),
ensuring overall regulatory compliance, and establishing effective internal controls to
safeguard your assets and ensure Sustainable Business growth.</p>

        <h4 className="font-semibold text-base">Hiring & Workforce Planning</h4>
        <p>Support hiring, policy creation, and documentation.</p>

        <h4 className="font-semibold text-base">Fundraising & CFO Services</h4>
        <p>This service includes everything from helping you craft a compelling, investor-ready pitch
deck and developing robust financial models that demonstrate your business's viability and
growth potential. We guide you through the fundraising journey, assisting with negotiating
term sheets with potential investors, and ultimately managing the capital raise process to
ensure a smooth and successful funding round.</p>
      </div>
    )
  },
  {
    title: "Social Media Management",
    icon: BarChart3,
    content: (
      <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
        <h4 className="font-semibold text-base">Digital Strategy & Branding</h4>
        <p>In today's competitive landscape, a strong online presence is non-negotiable. We'll work
with you to craft a powerful digital strategy that goes beyond just looking good; it'll clearly
communicate your product's unique value and voice. This involves defining your target
audience, understanding market trends, and developing a cohesive brand identity</p>

        <h4 className="font-semibold text-base">Performance Marketing</h4>
        <p>Driving traffic, leads, and revenue efficiently is at the core of successful digital marketing.
We assist in setting up and optimizing high-converting performance marketing campaigns
across major platforms. Whether it's through Meta (Facebook/Instagram Ads), Google Ads,
or other channels, our focus is on creating campaigns that deliver measurable results. We
handle everything from audience targeting and ad creative development to bid
management.</p>

        <h4 className="font-semibold text-base">Content & Social Media</h4>
        <p>Our service includes consistent, platform-specific content creation that speaks directly to
your audience's interests and pain points. We also provide community management,
actively interacting with your followers, responding to comments, and fostering a loyal
community around your brand. This holistic approach ensures your social media presence is
dynamic, relevant, and consistently growing.</p>

        <h4 className="font-semibold text-base">Website & Funnel Development</h4>
        <p>We design and develop conversion-optimized websites and landing pages that aren't just
aesthetically pleasing, but are built with your sales goals in mind. This involves mapping out
the customer journey, creating intuitive navigation, and designing compelling calls to action.
The goal is to build seamless funnels that guide visitors effortlessly towards making a
purchase or taking a desired action.</p>

        <h4 className="font-semibold text-base">Analytics & Tracking</h4>
        <p>We implement robust data tracking systems and dashboards that provide you with clear,
real-time insights into your digital marketing performance. This means you'll understand
exactly how your campaigns are performing, where your traffic is coming from, and how
users are interacting with your website and content. With this actionable feedback, we can
continuously refine strategies, optimize campaigns, and make data-driven decisions to
ensure your marketing efforts are always yielding the best possible results.</p>
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

      {/* 👉 Add this conditionally for index 0 */}
      {index === 0 && (
        <div className="mt-4 text-sm text-gray-800 bg-white-50 border border-white-200 p-3 rounded-md shadow-sm">
          <p className="font-medium mb-1">Get rid of managing Financials and Accountants.</p>
          <p>
            We will coordinate with your Chartered Accountant and provide you with real-time updates. We will manage your Payrolls with AI and remove repetitive processes.
          </p>
        </div>
      )}
      {index === 1 && (
        <div className="mt-4 text-sm text-gray-800 bg-white-50 border border-white-200 p-3 rounded-md shadow-sm">
          <p className="font-medium mb-1">India can’t ignore contributions of MSME in Economy and likewise we can’t ignore them.</p>
          <p>
            To Facilitate their growth and expansion we have dedicated MSME desk which have everything from Schemes, benefits to compliance management for MSME.
          </p>
        </div>
      )}
       {index === 2 && (
        <div className="mt-4 text-sm text-gray-800 bg-white-50 border border-white-200 p-3 rounded-md shadow-sm">
          <p className="font-medium mb-1">At grow Dhanda, we help founders turn great ideas into thriving businesses. </p>
          <p>
            We go beyond advice we execute. From incorporating your company to raising your first round, we act as your extended startup team, taking care of the foundations while you focus on building your product.
          </p>
        </div>
      )}
       {index === 3 && (
        <div className="mt-4 text-sm text-gray-800 bg-white-50 border border-white-200 p-3 rounded-md shadow-sm">
          <p className="font-medium mb-1">Are you a product owner stepping into the world of digital media?</p>
          <p>
            We’re here to make that journey seamless and successful. With a dedicated and passionate team by your side, we help you not just enter but dominate the digital landscape. From strategy to execution, we provide end-to-end support to turn your product into a powerful digital brand.
          </p>
        </div>
      )}
       
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
